'use client';

import { useState } from 'react';
import Image from 'next/image';

const contactInfo = [
  {
    icon: '/images/ICONS/location.png',
    title: 'Location',
    content: ['3580 Ellery Circle', 'Falls Church Virginia 22041'],
    link: null
  },
  {
    icon: '/images/ICONS/phone.png',
    title: 'Telephone',
    content: ['Fiorella Gambini'],
    link: {
      text: '703-303-7099',
      href: 'tel:703-303-7099'
    }
  },
  {
    icon: '/images/ICONS/fax_icon.png',
    title: 'Fax',
    content: ['703-890-2653'],
    link: null
  },
  {
    icon: '/images/ICONS/Gmail.png',
    title: 'Email',
    content: [],
    link: {
      text: 'happytail.llc@gmail.com',
      href: 'mailto:happytail.llc@gmail.com'
    }
  }
];

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://www.enformed.io/9pr2kl0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'Full Name': formData.fullName,
          'Email': formData.email,
          'Phone Number': formData.phone,
          'Message': formData.message,
          '*redirect': 'http://happytailva.com/redirect.html',
          '*default_email': 'happytail.llc@gmail.com'
        }),
      });

      if (response.ok) {
        // Reset form
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: ''
        });
        setIsFormOpen(false);
        alert('Message sent successfully!');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Questions?</h2>
          <p className="text-xl text-gray-600 mb-4">
            If you have any questions or concerns, or for reservations and further information 
            on caring for your dog, please contact:
          </p>
          <h3 className="text-2xl font-semibold text-gray-800">Fiorella Gambini</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg p-4 flex items-start space-x-4 border-[1px]"
            >
              <div className="relative w-[4em] h-[4em] flex-shrink-0">
                <Image
                  src={info.icon}
                  alt={`${info.title} icon`}
                  fill
                  className="object-contain"
                />
              </div>
              <div className=' text-wrap w-full'>
                <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                {info.content.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
                {info.link && (
                  <a 
                    href={info.link.href}
                    className="text-[#8B4513] hover:text-[#A0522D] transition-colors"
                  >
                    {info.link.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => setIsFormOpen(!isFormOpen)}
            className="w-full hover:border-2 hover:border-darkBrown hover:text-white hover:bg-transparent hover:text-darkBrown border-2 border-darkBrown px-6 py-2 rounded-md font-semibold bg-darkBrown text-white transition-colors mb-6"
          >
            Send a Message
          </button>

          {isFormOpen && (
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  placeholder="(555) 555-5555"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#8B4513] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#A0522D] transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </form>
          )}
        </div>

        <div className="mt-12">
          <div className="relative w-full h-64 md:h-96 overflow-hidden">
            <Image
              src="/images/photography/dog_looking_forward.jpeg"
              alt="chocolate labrador looking forward"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
