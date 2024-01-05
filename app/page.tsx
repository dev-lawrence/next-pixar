import Image from 'next/image';
import HeroCaption from '../public/hero-caption.png';

export default function Home() {
  return (
    <main>
      <div
        id="hero"
        className="relative w-full min-h-[60vh] mb-20 md:min-h-screen md:mb-[7.5rem]"
      >
        <div className="absolute top-[70%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 md:w-[600px]">
          <Image src={HeroCaption} alt="caption" />
        </div>
      </div>
    </main>
  );
}
