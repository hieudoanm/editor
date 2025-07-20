import { GitHubLanguages } from '@editor/components/apps/GitHubLanguages';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import { ChangeEvent, useRef, useState } from 'react';

const LanguagesPage: NextPage = () => {
  const [{ repository = 'hieudoanm/hieudoanm' }, setState] = useState<{ repository: string }>({
    repository: 'hieudoanm/hieudoanm',
  });
  const divRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Divider />
      <div className="container mx-auto p-8">
        <div className="mx-auto flex max-w-xs flex-col gap-y-8">
          <input
            id="repository"
            name="repository"
            placeholder="GitHub Repository"
            className="rounded-lg border border-neutral-800 px-4 py-2"
            value={repository}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setState((previous) => ({ ...previous, repository: event.target.value }));
            }}
          />
          <GitHubLanguages ref={divRef} repository={repository} />
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;
