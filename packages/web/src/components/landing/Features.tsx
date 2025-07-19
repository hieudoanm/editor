import { Glass } from '@editor/components/shared/Glass';
import { FC } from 'react';

type Feature = { id: string; title: string; description: string };

export const Features: FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <section className="px-6 py-16">
      <div className="container mx-auto grid grid-cols-1 gap-8 text-center md:grid-cols-3">
        {features.map(({ id, title, description }, index) => (
          <Glass.Card key={id}>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-neutral-400">{description}</p>
          </Glass.Card>
        ))}
      </div>
    </section>
  );
};
