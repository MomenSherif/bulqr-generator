import {
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Textarea,
  FormControlProps,
} from '@chakra-ui/react';
import { MAX_CODES } from '../config';

type QRInputProps = {
  value: string;
  onChange: (value: string) => void;
} & Omit<FormControlProps, 'onChange'>;

export default function QRInput({
  value,
  onChange,
  isInvalid,
  ...props
}: QRInputProps) {
  return (
    <FormControl isRequired isInvalid={isInvalid} {...props}>
      <FormLabel htmlFor="codes">QR Code(s)</FormLabel>
      <Textarea
        id="codes"
        placeholder="https://github.com/MomenSherif"
        resize="vertical"
        variant="outline"
        size="lg"
        rows={10}
        value={value}
        onChange={e => onChange(e.target.value)}
      />

      {!isInvalid ? (
        <FormHelperText>Enter each QR code on a new line</FormHelperText>
      ) : (
        <FormErrorMessage>
          Maximum QR allowed to generate is {MAX_CODES} codes.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
