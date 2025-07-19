import { Navbar } from '@editor/components/shared/Navbar';
import { useState } from 'react';
import { v1, v4, v7 } from 'uuid';

const UUIDPage = () => {
  const [{ uuidV1 = v1(), uuidV4 = v4(), uuidV7 = v7() }, setState] = useState<{
    uuidV1: string;
    uuidV4: string;
    uuidV7: string;
  }>({
    uuidV1: v1(),
    uuidV4: v4(),
    uuidV7: v7(),
  });
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800"></div>
      <div className="container mx-auto flex flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
        {[
          { version: 'uuidV1', label: 'uuid.v1', value: uuidV1 },
          { version: 'uuidV4', label: 'uuid.v4', value: uuidV4 },
          { version: 'uuidV7', label: 'uuid.v7', value: uuidV7 },
        ].map(({ version, label, value }) => {
          return (
            <div key={version} className="flex items-center gap-x-4 rounded-lg border border-neutral-800 px-4">
              <span className="text-sm md:text-base">{label}</span>
              <input
                id="v4"
                name="v4"
                placeholder="V4"
                className="grow py-2 text-sm focus:outline-none md:text-base"
                value={value}
              />
              <button
                type="button"
                className="cursor-pointer py-2 text-sm md:text-base"
                onClick={() => {
                  let newUUID = '';
                  if (version === 'uuidV1') newUUID = v1();
                  if (version === 'uuidV4') newUUID = v4();
                  if (version === 'uuidV7') newUUID = v7();
                  setState((previous) => ({ ...previous, [version]: newUUID }));
                }}>
                Refresh
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UUIDPage;
