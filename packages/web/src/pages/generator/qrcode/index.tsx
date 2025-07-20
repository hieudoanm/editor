import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Navbar } from '@editor/components/shared/Navbar';
import { download } from '@editor/utils/download';
import { toDataURL } from 'qrcode';
import { FC, useState } from 'react';

const QRCode: FC = () => {
  const [{ dataURL = '', url = 'https://google.com' }, setState] = useState<{
    dataURL: string;
    url: string;
  }>({
    dataURL: '',
    url: 'https://google.com',
  });

  const generate = async () => {
    const dataURL = await toDataURL(url, {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      width: 512,
      margin: 1,
      color: {
        dark: '#F5F5F5', // QR code dots (white)
        light: '#171717', // Background (black)
      },
    });
    setState((previous) => ({ ...previous, dataURL }));
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-between">
      {/* Navbar */}
      <Navbar />
      {/* Divider */}
      <Divider />
      <div className="container mx-auto flex w-full grow flex-col items-center justify-center gap-y-8 p-8">
        <div className="flex w-full justify-center gap-x-4">
          <Glass.Input id="url" name="url" placeholder="URL" className="grow" value={url} />
          <Glass.Button
            onClick={() => {
              generate();
            }}>
            Generate
          </Glass.Button>
        </div>
        {dataURL && (
          <div className="mx-auto flex w-full flex-col gap-y-8">
            <div
              className="mx-auto aspect-square w-full max-w-72 overflow-hidden rounded-2xl border border-neutral-800 bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${dataURL})` }}
            />
            <Glass.Button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                download({ content: dataURL, format: 'jpg', filename: 'qrcode' }).image();
              }}>
              Download
            </Glass.Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCode;
