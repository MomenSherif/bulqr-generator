import { useState } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { downloadZip } from 'client-zip';

import { ZippedUrlAndQR } from '../types';
import ZipFolderIcon from './Icons/ZipFolder.icon';
import dataURLtoFile from '../utils/dataURLtoFile';
import downloadFile from '../utils/downloadFile';
import generateRandomString from '../utils/generateRandomString';

type DownloadBulkProps = {
  zippedCodes: ZippedUrlAndQR;
} & ButtonProps;

export default function DownloadBulk({
  zippedCodes,
  ...props
}: DownloadBulkProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleClick = async () => {
    setIsDownloading(true);
    const files = zippedCodes.map(([url, qr]) => ({
      name: `${url.replace(/\//g, '_')}.png`,
      input: dataURLtoFile(qr, url),
    }));
    const blob = await downloadZip(files).blob();
    downloadFile(`${generateRandomString()}.zip`, blob);
    setIsDownloading(false);
  };

  return (
    <Button
      size="lg"
      leftIcon={<ZipFolderIcon fontSize="3xl" />}
      colorScheme="yellow"
      isLoading={isDownloading}
      loadingText="Downloading"
      onClick={handleClick}
      {...props}
    >
      Download
    </Button>
  );
}
