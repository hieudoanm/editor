import { PGN2GIF } from '@editor/components/apps/chess/ChessPGN2GIF';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const PGN2GIFPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PGN to GIF</title>
      </Head>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex grow items-center justify-center p-8">
          <PGN2GIF />
        </div>
      </div>
    </>
  );
};

export default PGN2GIFPage;
