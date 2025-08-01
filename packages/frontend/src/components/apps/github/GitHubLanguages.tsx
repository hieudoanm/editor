import languages from '@editor/json/github/languages.json';
import { getBrightness } from '@editor/utils/colors/utils';
import { tryCatch } from '@editor/utils/try-catch';
import { useQuery } from '@tanstack/react-query';
import { FC, RefObject } from 'react';

type GitHubLanguage = Record<string, string | number | boolean | string[]>;

export const GitHubLanguages: FC<{
  ref: RefObject<HTMLDivElement | null>;
  repository: string;
}> = ({ ref = null, repository = 'hieudoanm/hieudoanm' }) => {
  const url = `https://api.github.com/repos/${repository}/languages`;
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.set('url', url);
  const proxyUrl = `https://micro24.vercel.app/api/reverse/proxy?${urlSearchParams.toString()}`;
  const { isPending, error, data } = useQuery({
    queryKey: [`repository-${repository}`],
    queryFn: async () => {
      const { error, data } = await tryCatch(fetch(proxyUrl).then((response) => response.json()));
      if (error) return {};
      return data;
    },
  });

  if (isPending) return <p className="text-center">Loading</p>;

  if (error) return <p className="text-center">{error.message}</p>;

  if (JSON.stringify(data) === '{}') return <p className="text-center">No Data</p>;

  return (
    <div ref={ref} className="mx-auto flex w-full flex-col overflow-hidden rounded-xl">
      {Object.keys(data ?? {})
        .filter((languageKey: string) => {
          const language: GitHubLanguage =
            (languages as Record<string, GitHubLanguage>)[languageKey] ?? ({} as GitHubLanguage);
          const { color = '' } = language;
          return color;
        })
        .map((languageKey: string) => {
          const language: GitHubLanguage = (languages as Record<string, GitHubLanguage>)[languageKey] ?? {};
          const { color: bgColor = '' } = language;
          const backgroundColor = bgColor.toString();
          const color = getBrightness(backgroundColor) ? '#ffffff' : '#101828';

          return (
            <div
              key={languageKey}
              className="flex h-full w-full items-center justify-center py-2 text-center text-xs text-neutral-100"
              style={{ backgroundColor, color }}>
              <b>{languageKey}</b>
            </div>
          );
        })}
    </div>
  );
};
