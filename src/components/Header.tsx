import { Flex, Heading, IconButton, useColorMode } from '@chakra-ui/react';

import { MoonIcon, QRIcon, SunIcon } from './Icons';
import QRSettings from './QRSettings';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  const isDarkMode = colorMode === 'dark';

  return (
    <Flex as="header" justify="space-between" align="center" shadow="md" p="5">
      <QRSettings />
      <Heading fontSize={['xl', '2xl', '4xl']}>
        BulQR Generator <QRIcon ml="2" fontSize="larger" />
      </Heading>
      <IconButton
        aria-label="Toggle theme"
        icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
}
