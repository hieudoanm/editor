import { CallToAction } from '@json/components/CallToAction';
import { Features } from '@json/components/Features';
import { Footer } from '@json/components/Footer';
import { Hero } from '@json/components/Hero';
import { Navbar } from '@json/components/Navbar';
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
