import { Navbar } from '@editor/components/shared/Navbar';
import { strings } from '@editor/utils/strings';
import { useState } from 'react';

const FormatPage = () => {
  const [{ from = '', to = '', style = 'capitalise' }, setState] = useState<{
    from: string;
    to: string;
    style: string;
  }>({
    from: '',
    to: '',
    style: 'capitalise',
  });
  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="container mx-auto flex h-full flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
        <select
          name="Style"
          className="w-full rounded-lg border border-neutral-800 px-4 py-2"
          value={style}
          onChange={(event) => {
            setState((previous) => ({ ...previous, style: event.target.value }));
          }}>
          <option value="capitalise">Capitalise</option>
          <option value="deburr">deburr</option>
          <option value="kebabcase">kebab-case</option>
          <option value="lowercase">lowercase</option>
          <option value="snakecase">snake_case</option>
          <option value="uppercase">UPPERCASE</option>
        </select>
        <div className="grid grow grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="col-span-1">
            <textarea
              id="from"
              name="from"
              placeholder="From"
              value={from}
              className="h-full w-full resize-none rounded-xl border border-neutral-800 px-4 py-4"
              onChange={(event) => {
                const value = event.target.value;
                setState((previous) => ({ ...previous, from: value, to: strings(value).format(style) }));
              }}
            />
          </div>
          <div className="col-span-1">
            <textarea
              id="to"
              name="to"
              placeholder="To"
              value={to}
              className="h-full w-full resize-none rounded-xl border border-neutral-800 px-4 py-4"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormatPage;
