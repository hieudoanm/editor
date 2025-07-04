/* eslint-disable @typescript-eslint/no-explicit-any */
import { json, jsonParse } from '@json/utils/json';
import { NextPage } from 'next';
import { useState } from 'react';

const INITIAL_JSON = [
  { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
  { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
  { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
  { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' },
];

type FileFormat = 'csv' | 'xml' | 'yaml';

const INITIAL_FORMAT: FileFormat = 'yaml';

const HomePage: NextPage = () => {
  const [
    {
      data = INITIAL_JSON,
      from = json(INITIAL_JSON).format().beautify(),
      to = json(INITIAL_JSON).convert(INITIAL_FORMAT),
      format = INITIAL_FORMAT,
    },
    setState,
  ] = useState<{
    data: any[];
    from: string;
    to: string;
    format: FileFormat;
  }>({
    data: INITIAL_JSON,
    from: json(INITIAL_JSON).format().beautify(),
    to: json(INITIAL_JSON).convert(INITIAL_FORMAT),
    format: INITIAL_FORMAT,
  });

  console.log(data);

  return (
    <div className="flex h-screen w-screen flex-col">
      <nav className="border-b border-neutral-200 shadow-sm">
        <div className="container mx-auto px-4 py-2 md:px-8 md:py-4">
          <div className="flex items-center justify-between gap-x-2 md:gap-x-4">
            <div className="flex items-center gap-x-2 md:gap-x-4">
              <h1 className="font-black">CSV</h1>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  const newFrom = json(data).format().beautify();
                  setState((previous) => ({ ...previous, from: newFrom }));
                }}>
                Beautify
              </button>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  const newFrom = json(data).format().minify();
                  setState((previous) => ({ ...previous, from: newFrom }));
                }}>
                Minify
              </button>
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => {
                  const newFrom = json(data).format().sort();
                  setState((previous) => ({ ...previous, from: newFrom }));
                }}>
                Sort
              </button>
            </div>
            <div className="flex items-center gap-x-2 md:gap-x-4">
              {[
                { id: 'csv' as FileFormat, label: 'CSV' },
                { id: 'xml' as FileFormat, label: 'XML' },
                { id: 'yaml' as FileFormat, label: 'YAML' },
              ].map(({ id, label }: { id: FileFormat; label: string }) => {
                return (
                  <button
                    key={id}
                    type="button"
                    className={`cursor-pointer ${format === id ? 'font-semibold' : ''}`}
                    onClick={() =>
                      setState((previous) => {
                        const data = jsonParse(from, []);
                        const to = json(data).convert(id);
                        return { ...previous, data, format: id, to };
                      })
                    }>
                    {label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto grow p-4 md:p-8">
        <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="col-span-1">
            <textarea
              id="from"
              name="from"
              placeholder="From"
              className="h-full w-full resize-none rounded-xl border border-neutral-200 p-4 whitespace-nowrap shadow focus:outline-none"
              value={from}
              onChange={(event) => {
                const newFrom = event.target.value;
                const newData = jsonParse(newFrom, []);
                const newTo = json(newData).convert(format);
                setState((previous) => {
                  return { ...previous, from: newFrom, to: newTo, data: newData };
                });
              }}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="to"
              name="to"
              placeholder="To"
              className="h-full w-full resize-none rounded-xl border border-neutral-200 p-4 whitespace-nowrap shadow focus:outline-none"
              value={to}
              readOnly
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
