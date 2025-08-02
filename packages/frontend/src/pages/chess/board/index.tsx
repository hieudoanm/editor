import { Chess960 } from '@editor/components/apps/chess/Chess960';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const ChessboardPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chess960</title>
      </Head>
      <div className="flex min-h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto p-8">
          <Chess960 />
        </div>
      </div>
    </>
  );
};

export default ChessboardPage;
