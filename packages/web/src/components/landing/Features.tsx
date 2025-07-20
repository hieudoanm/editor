import { Glass } from '@editor/components/shared/Glass';
import Link from 'next/link';
import { FC } from 'react';

type Feature = { id: string; href: string; title: string; description: string };

export const Features: FC<{ title: string; subtitle: string; features: Feature[] }> = ({
  title = '',
  subtitle = '',
  features = [],
}) => {
  return (
    <section className="container mx-auto px-8 py-16">
      <h2 className="mb-4 text-center text-2xl font-semibold md:text-3xl">{title}</h2>
      <p className="mx-auto mb-6 max-w-3xl text-center text-neutral-300">{subtitle}</p>
      <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {features.map(({ id, href, title, description }) => (
          <Link key={id} href={href}>
            <Glass.Card>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 line-clamp-2 text-neutral-400">{description}</p>
            </Glass.Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
