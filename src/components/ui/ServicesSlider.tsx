import { useEffect, useRef } from "react";
import services from "../../constants/Services";

const ServicesSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    let scrollAmount = 0;

    const autoSlide = () => {
      scrollAmount += 1;
      if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
        scrollAmount = 0;
      }
      slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
    };

    const intervalId = setInterval(autoSlide, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="no-scrollbar overflow-x-scroll" ref={sliderRef}>
      <div className="mt-5 flex items-center gap-x-5 text-xl font-medium">
        {services.map((service, index) => (
          <div
            key={index}
            className="slide text-light flex flex-shrink-0 items-center justify-center gap-x-2 bg-primary px-5 py-2"
          >
            <service.Icon className="size-8" />
            <span>{service.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
