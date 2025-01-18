import Contact from '@/components/Contact';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Happy Tail VA LLC',
  description: 'Get in touch with Happy Tail LLC for all your pet care needs. We provide professional dog walking, pet sitting, and boarding services in Falls Church, VA and surrounding areas.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Contact Us
        </h1>
      </div>
      <Contact />
    </div>
  );
}
