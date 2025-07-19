import DOMPurify from 'dompurify';
import { FC, useEffect, useState } from 'react';

export const MarkdownPreviewer: FC<{ html: string }> = ({ html = '' }) => {
  const [innerHTML, setInnerHTML] = useState<string>('');

  useEffect(() => {
    const __html: string = DOMPurify.sanitize(html);
    setInnerHTML(__html);
  }, [html]);

  return (
    <div
      // Render the HTML safely
      dangerouslySetInnerHTML={{ __html: innerHTML }}
      className="markdown-body h-full w-full !bg-neutral-900 !text-neutral-100"
    />
  );
};
