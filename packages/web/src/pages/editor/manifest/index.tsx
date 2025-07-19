/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider } from '@editor/components/shared/Divider';
import { Navbar } from '@editor/components/shared/Navbar';
import { INITIAL_MANIFEST_EXTENSION, INITIAL_MANIFEST_PWA } from '@editor/constants/initial';
import { json, jsonParse } from '@editor/utils/json/json';
import { ChangeEvent, useState } from 'react';

const EditorPage = () => {
  const [{ manifest = '', type = '' }, setState] = useState<{ manifest: string; type: 'extension' | 'pwa' }>({
    manifest: json(INITIAL_MANIFEST_EXTENSION).format().beautify(),
    type: 'extension',
  });

  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <Divider />
      <main className="container mx-auto grow p-4 md:p-8">
        <div className="flex h-full flex-col gap-y-4 md:gap-y-8">
          <div className="grid grid-cols-3 gap-x-4 md:gap-x-8">
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newManifest = json(jsonParse(manifest, [])).format().beautify();
                setState((previous) => ({ ...previous, manifest: newManifest }));
              }}>
              Beautify
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newManifest = json(jsonParse(manifest, [])).format().minify();
                setState((previous) => ({ ...previous, manifest: newManifest }));
              }}>
              Minify
            </button>
            <button
              type="button"
              className="cursor-pointer rounded-full border border-neutral-800 px-4 py-2"
              onClick={() => {
                const newManifest = json(jsonParse(manifest, [])).format().sort();
                setState((previous) => ({ ...previous, manifest: newManifest }));
              }}>
              Sort
            </button>
          </div>
          <select
            id="file-format"
            name="file-format"
            className="appearance-none rounded-full border border-neutral-800 px-4 py-2"
            value={type}
            onChange={(event: ChangeEvent<HTMLSelectElement>) =>
              setState((previous) => {
                const type = event.target.value as 'extension' | 'pwa';
                const newManifest =
                  type === 'extension'
                    ? json(INITIAL_MANIFEST_EXTENSION, {} as any)
                        .format()
                        .beautify()
                    : json(INITIAL_MANIFEST_PWA, {} as any)
                        .format()
                        .beautify();
                return { ...previous, type, manifest: newManifest };
              })
            }>
            <option value="extension">Extension</option>
            <option value="pwa">PWA</option>
          </select>
          <textarea
            id="manifest.json"
            name="manifest.json"
            placeholder="manifest.json"
            className="h-full w-full resize-none rounded-xl border border-neutral-800 p-4 whitespace-nowrap shadow focus:outline-none"
            value={manifest}
            onChange={(event) => {
              const newManifest: string = event.target.value;
              setState((previous) => {
                return { ...previous, manifest: newManifest };
              });
            }}
          />
        </div>
      </main>
    </div>
  );
};

export default EditorPage;
