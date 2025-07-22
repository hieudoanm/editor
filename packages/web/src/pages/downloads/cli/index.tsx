import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { NextPage } from 'next';
import Link from 'next/link';

const CommandLineInterfacePage: NextPage = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Linear.Background />
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto grow p-8">
          <div className="flex h-full flex-col items-center justify-center gap-y-8">
            <h1 className="text-3xl md:text-4xl">CLI</h1>
            <div className="flex flex-col items-center justify-center gap-y-4">
              {[
                {
                  id: 'bash',
                  link: 'https://github.com/hieudoanm/mark/tree/master/packages/cli/bash/dist',
                  emoji: '🐚',
                  label: 'Bash',
                },
                {
                  id: 'cobra',
                  link: 'https://github.com/hieudoanm/mark/tree/master/packages/cli/cobra/bin',
                  emoji: '🐍',
                  label: 'Cobra',
                },
                {
                  id: 'gh',
                  link: 'https://github.com/hieudoanm/mark/tree/master/packages/cli/gh/bin',
                  emoji: '🐙',
                  label: 'GitHub',
                },
              ].map(({ id, link, emoji, label }) => (
                <Link href={link} target="_blank" key={id}>
                  <Glass.Button className="rounded-full">
                    {emoji} Download {label}
                  </Glass.Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandLineInterfacePage;
