import { GitHubSocialPreview } from '@editor/components/apps/GitHubSocialPreview';
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import { useState } from 'react';

const PreviewPage: NextPage = () => {
  const [{ name = 'Hieu Doan', description = 'GitHub Profile', repository = 'hieudoanm/hieudoanm' }, setState] =
    useState<{
      name: string;
      description: string;
      repository: string;
    }>({
      name: 'Hieu Doan',
      description: 'GitHub Profile',
      repository: 'hieudoanm/hieudoanm',
    });

  return (
    <div className="min-h-screen">
      <Navbar />
      <Divider />
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-8">
          <input
            id="name"
            name="Name"
            placeholder="Name"
            className="w-full rounded-full border border-neutral-800 px-4 py-2"
            value={name}
            onChange={(event) => {
              setState((previous) => ({ ...previous, name: event.target.value }));
            }}
          />
          <input
            id="description"
            name="Description"
            placeholder="description"
            className="w-full rounded-full border border-neutral-800 px-4 py-2"
            value={description}
            onChange={(event) => {
              setState((previous) => ({ ...previous, description: event.target.value }));
            }}
          />
          <input
            id="repository"
            name="Repository"
            placeholder="repository"
            className="w-full rounded-full border border-neutral-800 px-4 py-2"
            value={repository}
            onChange={(event) => {
              setState((previous) => ({ ...previous, repository: event.target.value }));
            }}
          />
          <GitHubSocialPreview name={name} repository={repository} description={description} />
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
