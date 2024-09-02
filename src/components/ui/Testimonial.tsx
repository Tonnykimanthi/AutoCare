type TestimonialProps = {
  testimonial: {
    name: string;
    profileImg: string;
    profession: string;
    testimonial: string;
  };
};

const Testimonial = ({ testimonial }: TestimonialProps) => {
  return (
    <div className="flex w-1/3 flex-shrink-0 flex-col items-center p-3 max-md:w-1/2 max-sm:w-full">
      <div className="grid h-32 w-32 place-items-center overflow-hidden rounded-full border-4 border-secondary/20">
        <img
          className="h-28 w-28 rounded-full object-cover"
          src={testimonial.profileImg}
          alt={testimonial.name}
        />
      </div>
      <p className="mt-3 text-lg font-bold">{testimonial.name}</p>
      <p>{testimonial.profession}</p>
      <p className="mt-3 rounded bg-gray-200 p-5 text-center">
        {testimonial.testimonial}
      </p>
    </div>
  );
};

export default Testimonial;
