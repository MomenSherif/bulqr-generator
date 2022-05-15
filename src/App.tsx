import { useState } from 'react';
import { Box, Container, Divider, useColorModeValue } from '@chakra-ui/react';

import Header from './components/Header';
import QRForm from './components/QRForm';
import QRList from './components/QRList';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const [qrCodeImages, setQRCodeImages] = useState<string[]>([]);

  return (
    <Box minH="100vh" bg={bg}>
      <Header />

      <Container maxW="container.xl" pt="10">
        <QRForm onSubmit={setQRCodeImages} />
        <Divider my="10" />
        {!!qrCodeImages.length && (
          <QRList key={qrCodeImages.length} codes={qrCodeImages} />
        )}
      </Container>
    </Box>
  );
}

export default App;
