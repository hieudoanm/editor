import { Divider } from '@editor/components/shared/Divider';
import { Glass } from '@editor/components/shared/Glass';
import { Navbar } from '@editor/components/shared/Navbar';
import { tryCatch } from '@editor/utils/try-catch';
import { NextPage } from 'next';
import { useState } from 'react';

const ReverseProxyPage: NextPage = () => {
  const [
    { loading = false, method = 'GET', url = 'https://restcountries.com/v3.1/all?fields=name', message = '' },
    setState,
  ] = useState<{
    loading: boolean;
    method: string;
    url: string;
    message: string;
  }>({
    loading: false,
    method: 'GET',
    url: 'https://restcountries.com/v3.1/all?fields=name',
    message: '',
  });

  const request = async () => {
    setState((previous) => ({ ...previous, loading: true }));
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('url', url);
    const proxyUrl = `/api/reverse/proxy?${urlSearchParams.toString()}`;
    const { data: response, error } = await tryCatch(fetch(proxyUrl));
    if (error) {
      setState((previous) => ({ ...previous, loading: false, message: error.message }));
      return;
    }
    if (!response) {
      setState((previous) => ({ ...previous, loading: false, message: 'No Response' }));
      return;
    }
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
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Navbar />
      <Divider />
      <div className="container mx-auto flex h-full grow flex-col gap-y-4 p-4 md:gap-y-8 md:p-8">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
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
              request();
            }}>
            Request
          </Glass.Button>
        </div>
        <Glass.TextArea value={loading ? 'Loading' : message} rows={10} readOnly />
      </div>
    </div>
  );
};

export default ReverseProxyPage;
