import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - Happy Tail VA LLC',
  description: 'View our competitive pricing for dog walking, pet sitting, and boarding services in Falls Church, VA and surrounding areas.',
};

const pricingPlans = [
  {
    title: 'Dog Walking',
    prices: [
      { service: '30-minute walk', price: '$25', note: 'Per walk' },
      { service: '60-minute walk', price: '$35', note: 'Per walk' },
      { service: 'Group walk', price: '$20', note: 'Per walk, per dog' },
    ]
  },
  {
    title: 'Pet Sitting',
    prices: [
      { service: '30-minute visit', price: '$30', note: 'Per visit' },
      { service: '60-minute visit', price: '$45', note: 'Per visit' },
      { service: 'Overnight stay', price: '$85', note: 'Per night' },
    ]
  },
  {
    title: 'Pet Boarding',
    prices: [
      { service: 'Standard boarding', price: '$65', note: 'Per night' },
      { service: 'Extended stay (7+ nights)', price: '$55', note: 'Per night' },
      { service: 'Holiday rate', price: '$75', note: 'Per night' },
    ]
  },
  {
    title: 'Additional Services',
    prices: [
      { service: 'Pet taxi service', price: 'Free', note: 'With boarding' },
      { service: 'Medication administration', price: '$5', note: 'Per dose' },
      { service: 'Extra pet (same household)', price: '$10', note: 'Additional per service' },
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Pricing
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-[#8B4513] text-white p-6">
                <h2 className="text-2xl font-bold text-center">{plan.title}</h2>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {plan.prices.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold">{item.service}</span>
                        <p className="text-sm text-gray-600">{item.note}</p>
                      </div>
                      <span className="text-xl font-bold text-[#8B4513]">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            * Prices may vary based on location, holidays, and specific requirements.<br />
            * Additional fees may apply for early morning, late night, or holiday services.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0522D] transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
