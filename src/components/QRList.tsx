import {
  Box,
  Image,
  SimpleGrid,
  SimpleGridProps,
  useColorModeValue,
} from '@chakra-ui/react';

type QRListProps = {
  codes: string[];
  key?: React.Key;
} & SimpleGridProps;

export default function QRList({ codes, key, ...props }: QRListProps) {
  const bg = useColorModeValue('gray.100', 'gray.800');
  return (
    <SimpleGrid
      key={key}
      columns={{ base: 2, md: 3, lg: 4 }}
      gap="8"
      {...props}
    >
      {codes.map((qr, idx) => (
        <Box key={idx} shadow="md" p="3" rounded="md" bg={bg}>
          <Image src={qr} w="full" />
        </Box>
      ))}
    </SimpleGrid>
  );
}
