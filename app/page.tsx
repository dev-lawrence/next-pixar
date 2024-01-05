import Image from 'next/image';
import HeroCaption from '../public/hero-caption.png';
import Cards from './components/Cards';

export default function Home() {
  return (
    <main>
      <div
        id="hero"
        className="relative w-full min-h-[60vh] mb-20 md:min-h-screen md:mb-[7.5rem]"
      >
        <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[600px]">
          <Image src={HeroCaption} alt="Elemental" />
        </div>
      </div>

      <div className="container mx-auto px-6">
        <Cards />
      </div>
    </main>
  );
}
