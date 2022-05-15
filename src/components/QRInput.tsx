import {
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
  FormControlProps,
} from '@chakra-ui/react';

type QRInputProps = {
  value: string;
  onChange: (value: string) => void;
} & Omit<FormControlProps, 'onChange'>;

export default function QRInput({ value, onChange, ...props }: QRInputProps) {
  return (
    <FormControl isRequired {...props}>
      <FormLabel htmlFor="codes">QR Code(s)</FormLabel>
      <Textarea
        id="codes"
        placeholder="https://github.com/MomenSherif"
        resize="vertical"
        variant="outline"
        size="lg"
        rows={7}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <FormHelperText>Enter each QR code on a new line</FormHelperText>
    </FormControl>
  );
}
