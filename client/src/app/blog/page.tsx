import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Happy Tail VA LLC',
  description: 'Read our latest blog posts about pet care tips, dog behavior, and more from Happy Tail LLC.',
};

const blogPosts = [
  {
    title: 'Understanding and Managing Dog Hyperactivity',
    slug: 'hyperactivity',
    excerpt: 'Learn about the causes of hyperactivity in dogs and effective strategies to manage their energy levels.',
    image: '/images/photography/dog-hyper.jpeg',
    date: 'March 15, 2024'
  },
  {
    title: 'Dealing with Separation Anxiety in Dogs',
    slug: 'separation-anxiety',
    excerpt: 'Discover how to help your dog cope with separation anxiety and create a more comfortable environment when you\'re away.',
    image: '/images/photography/separation-anxiety.jpeg',
    date: 'March 10, 2024'
  },
  {
    title: 'The Benefits of Regular Dog Walking',
    slug: 'benefits-of-walking',
    excerpt: 'Explore why regular walks are essential for your dog\'s physical and mental well-being.',
    image: '/images/photography/dog_walking.jpeg',
    date: 'March 5, 2024'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Our Blog
        </h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold mb-2 text-gray-900">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#8B4513] font-semibold hover:text-[#A0522D] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Subscribe to our newsletter for more pet care tips and updates.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#8B4513] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#A0522D] transition-colors mt-4"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
