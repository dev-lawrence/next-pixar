import CareersImg from '../../public/careers.jpeg';
import ElioImg from '../../public/elio.jpg';
import WinLoseImg from '../../public/win-lose.jpg';
import Card from './Card';

const Cards = () => {
  return (
    <div className="md:flex items-center justify-between gap-8 mb-[3rem]">
      <Card
        CardImg={CareersImg}
        text="careers at pixar"
        path="careers-at-pixar"
      />
      <Card
        CardImg={ElioImg}
        text="elio"
        path="https://www.youtube.com/watch?v=2w_K3CB8PuE"
        target="target"
      />
      <Card CardImg={WinLoseImg} text="win or lose" path="winlose" />
    </div>
  );
};

export default Cards;
