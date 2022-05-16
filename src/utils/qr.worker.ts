import { QRCodeToDataURLOptions } from 'qrcode';

import getQRCodeImages from './getQRCodeImages';

export async function generateImages(
  values: string[],
  options?: QRCodeToDataURLOptions,
): Promise<string[]> {
  const qrCodeImages = await getQRCodeImages(values, options);
  return qrCodeImages;
}
