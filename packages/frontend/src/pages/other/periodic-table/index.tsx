import { PeriodicTable } from '@editor/components/apps/PeriodicTable';
import { Divider } from '@editor/components/shared/Divider';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';

const PeriodicTablePage: NextPage = () => {
  return (
    <div className="min-h-screen">
      <Linear.Background />
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto grow overflow-auto p-4 md:p-8">
          <PeriodicTable />
        </div>
      </div>
    </div>
  );
};

export default PeriodicTablePage;
