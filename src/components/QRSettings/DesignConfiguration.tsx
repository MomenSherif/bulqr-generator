import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormLabel,
  VStack,
} from '@chakra-ui/react';

import ColorPicker from '../ColorPicker';

export default function DesignConfiguration() {
  return (
    <AccordionItem border={0}>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Code Configuration
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>
        <VStack align="start" spacing={5}>
          <Box>
            <FormLabel>Background Color</FormLabel>
            <ColorPicker name="color.light" />
          </Box>
          <Box>
            <FormLabel>Foreground Color</FormLabel>
            <ColorPicker name="color.dark" />
          </Box>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
}
