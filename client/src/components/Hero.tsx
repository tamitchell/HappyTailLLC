'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type Slide = {
  type: 'video' | 'image';
  content: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
};

const slides: Slide[] = [
  {
    type: 'video',
    content: '/media/puppy_beach.mp4',
    title: "Let's Take a Walk",
    description: '',
    buttonText: 'Book An Appointment Today',
    buttonLink: '/contact'
  },
  {
    type: 'image',
    content: '/images/photography/sad_dog.jpeg',
    title: 'Why Choose Us',
    description: "Our mission is to provide the best service for your four legged family member. We specialize in one-on-one care to meet your dog's needs and happiness. We know every dog is different, this is why Happy Tail LLC provides unique services to our clients and their dogs.",
    buttonText: 'More on our services',
    buttonLink: '/services'
  },
  {
    type: 'image',
    content: '/images/photography/paw_hand.jpeg',
    title: 'Come Find Us',
    description: "Main location\n3580 Ellery Circle\nFalls Church, VA 22041\n\nWe only provide services in the following areas\n\nVirgina: Arlington, Alexandria, Falls Church, Annandale, Vienna",
    buttonText: 'Send us a message',
    buttonLink: '/contact'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {slide.type === 'video' ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="absolute inset-0">
              <Image
                src={slide.content}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {slide.title}
              </h1>
              {slide.description && (
                <p className="text-lg md:text-xl mb-8 whitespace-pre-line">
                  {slide.description}
                </p>
              )}
              <Link
                href={slide.buttonLink}
                className="inline-block bg-transparent text-white px-8 py-3 rounded-sm font-semibold hover:bg-white hover:text-[#1B110C] transition-colors border-2 border-white"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
