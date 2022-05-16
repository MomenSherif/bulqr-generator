import { useMemo, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';

import QRInput from './QRInput';
import { ZippedUrlAndQR } from '../types';
import { MAX_CODES } from '../config';

const createQRWorker = createWorkerFactory(() => import('../utils/qr.worker'));

type QRFormProps = {
  onSubmit: (zippedValues: ZippedUrlAndQR) => void;
};

export default function QRForm({ onSubmit }: QRFormProps) {
  const qrWokrer = useWorker(createQRWorker);
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const values = useMemo(() => input.split('\n').filter(Boolean), [input]);

  const numberOfQRCodes = values.length;
  const isInvalid = numberOfQRCodes > MAX_CODES;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    setIsSubmitting(true);
    const qrCodeImages = await qrWokrer.generateImages(values);

    const zippedUrlandQR = values.map((url, idx) => [url, qrCodeImages[idx]]);

    onSubmit(zippedUrlandQR);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QRInput value={input} onChange={setInput} isInvalid={isInvalid} />
      <Button
        type="submit"
        disabled={!input || isInvalid}
        size="lg"
        display="flex"
        mt="5"
        mx="auto"
        w="sm"
        maxW="full"
        isLoading={isSubmitting}
      >
        Generate {numberOfQRCodes} QR Code {numberOfQRCodes ? '🚀' : '😢'}
      </Button>
    </form>
  );
}
