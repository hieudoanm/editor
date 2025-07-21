import { Openings } from '@editor/components/apps/chess/ChessOpenings';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Head from 'next/head';

const OpeningsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chess Openings</title>
      </Head>
      <div className="flex h-screen w-screen flex-col overflow-hidden">
        <Navbar />
        <Divider />
        <div className="h-full grow">
          <Openings />
        </div>
      </div>
    </>
  );
};

export default OpeningsPage;
