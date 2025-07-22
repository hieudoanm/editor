import { MarkdownPreviewer } from '@editor/components/apps/MarkdownPreviewer';
import { Navbar } from '@editor/components/shared/Navbar';
import { INITIAL_MARKDOWN } from '@editor/constants/initial';
import 'github-markdown-css/github-markdown.css';
import { marked } from 'marked';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const AppPage: NextPage = () => {
  const [{ markdown = INITIAL_MARKDOWN, html = '' }, setState] = useState<{ markdown: string; html: string }>({
    markdown: INITIAL_MARKDOWN,
    html: '',
  });

  useEffect(() => {
    const setHTML = async () => {
      const newHTML: string = await marked(markdown);
      setState((previous) => ({ ...previous, html: newHTML }));
    };
    setHTML();
  }, [markdown]);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <div className="grid grow divide-x divide-neutral-800 overflow-hidden md:grid-cols-2">
        <div className="h-full overflow-hidden md:col-span-1">
          <textarea
            id="markdown"
            name="markdown"
            placeholder="Markdown"
            className="scrollbar-none h-full w-full resize-none p-4 focus:outline-none md:p-8"
            value={markdown}
            onChange={(event) => {
              setState((previous) => ({ ...previous, markdown: event.target.value }));
            }}
          />
        </div>
        <div className="h-full overflow-hidden md:col-span-1">
          <div className="scrollbar-none h-full w-full overflow-auto p-4 md:p-8">
            <MarkdownPreviewer html={html} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
