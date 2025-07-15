import { Divider } from '@converter/components/shared/Divider';
import { Navbar } from '@converter/components/shared/Navbar';
import { copy } from '@converter/utils/copy';
import { csv, csv2json, csv2sql } from '@converter/utils/csv/csv';
import { NextPage } from 'next';
import { ChangeEvent, FC, useState } from 'react';

const DELIMITER = ',';

export const INITIAL_CSV: string = `header1,header2,header3,header4
value1,value2,value3,value4
value1,value2,value3,value4
value1,value2,value3,value4
value1,value2,value3,value4`;

const Table: FC<{ csv: string }> = ({ csv = '' }) => {
  const data: Record<string, string>[] = csv2json(csv, { delimiter: DELIMITER });

  return (
    <div className="flex flex-col gap-y-4 md:gap-y-8">
      <div className="w-full overflow-auto rounded border border-neutral-800">
        <table id="csv-html-table" className="w-full">
          {data[0] ? (
            <thead>
              <tr>
                {Object.keys(data[0]).map((key: string) => {
                  return (
                    <th key={key} align="left">
                      <p className="truncate p-2" title={key}>
                        {key}
                      </p>
                    </th>
                  );
                })}
              </tr>
            </thead>
          ) : (
            <></>
          )}
          <tbody>
            {data.map((item: Record<string, string>) => {
              return (
                <tr key={`row-${JSON.stringify(item)}`} className="border-t border-neutral-800">
                  {Object.values(item).map((value: string) => {
                    return (
                      <td key={value}>
                        <p className="truncate p-2" title={value}>
                          {value}
                        </p>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        className="cursor-pointer rounded-lg bg-neutral-100 px-4 py-2 text-neutral-900"
        onClick={() => {
          const csvHtmlTable: string = document.getElementById('csv-html-table')?.outerHTML ?? '';
          copy(csvHtmlTable);
        }}>
        Copy
      </button>
    </div>
  );
};

const CSVPage: NextPage = () => {
  const [{ from = INITIAL_CSV, to = '', format = 'html' }, setState] = useState<{
    from: string;
    to: string;
    format: string;
  }>({
    from: INITIAL_CSV,
    to: csv2sql(INITIAL_CSV),
    format: 'sql',
  });

  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <Divider />
      <main className="container mx-auto grow p-4 md:p-8">
        <div className="flex h-full flex-col gap-y-4 md:gap-y-8">
          <select
            id="file-format"
            name="file-format"
            className="appearance-none rounded-full border border-neutral-800 px-4 py-2"
            value={format}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setState((previous) => {
                const to = csv(from).format(event.target.value);
                return { ...previous, format: event.target.value, to };
              })
            }>
            <option value="html">HTML</option>
            <option value="json">JSON</option>
            <option value="md">Markdown</option>
            <option value="sql">SQL</option>
          </select>
          <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-1">
              <textarea
                id="from"
                name="from"
                placeholder="From"
                className="h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none"
                value={from}
                onChange={(event) => {
                  setState((previous) => {
                    const to = csv(from).format(format);
                    return { ...previous, from: event.target.value, to };
                  });
                }}
              />
            </div>
            <div className="col-span-1">
              {format === 'html' ? (
                <Table csv={from} />
              ) : (
                <textarea
                  id="to"
                  name="to"
                  placeholder="To"
                  className="h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none"
                  value={to}
                  readOnly
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CSVPage;
