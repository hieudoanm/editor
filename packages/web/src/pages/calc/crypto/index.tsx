import { Crypto } from '@editor/components/apps/finance/Crypto';
import { Divider } from '@editor/components/shared/Divider';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';

const CryptoPage: NextPage = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Linear.Background />
      <div className="relative z-100 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="flex grow items-center justify-center overflow-hidden">
          <Crypto />
        </div>
      </div>
    </div>
  );
};

export default CryptoPage;
