import HeaderTestimonial from "./HeaderTestimonial";

const Hero = () => {
  return (
      <div className="mx-6 py-5 text-center md:mx-12 lg:w-6xl  lg:pt-20 lg:mx-auto">
          <div id="testimonial-container" className="flex gap-6 flex-wrap justify-evenly">
              <HeaderTestimonial text="The best I’ve found." starsCount={5}/>
              <HeaderTestimonial text="Way easier than Calendly."starsCount={5} />
              <HeaderTestimonial text="Okay, I’m hooked!" starsCount={5}/>
          </div>
          <h1 className="text-[4rem] font-body font-bold mt-6 tracking-tight leading-16 lg:leading-32 lg:mt-10 lg:text-[8rem]">
              The modern way to <span className="text-red-500">find a time to meet</span>
          </h1>
          <p className="mt-6 text-gray-300 font-display text-lg lg:text-3xl lg:max-w-4xl lg:mx-auto leading-snug">
              You’ll love it for the flexible controls to keep your calendar
              sane. They’ll love it for the ultra-convenient booking experience.
          </p>
          <button className="mt-8 cursor-pointer font-medium text-xl text-black bg-yellow-400 px-8 lg:px-10 py-4  rounded-xl  hover:bg-yellow-300 hover:-translate-y-1 transition-all">Try SavvyCal risk-free</button>
          <p className="text-gray-300 font-body mt-4 mb-50 text-lg">Join over 2,000 happy customers</p>
      </div>
  );
}

export default Hero