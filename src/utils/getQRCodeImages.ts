import QRCode, { QRCodeToDataURLOptions } from 'qrcode';

const defaultOptions: Partial<QRCodeToDataURLOptions> = {
  errorCorrectionLevel: 'M',
  width: 256,
};

export default async function getQRImages(
  list: string[],
  options?: QRCodeToDataURLOptions,
): Promise<string[]> {
  const qrCodeUrlPromises = list.map(item =>
    QRCode.toDataURL(item, { ...defaultOptions, ...options }),
  );
  const images = await Promise.all(qrCodeUrlPromises);
  return images;
}
