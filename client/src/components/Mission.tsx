import Image from 'next/image';
import Link from 'next/link';

export default function Mission() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Makes Us Different
            </h2>
            <div className="prose prose-lg">
              <p className="text-gray-700">
                Our mission is to provide the best service for your four legged family member. 
                Happy Tail LLC is a dog walking company very different from the rest.
              </p>
              <p className="text-gray-700">
                We specialize in one-on-one care to meet your dog's needs and happiness. 
                We know every dog is different, this is why Happy Tail LLC provides unique 
                services to our clients and their dogs.
              </p>
              <p className="text-gray-700">
                We are always vigilant of their safety and wellness we are aware of each dog's needs.
              </p>
            </div>
            <div className="pt-4">
              <Link 
                href="/about"
                className="inline-block bg-transparent border-2 border-darkBrown text-darkBrown px-6 py-2 rounded-md font-semibold hover:bg-darkBrown hover:text-white transition-colors"
              >
                More About Us
              </Link>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative w-64 h-64">
              <Image
                src="/images/logo/100percentguarenteed_BROWN.png"
                alt="100% Satisfaction Guaranteed"
                fill
                sizes="(max-width: 110px) 64px, 64px"
                className="object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
