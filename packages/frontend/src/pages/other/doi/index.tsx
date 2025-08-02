import { getId, getWork, Reference } from '@editor/clients/crossref/crossref.client';
import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Navbar } from '@editor/components/shared/Navbar';
import { tryCatch } from '@editor/utils/try-catch';
import { NextPage } from 'next';
import { ChangeEvent, FC, FormEvent, useState } from 'react';

const APA: FC<{ reference: Reference }> = ({ reference }) => {
  const authorsAPA = reference.authors
    .map((a) => `${a.family}, ${a.given.charAt(0)}.`)
    .join(', ')
    .replace(/, ([^,]*)$/, ', & $1');

  const journalPart = `${reference.volume}${reference.issue ? `(${reference.issue})` : ''}, ${reference.pages}`;

  return (
    <span>
      {authorsAPA} ({reference.year}). {reference.title}. <i>{reference.journal}</i>. {journalPart}.{' '}
      <a href={reference.url} target="_blank" rel="noopener noreferrer">
        {reference.url}
      </a>
    </span>
  );
};

const DOIPage: NextPage = () => {
  const [{ loading = false, doi = 'https://doi.org/10.1016/j.smrv.2009.04.001', references = [] }, setState] =
    useState<{
      loading: boolean;
      doi: string;
      references: Reference[];
    }>({ loading: false, doi: 'https://doi.org/10.1016/j.smrv.2009.04.001', references: [] });

  const [activeTab, setActiveTab] = useState<'table' | 'apa'>('table');

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const id: string | null = getId(doi);
    if (!id) {
      alert('Invalid DOI');
      return;
    }
    setState((previous) => ({ ...previous, loading: true }));
    const { data, error } = await tryCatch(getWork({ id }));
    if (error) {
      alert(error.message);
      setState((previous) => ({ ...previous, loading: false }));
      return;
    }
    if (!data) {
      alert('No Data');
      setState((previous) => ({ ...previous, loading: false }));
      return;
    }
    const { reference } = data;
    if (!reference) {
      alert('No Reference');
      setState((previous) => ({ ...previous, loading: false }));
      return;
    }
    setState((previous) => {
      const { references } = previous;
      if (references.findIndex(({ id }) => reference.id === id) < 0) {
        references.push(reference);
        references.sort((a, b) => {
          const aFamily: string = a.authors.at(0)?.family ?? '';
          const bFamily: string = b.authors.at(0)?.family ?? '';
          return aFamily > bFamily ? 1 : -1;
        });
      }
      return { ...previous, loading: false, references };
    });
  };

  return (
    <div className="min-h-screen w-screen">
      <Navbar />
      <Divider />
      <div className="container mx-auto flex flex-col gap-y-8 p-8">
        <form onSubmit={onSubmit} className="flex items-center gap-x-4 md:gap-x-8">
          <Glass.Input
            id="doi"
            name="doi"
            placeholder="https://doi.org/10.1016/j.smrv.2009.04.001"
            className="grow"
            value={doi}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setState((previous) => ({ ...previous, doi: event.target.value }));
            }}
            required
          />
          <Glass.Button type="submit" disabled={loading}>
            {loading ? 'Loading' : 'Get'}
          </Glass.Button>
        </form>

        {/* Tabs */}
        {references.length > 0 && (
          <div className="flex gap-x-4">
            <Glass.Button type="button" className="w-full" onClick={() => setActiveTab('table')}>
              Table
            </Glass.Button>
            <Glass.Button type="button" className="w-full" onClick={() => setActiveTab('apa')}>
              APA
            </Glass.Button>
          </div>
        )}

        {/* Content */}
        {activeTab === 'table' && references.length > 0 && (
          <div className="overflow-x-auto rounded-lg border border-white/20">
            <table className="min-w-full text-sm text-white">
              <thead className="bg-white/10 backdrop-blur-md">
                <tr>
                  <th className="px-4 py-2 text-left">Authors</th>
                  <th className="px-4 py-2 text-left">Year</th>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Journal</th>
                  <th className="px-4 py-2 text-left">Volume - Issue - Pages</th>
                  <th className="px-4 py-2 text-left">Link</th>
                  <th className="px-4 py-2 text-left">
                    <button
                      type="button"
                      className="cursor-pointer text-red-400 hover:underline"
                      onClick={() => {
                        setState((previous) => ({ ...previous, references: [] }));
                      }}>
                      Delete
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {references.map((ref, index) => (
                  <tr key={ref.issue} className="border-t border-white/20 hover:bg-white/5">
                    <td className="px-4 py-2">{ref.authors.map((a) => `${a.family} ${a.given}`).join(', ')}</td>
                    <td className="px-4 py-2">{ref.year}</td>
                    <td className="px-4 py-2">{ref.title}</td>
                    <td className="px-4 py-2">{ref.journal}</td>
                    <td className="px-4 py-2">{`${ref.volume}(${ref.issue}), ${ref.pages}`}</td>
                    <td className="px-4 py-2">
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer text-blue-400 hover:underline">
                        View
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        type="button"
                        className="cursor-pointer text-red-400 hover:underline"
                        onClick={() => {
                          setState((previous) => {
                            const { references = [] } = previous;
                            const updatedReferences = references.filter((_, i) => i !== index);
                            return { ...previous, references: updatedReferences };
                          });
                        }}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'apa' && references.length > 0 && (
          <div className="flex flex-col gap-y-4">
            <h2 className="text-center text-lg font-semibold text-white">References</h2>
            {references.map((ref) => (
              <p key={ref.url} className="text-white">
                <APA reference={ref} />
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DOIPage;
