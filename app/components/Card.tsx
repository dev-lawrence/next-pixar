import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  path: string;
  target?: string;
  CardImg: string;
  text: string;
}

const Card = ({ path, target, CardImg, text }: CardProps) => {
  return (
    <>
      <div className="mb-10">
        <Link className="mb-6" href={path} target={target}>
          <Image
            src={CardImg}
            alt={text}
            className="md:w-[304px] md:h-[203px] md:object-cover"
          />
        </Link>
        <h3 className="text-center uppercase font-medium text-base tracking-[3.5px] text-[#1d1d1d]">
          {text}
        </h3>
      </div>
    </>
  );
};

export default Card;
