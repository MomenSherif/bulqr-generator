import {
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
} from '@chakra-ui/react';
import { HexColorPicker } from 'react-colorful';
import { useController } from 'react-hook-form';

type ColorPickerProps = {
  name: string;
};

export default function ColorPicker({ name }: ColorPickerProps) {
  const {
    field: { onChange, value, onBlur },
  } = useController({
    name,
  });

  return (
    <Popover placement="right-start">
      <PopoverTrigger>
        <IconButton
          aria-label="foreground color"
          borderWidth="2px"
          borderColor="#dfdfdf"
          bg={value}
        />
      </PopoverTrigger>
      <PopoverContent border="none" width="max-content">
        <PopoverArrow />
        <HexColorPicker
          title={name}
          color={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </PopoverContent>
    </Popover>
  );
}
