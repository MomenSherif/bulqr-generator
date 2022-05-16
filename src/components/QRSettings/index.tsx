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
} from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';

import CodeConfiguration from './CodeConfiguration';
import { FormValues } from './types';

export default function QRSettings() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const methods = useForm<FormValues>({
    defaultValues: {
      correctionLevel: 'M',
      margin: 4,
    },
  });
  const btnRef = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: FormValues) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
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
                </Accordion>
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
