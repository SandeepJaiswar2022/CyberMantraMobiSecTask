import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  imageMd: string;
  imageSm: string;
  title: string;
  description: string;
}

interface CustomCarouselProps {
  slides: Slide[];
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 5 seconds (stops when video is open)
  useEffect(() => {
    // Stop autoplay if video is open
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Go to next slide (loop back at end)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Go to previous slide (loop to last)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[550px] max-sm:h-[400px] overflow-hidden">
      {/* Slide Container */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full min-w-full relative"
          >
            {/* Image Section */}
            <div className="absolute inset-0 w-full h-full">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={slide.image}
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={slide.imageMd}
                />
                <img
                  src={slide.imageSm}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </picture>
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
            </div>

            {/* Content Section - Overlay */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-12 md:px-8 lg:px-28">
                <div className="max-w-3xl space-y-6">
                  <h2 className="text-heading text-white ">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-white/90">
                    {slide.description}
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 max-sm:p-1.5 rounded-full transition-colors"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white p-2 max-sm:p-1.5 rounded-full transition-colors"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 max-sm:w-4 max-sm:h-4" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === index ? "bg-white scale-125" : "bg-white/50"
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
