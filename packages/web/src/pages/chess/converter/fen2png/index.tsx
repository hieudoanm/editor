import { ChessFEN2PNG } from '@editor/components/apps/chess/ChessFEN2PNG';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const FEN2PNGPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>FEN to PNG</title>
      </Head>
      <div className="flex h-screen w-screen flex-col overflow-hidden">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex grow items-center justify-center p-8">
          <ChessFEN2PNG />
        </div>
      </div>
    </>
  );
};

export default FEN2PNGPage;
