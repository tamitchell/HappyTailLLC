import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/images/ICONS/trustworthiness.png',
    title: 'Trustworthiness',
    description: "It's like you're right there through the entire adventure!\n\nYou will receive photos, text, and an update for every walk or visit",
    button: null,
    bgColor: 'bg-blueGrey'
  },
  {
    icon: '/images/ICONS/peace_3.png',
    title: 'Peace of Mind',
    description: "We believe experience equals quality care for your dog.\n\nOur staff brings together knowledge and experience in animal behavior to fuel our passion and love for dogs.",
    button: {
      text: 'Our Services',
      link: '/services'
    },
    bgColor: 'bg-beige'
  },
  {
    icon: '/images/ICONS/relief.png',
    title: 'Relief',
    description: "Book Services 24/7 Online or by phone\n\nBack up walkers and sitters always available\n\nPet Taxi! Free pick up and drop off for your pets*\n\n*only available for boarding services",
    button: null,
    bgColor: 'bg-rootBrown'
  }
];

export default function Services() {
  return (
    <section className="border-t-[1em] border-t-[#DBD0C8] border-b-[1em] border-b-[#a2b7d8]">
        <div className="grid md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className={"overflow-hidden py-16 px-8" + ` ${service.bgColor}`}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-6">
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="(max-width: 768px) 96px, 96px"
                    className="object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <div className="prose prose-sm">
                  <p className="text-gray-600 whitespace-pre-line">
                    {service.description}
                  </p>
                </div>

                {service.button && (
                  <div className="mt-6">
                    <Link
                      href={service.button.link}
                      className="inline-block bg-transparent border-2 border-darkBrown text-darkBrown px-6 py-2 rounded-md font-semibold hover:bg-darkBrown hover:text-white transition-colors"
                    >
                      {service.button.text}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
