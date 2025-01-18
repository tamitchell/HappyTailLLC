'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const testimonials = [
  {
    image: '/images/Misc/brycepic.jpg',
    name: 'Bryce',
    rating: '/images/ICONS/5_stars.PNG',
    comment: '"There is no better dog care service out there. My wife and I use their them at least twice a week!"'
  },
  {
    image: '/images/photography/dog_walking_2.jpeg',
    name: 'Simone',
    rating: '/images/ICONS/5_stars.PNG',
    comment: '"Happy Tails LLC trained Lily to walk on the leash. We are very pleased for the services that Happy Tail LLC provided to Lily"'
  },
  {
    image: '/images/Misc/chrispic.jpg',
    name: 'Chris',
    rating: '/images/ICONS/5_stars.PNG',
    comment: '"Fiorella is trustworthy, responsible, and best of all I know she she truly cares for the pets she looks after."'
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-white border-b-[1em] border-b-[#9E5E41]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
          <h3 className="text-xl text-gray-600">See what others are saying</h3>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8">
                    <div className="flex flex-col items-center">
                      <div className="relative w-24 h-24 mb-4">
                        <Image
                          src={testimonial.image}
                          alt={`${testimonial.name}'s profile`}
                          fill
                          sizes="(max-width: 768px) 96px, 96px"
                          className="object-cover rounded-full"
                        />
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{testimonial.name}</h4>
                      <div className="relative w-24 h-6 mb-4">
                        <Image
                          src={testimonial.rating}
                          alt="Rating"
                          fill
                          sizes="(max-width: 768px) 96px, 24px"
                          className="object-contain"
                        />
                      </div>
                      <p className="text-gray-600 text-center italic">
                        {testimonial.comment}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
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
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
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
        </div>

        <div className="text-center mt-8">
          <Link
            href="https://www.facebook.com/happytailva/"
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0522D] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            More Reviews
          </Link>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          *photos changed for privacy
        </p>
      </div>
    </section>
  );
}
