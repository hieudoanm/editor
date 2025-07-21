import { ChessElo } from '@editor/components/apps/chess/ChessElo';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const EloPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elo Calculator</title>
      </Head>
      <div className="flex h-screen w-screen flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex grow items-center justify-center p-8">
          <ChessElo />
        </div>
      </div>
    </>
  );
};

export default EloPage;
