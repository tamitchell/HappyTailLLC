export default function ServicesPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Services
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Dog Walking</h2>
            <p className="text-gray-600 mb-4">
              Professional dog walking services tailored to your pet's needs. We provide one-on-one 
              attention and ensure your dog gets the exercise they need.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Individual or group walks available</li>
              <li>Flexible scheduling</li>
              <li>Real-time updates and photos</li>
              <li>GPS tracking of walks</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pet Sitting</h2>
            <p className="text-gray-600 mb-4">
              When you're away, we'll make sure your pet feels at home. Our pet sitting services 
              include regular visits and overnight stays.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>In-home pet care</li>
              <li>Feeding and medication administration</li>
              <li>Daily updates and photos</li>
              <li>Plant watering and mail collection</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Pet Boarding</h2>
            <p className="text-gray-600 mb-4">
              A home away from home for your pet. Our boarding services provide a safe and 
              comfortable environment when you need extended care.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>24/7 supervision</li>
              <li>Comfortable, home-like environment</li>
              <li>Regular exercise and playtime</li>
              <li>Free pick-up and drop-off</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Special Care Services</h2>
            <p className="text-gray-600 mb-4">
              We offer specialized care for pets with unique needs, including senior pets and 
              those requiring medical attention.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Medication administration</li>
              <li>Senior pet care</li>
              <li>Special dietary requirements</li>
              <li>Post-surgery care</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="/contact" 
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0522D] transition-colors"
          >
            Book a Service
          </a>
        </div>
      </div>
    </div>
  );
}
