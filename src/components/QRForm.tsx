import { useMemo, useState } from 'react';
import { Button } from '@chakra-ui/react';

import QRInput from './QRInput';
import { getQRCodeImages } from '../utils';

type QRFormProps = {
  onSubmit: (qrCodeImages: string[]) => void;
};

export default function QRForm({ onSubmit }: QRFormProps) {
  const [input, setInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const values = useMemo(() => input.split('\n').filter(Boolean), [input]);

  const numberOfQRCodes = values.length;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    setIsSubmitting(true);
    const qrCodeImages = await getQRCodeImages(values);
    onSubmit(qrCodeImages);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <QRInput value={input} onChange={setInput} />
      <Button
        type="submit"
        disabled={!input}
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
