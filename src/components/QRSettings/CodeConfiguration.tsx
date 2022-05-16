import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  VStack,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from './types';

export default function CodeConfiguration() {
  const { register } = useFormContext<FormValues>();

  return (
    <AccordionItem border={0}>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Code Configuration
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <VStack spacing={5}>
          <FormControl>
            <FormLabel>Error correction level</FormLabel>
            <Select {...register('errorCorrectionLevel')}>
              <option value="L">Low</option>
              <option value="M">Medium</option>
              <option value="Q">Quartile</option>
              <option value="H">High</option>
            </Select>
            <FormHelperText fontSize="small">
              Higher = bigger, more robust code
            </FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Width</FormLabel>
            {/* @ts-ignore */}
            <NumberInput
              {...register('width', { valueAsNumber: true })}
              min={115}
              max={1000}
              allowMouseWheel={false}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>QR witdh in px.</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Margin</FormLabel>
            {/* @ts-ignore */}
            <NumberInput
              {...register('margin', { valueAsNumber: true })}
              min={0}
              max={15}
              allowMouseWheel={false}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>
              How much wide the quiet zone should be
            </FormHelperText>
          </FormControl>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
