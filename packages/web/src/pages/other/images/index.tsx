import dynamic from 'next/dynamic';

const Images = dynamic(() => import('@editor/components/apps/Images'), { ssr: false });

const ImagesPage = () => {
  return <Images />;
};

export default ImagesPage;
