import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

export default async function getQRImages(
  list: string[],
  options: QRCodeToDataURLOptions = {
    errorCorrectionLevel: 'M',
    width: 256,
  },
): Promise<string[]> {
  const qrCodeUrlPromises = list.map(item => QRCode.toDataURL(item, options));
  const images = await Promise.all(qrCodeUrlPromises);
  return images;
}
