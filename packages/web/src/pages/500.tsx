import { ErrorTemplate } from '@converter/templates/ErrorTemplate';
import { NextPage } from 'next';

const ServerErrorPage: NextPage = () => {
  return (
    <ErrorTemplate
      code="500"
      message="Something went wrong on our end. Please try again later."
      action="Go back home"
    />
  );
};

export default ServerErrorPage;
