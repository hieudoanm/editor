import { Glass } from '@editor/components/shared/Glass';
import { Navbar } from '@editor/components/shared/Navbar';
import { braillify } from '@editor/utils/braille';
import { morsify } from '@editor/utils/morse';
import { FormatStyle, strings } from '@editor/utils/strings';
import { useState } from 'react';

type Style = 'braille' | 'morse' | FormatStyle;

const format = (from: string, style: 'braille' | 'morse' | FormatStyle) => {
  if (style === 'braille') return braillify(from);
  if (style === 'morse') return morsify(from);
  return strings(from).format(style);
};

const INITIAL_TEXT = 'Hello, World!';
const INITIAL_STYLE = 'braille';

const StringsPage = () => {
  const [{ from = INITIAL_TEXT, to = format(INITIAL_TEXT, INITIAL_STYLE), style = INITIAL_STYLE }, setState] =
    useState<{
      from: string;
      to: string;
      style: Style;
    }>({
      from: INITIAL_TEXT,
      to: format(INITIAL_TEXT, INITIAL_STYLE),
      style: INITIAL_STYLE,
    });

  return (
    <div className="flex h-screen w-screen flex-col">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="container mx-auto flex h-full flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
        <Glass.Select
          name="Style"
          className="w-full"
          value={style}
          onChange={(event) => {
            const newStyle = event.target.value as Style;
            setState((previous) => ({
              ...previous,
              style: newStyle,
              to: format(previous.from, newStyle),
            }));
          }}>
          <optgroup label="Code">
            <option value="braille">Braille</option>
            <option value="morse">Morse</option>
          </optgroup>
          <optgroup label="Format">
            <option value="capitalise">Capitalise</option>
            <option value="deburr">deburr</option>
            <option value="kebabcase">kebab-case</option>
            <option value="lowercase">lowercase</option>
            <option value="snakecase">snake_case</option>
            <option value="uppercase">UPPERCASE</option>
          </optgroup>
        </Glass.Select>
        <div className="grid grow grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
          <div className="col-span-1">
            <Glass.TextArea
              id="from"
              name="from"
              placeholder="From"
              value={from}
              className="h-full w-full resize-none p-4"
              onChange={(event) => {
                const value = event.target.value;
                setState((previous) => ({ ...previous, from: value, to: format(value, style) }));
              }}
            />
          </div>
          <div className="col-span-1">
            <Glass.TextArea
              id="to"
              name="to"
              placeholder="To"
              value={to}
              className="h-full w-full resize-none p-4"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StringsPage;
