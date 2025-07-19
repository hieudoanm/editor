import { Crypto } from '@editor/components/apps/Crypto';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';

const CryptoPage: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="flex h-full w-full grow items-center justify-center overflow-auto">
        <Crypto />
      </div>
    </div>
  );
};

export default CryptoPage;
