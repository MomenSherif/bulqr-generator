import { useRef } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Accordion,
  Box,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import CodeConfiguration from './CodeConfiguration';
import DesignConfiguration from './DesignConfiguration';
import { FormValues } from './types';
import { useSettings } from '../../context/Settings.context';
import { SettingsIcon } from '../Icons';

export default function QRSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { settings, updateSettings } = useSettings();

  const methods = useForm<FormValues>({
    defaultValues: settings,
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: FormValues) => {
    updateSettings(data);
    onClose();
  };

  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="QR settings"
        onClick={onOpen}
        fontSize="xl"
      >
        <SettingsIcon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        preserveScrollBarGap
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>QR Code settings</DrawerHeader>
          <DrawerBody px="0">
            <FormProvider {...methods}>
              <form id="settings" onSubmit={methods.handleSubmit(onSubmit)}>
                <Accordion allowToggle allowMultiple>
                  <CodeConfiguration />
                  <Divider width="calc(100% - 32px)" mx="auto" my="4" />
                  <DesignConfiguration />
                </Accordion>
                <Box px="5" />
              </form>
            </FormProvider>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" form="settings" colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
