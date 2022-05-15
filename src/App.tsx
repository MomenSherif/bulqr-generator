import { useState } from 'react';
import { Box, Container, useColorModeValue } from '@chakra-ui/react';
import Header from './components/Header';
import QRInput from './components/QRInput';

function App() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const [input, setInput] = useState('');

  return (
    <Box minH="100vh" bg={bg}>
      <Header />
      <Container maxW="container.xl" pt="10">
        <QRInput value={input} onChange={setInput} />
      </Container>
    </Box>
  );
}

export default App;
