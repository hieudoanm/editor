import { CallToAction } from '@converter/components/CallToAction';
import { Features } from '@converter/components/Features';
import { Footer } from '@converter/components/Footer';
import { Hero } from '@converter/components/Hero';
import { LinearBackground } from '@converter/components/Linear';
import { Navbar } from '@converter/components/Navbar';
import { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <LinearBackground />
      <div className="relative z-10">
        <Navbar />
        <div className="w-full border-t border-neutral-800" />
        <Hero />
        <div className="w-full border-t border-neutral-800" />
        <Features />
        <div className="w-full border-t border-neutral-800" />
        <CallToAction />
        <div className="w-full border-t border-neutral-800" />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
