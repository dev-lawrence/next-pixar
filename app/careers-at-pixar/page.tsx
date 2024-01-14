// import Accordion from '../components/Accordion';
// import FollowImg from '../assets/img/follow.jpg';
import Hero from '../components/Hero';

const Careers = () => {
  return (
    <>
      <section className="relative">
        <Hero text="careers at pixar" />

        <div className="p-16 max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-[1.75rem] uppercase leading-[1.3] text-[#1d1d1d] mb-[1.438rem] md:text-[2.438rem]">
            a collaboration between art & technology
          </h2>
          <p className="text-[1.1rem] leading-[2] text-[#1D1D1D] mb-8 md:text-[1.25rem]">
            At Pixar, our goal is to make great films with great people. We are
            proud of our tradition of creative and technical excellence and are
            always looking for talented people to enrich our work and our
            community. We believe it’s important for our studio to reflect the
            diversity of the society we live in and the worldwide audiences for
            whom we make our films. Come see what we have to offer!
          </p>

          <hr />

          <a
            href="#"
            className="uppercase border-2 border-[#1d1d1d] bg-transparent text-[#1d1d1d] my-8 py-4 px-[2.125rem]  tracking-[2px] font-medium rounded-md transition duration-200 ease-in hover:bg-[#1d1d1d] hover:text-white"
          >
            visit career listings
          </a>

          <hr />
        </div>

        {/* <div className="container">
          <ImageSlider />
        </div> */}

        {/* <div className="career-faqs">
          <Hero text="career faqs" />

          <div className="container">
            <Accordion />

            <a href="https://twitter.com/PixarRecruiting" className="follow">
              <img src={FollowImg} alt="" />
            </a>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Careers;
