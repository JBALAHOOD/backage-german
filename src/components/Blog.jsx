import React from 'react';
import { ArrowRight, Clock, User, BookOpen, Plane } from 'lucide-react';
import { useTranslation } from './LanguageSwitcher';

export default function Blog({ onNavigateToTravelTips, onNavigateToPackingHacks }) {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      title: t('blog.travelTips.title'),
      excerpt: t('blog.travelTips.excerpt'),
      author: 'Reise-Experte',
      readTime: '5 Min',
      date: '2024-01-15',
      category: 'Reisetipps',
      image: '✈️',
      slug: 'cheap-travel-hand-luggage-only'
    },

    {
      id: 3,
      title: 'Pack-Tricks für maximalen Platz',
      excerpt: 'Professionelle Packtechniken, um mehr in Ihr Handgepäck zu bekommen, ohne das Gewichtslimit zu überschreiten.',
      author: 'Pack-Profi',
      readTime: '6 Min',
      date: '2024-01-05',
      category: 'Pack-Tipps',
      image: '📦',
      slug: 'packing-hacks-maximum-space'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              {t('blog.title')}
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover-lift"
            >
              {/* Post Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-6xl">{post.image}</span>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <button 
                    onClick={() => {
                      if (post.slug === 'cheap-travel-hand-luggage-only' && onNavigateToTravelTips) {
                        onNavigateToTravelTips();
                      } else if (post.slug === 'packing-hacks-maximum-space' && onNavigateToPackingHacks) {
                        onNavigateToPackingHacks();
                      }
                    }}
                    className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:gap-2 transition-all"
                  >
                    {t('blog.readMore')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Content Section */}
        <div className="mt-16 bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Plane className="w-6 h-6 text-blue-600" />
                Smart Travel with Hand Luggage Only
              </h3>
              <p className="text-gray-600 mb-4">
                Traveling with only hand luggage is the ultimate way to save money and time. Our comprehensive guides help you master the art of efficient packing while staying within airline restrictions.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Save on checked baggage fees
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Skip baggage claim queues
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Reduce risk of lost luggage
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Popular Airlines Covered
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Lufthansa', 'Ryanair', 'EasyJet', 'Emirates', 'British Airways', 'KLM', 'Air France', 'Turkish Airlines'].map((airline) => (
                  <div key={airline} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-700">{airline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}