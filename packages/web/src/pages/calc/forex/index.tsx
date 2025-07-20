import { Forex } from '@editor/components/apps/finance/Forex';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';

const ForexPage: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <Divider />
      <div className="flex h-full w-full grow items-center justify-center overflow-auto">
        <Forex />
      </div>
    </div>
  );
};

export default ForexPage;
