import { Clock } from '@editor/components/apps/chess/ChessClock';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const ClockPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chess Clock</title>
      </Head>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex grow items-center justify-center p-8">
          <div className="w-full max-w-md">
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClockPage;
