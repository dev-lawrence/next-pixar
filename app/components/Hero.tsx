interface TextProp {
  text: string;
}

const Hero = ({ text }: TextProp) => {
  return (
    <>
      <div className="bg-img relative min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat md:min-h-screen">
        <h1 className="absolute top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-55 text-white text-[2.3rem] font-extrabold leading-[1.3] tracking-[4px] w-full uppercase pl-4 flex items-center justify-center md:text-[3.188rem] md:tracking-[6px] md:pl-0">
          {text}
        </h1>
      </div>
    </>
  );
};

export default Hero;
