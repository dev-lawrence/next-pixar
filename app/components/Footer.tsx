const Footer = () => {
  return (
    <>
      <section className="pt-16 px-4 text-center mb-12 max-w-[800px] mx-auto md:pt-[7.5rem]">
        <div className="mb-12">
          <a href="#" className="text-[#1d1d1d] text-[1.4rem]">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="text-[#1d1d1d] text-[1.4rem] ml-4" href="#">
            <i className="fab fa-twitter"></i>
          </a>

          <a className="text-[#1d1d1d] text-[1.4rem] ml-4" href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>

          <a className="text-[#1d1d1d] text-[1.4rem] ml-4" href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <div className="mb-4">
          <a
            className="uppercase font-light tracking-[3.5px] text-gray-800 hover:text-gray-600 transition duration-200 border-b border-gray-300"
            href="#"
          >
            privacy policy
          </a>{' '}
          |{' '}
          <a
            className="uppercase font-light tracking-[3.5px] text-gray-800 hover:text-gray-600 transition duration-200 border-b border-gray-300"
            href="#"
          >
            terms of use
          </a>
          <br />
          <a
            className="uppercase font-light tracking-[3.5px] text-gray-800 hover:text-gray-600 transition duration-200 border-b border-gray-300"
            href="#"
          >
            your us state privacy rights
          </a>{' '}
          |
          <a
            className="uppercase font-light tracking-[3.5px] text-gray-800 hover:text-gray-600 transition duration-200 border-b border-gray-300"
            href="#"
          >
            {' '}
            &nbsp;children's online privacy policy
          </a>
          <a
            className="uppercase font-light tracking-[3.5px] text-gray-800 hover:text-gray-600 transition duration-200 border-b border-gray-300"
            href="#"
          >
            interest-based ads
          </a>
        </div>

        <div className="mb-8 uppercase font-light tracking-[3.5px] text-gray-800">
          <p>© 1986-2023 disney / pixar</p>
        </div>
        <button className="bg-[#f0f0f0] text-[#68b631] border border-solid border-[#68b631] py-[0.875rem] px-8 cursor-pointer text-base transition duration-[0.2] ease-linear hover:bg-[#68b631] hover:text-white rounded-md">
          Do Not Sell or Share My Personal Information
        </button>
      </section>
    </>
  );
};

export default Footer;
