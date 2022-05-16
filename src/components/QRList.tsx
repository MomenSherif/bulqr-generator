import { SimpleGrid, SimpleGridProps } from '@chakra-ui/react';
import { ZippedUrlAndQR } from '../types';
import QRCard from './QRCard';

type QRListProps = {
  zippedCodes: ZippedUrlAndQR;
  key?: React.Key;
} & SimpleGridProps;

export default function QRList({ zippedCodes, ...props }: QRListProps) {
  return (
    <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap="8" {...props}>
      {zippedCodes.map(([url, qr], idx) => (
        <QRCard key={idx} url={url} qr={qr} />
      ))}
    </SimpleGrid>
  );
}
