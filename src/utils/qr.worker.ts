import getQRCodeImages from './getQRCodeImages';

export async function generateImages(values: string[]): Promise<string[]> {
  const qrCodeImages = await getQRCodeImages(values);
  return qrCodeImages;
}
