import { CallToAction } from '@converter/components/CallToAction';
import { Features } from '@converter/components/Features';
import { Footer } from '@converter/components/Footer';
import { Hero } from '@converter/components/Hero';
import { Navbar } from '@converter/components/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full border-t border-neutral-800" />
      <Hero />
      <div className="w-full border-t border-neutral-800" />
      <Features />
      <div className="w-full border-t border-neutral-800" />
      <CallToAction />
      <div className="w-full border-t border-neutral-800" />
      <Footer />
    </>
  );
};

export default HomePage;
