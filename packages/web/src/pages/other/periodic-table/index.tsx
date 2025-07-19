import { PeriodicTable } from '@editor/components/apps/PeriodicTable';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';

const PeriodicTablePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Divider />
      <div className="container mx-auto p-8">
        <PeriodicTable />
      </div>
    </div>
  );
};

export default PeriodicTablePage;
