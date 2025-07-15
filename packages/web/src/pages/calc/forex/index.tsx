import { Forex } from '@converter/components/apps/Forex';
import { Navbar } from '@converter/components/shared/Navbar';
import { NextPage } from 'next';

const ForexPage: NextPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="flex h-full w-full grow items-center justify-center overflow-auto">
        <Forex />
      </div>
    </div>
  );
};

export default ForexPage;
