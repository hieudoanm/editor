/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navbar } from '@converter/components/Navbar';
import { INITIAL_JSON } from '@converter/constants';
import { json, jsonParse } from '@converter/utils/json';
import { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';

type FileFormat = 'csv' | 'xml' | 'yaml';

const INITIAL_FORMAT: FileFormat = 'yaml';

const JSONPage: NextPage = () => {
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

  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <main className="container mx-auto grow p-4 md:p-8">
        <div className="flex h-full flex-col gap-y-4 md:gap-y-8">
          <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newFrom = json(data).format().beautify();
                setState((previous) => ({ ...previous, from: newFrom }));
              }}>
              Beautify
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newFrom = json(data).format().minify();
                setState((previous) => ({ ...previous, from: newFrom }));
              }}>
              Minify
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newFrom = json(data).format().sort();
                setState((previous) => ({ ...previous, from: newFrom }));
              }}>
              Sort
            </button>
          </div>
          <select
            id="file-format"
            name="file-format"
            className="appearance-none rounded-full border border-neutral-800 px-4 py-2"
            value={format}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setState((previous) => {
                const format = event.target.value as FileFormat;
                const data = jsonParse(from, []);
                const to = json(data).convert(format);
                return { ...previous, data, format, to };
              })
            }>
            <option value="csv">CSV</option>
            <option value="xml">XML</option>
            <option value="yaml">YAML</option>
          </select>
          <div className="grid h-full grow grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="col-span-1">
              <textarea
                id="from"
                name="from"
                placeholder="From"
                className="h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none"
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
                className="h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none"
                value={to}
                readOnly
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JSONPage;
