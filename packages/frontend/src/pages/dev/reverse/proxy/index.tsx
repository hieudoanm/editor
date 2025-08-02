import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Linear } from '@editor/components/shared/Linear';
import { Navbar } from '@editor/components/shared/Navbar';
import { tryCatch } from '@editor/utils/try-catch';
import { NextPage } from 'next';
import { useState } from 'react';

const PROXY_BASE_URL: string = 'https://micro24.vercel.app';

const urlToCurl = (
  options: { url: string; method: string; headers: Record<string, string> } = { url: '', method: 'GET', headers: {} },
): string => {
  const { url, method = 'GET', headers = {} } = options;

  // Start curl command
  let curl = `curl -i -L -X ${method.toUpperCase()} '${url}'`;

  // Add headers
  for (const [key, value] of Object.entries(headers)) {
    curl += ` \\\n--header "${key}: ${value}"`;
  }

  return curl;
};

const ReverseProxyPage: NextPage = () => {
  const [
    {
      loading = false,
      method = 'GET',
      url = 'https://restcountries.com/v3.1/all?fields=name',
      headers = {
        'Content-Type': 'application/json',
      },
      message = '',
    },
    setState,
  ] = useState<{
    loading: boolean;
    method: string;
    url: string;
    headers: Record<string, string>;
    message: string;
  }>({
    loading: false,
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all?fields=name',
    headers: {
      'Content-Type': 'application/json',
    },
    message: '',
  });

  const proxy = async () => {
    setState((previous) => ({ ...previous, loading: true }));
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('url', url);
    const proxyUrl: string = `/api/reverse/proxy?${urlSearchParams.toString()}`;
    const { data: response, error } = await tryCatch(fetch(proxyUrl));
    if (error) {
      setState((previous) => ({ ...previous, loading: false, message: error.message }));
      return;
    }
    if (!response) {
      setState((previous) => ({ ...previous, loading: false, message: 'No Response' }));
      return;
    }
    const contentType = response.headers.get('Content-Type');
    console.log('contentType', contentType);
    if (contentType?.includes('application/json')) {
      const { data, error: errorData } = await tryCatch(response.json());
      if (errorData) {
        setState((previous) => ({ ...previous, loading: false, message: errorData.message }));
        return;
      }
      if (!data) {
        setState((previous) => ({ ...previous, loading: false, message: 'No Data' }));
        return;
      }
      setState((previous) => ({ ...previous, loading: false, message: JSON.stringify(data, null, 2) }));
    } else {
      const { data, error: errorData } = await tryCatch(response.text());
      if (errorData) {
        setState((previous) => ({ ...previous, loading: false, message: errorData.message }));
        return;
      }
      if (!data) {
        setState((previous) => ({ ...previous, loading: false, message: 'No Data' }));
        return;
      }
      setState((previous) => ({ ...previous, loading: false, message: data }));
    }
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Linear.Background />
      <div className="relative z-10 flex h-full flex-col">
        <Navbar />
        <Divider />
        <div className="container mx-auto flex h-full grow flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Glass.Select
              id="method"
              name="method"
              className="w-full md:w-auto"
              value={method}
              onChange={(event) => {
                setState((previous) => ({ ...previous, method: event.target.value }));
              }}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
              <option value="DELETE">DELETE</option>
            </Glass.Select>
            <Glass.Input
              id="url"
              name="url"
              placeholder="URL"
              className="w-full grow md:w-auto"
              value={url}
              onChange={(event) => {
                setState((previous) => ({ ...previous, url: event.target.value }));
              }}
            />
            <Glass.Button
              type="button"
              className="w-full md:w-auto"
              onClick={() => {
                proxy();
              }}>
              Request
            </Glass.Button>
          </div>
          {Object.entries(headers).map(([key, value]) => {
            return (
              <div key={key} className="flex items-center gap-x-2 md:gap-x-4">
                <p>Header</p>
                <Glass.Input id="key" name="key" value={key} readOnly />
                <Glass.Input id="value" name="value" className="grow" value={value} readOnly />
              </div>
            );
          })}
          <Glass.TextArea
            rows={5}
            className="whitespace-nowrap"
            value={urlToCurl({
              url: `${PROXY_BASE_URL}/api/reverse/proxy?url=${encodeURIComponent(url)}`,
              method,
              headers,
            })}
            readOnly
          />
          <Glass.TextArea value={loading ? 'Loading' : message} rows={10} readOnly />
        </div>
      </div>
    </div>
  );
};

export default ReverseProxyPage;
