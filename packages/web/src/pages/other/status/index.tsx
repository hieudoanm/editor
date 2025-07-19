import { Status } from '@editor/components/apps/Status';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';

const StatusPage = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <Divider />
      <div className="grow overflow-auto">
        <div className="container mx-auto p-4 md:p-8">
          <Status />
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
