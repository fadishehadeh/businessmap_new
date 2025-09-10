import React from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Download } from 'lucide-react';

const NewsArticle = () => {
  const { id } = useParams();

  // Sample article data - in a real app, this would be fetched based on the ID
  const article = {
    id: 295,
    title: "Ministry of Commerce and Industry Launches New Digital Platform for Business Registration",
    excerpt: "The Ministry announces the launch of a comprehensive digital platform aimed at streamlining business registration processes and enhancing investor experience in Qatar.",
    date: "2024-01-15",
    category: "Business",
    readTime: "3 min read",
    image: "/images/image1.jpg",
    author: "Ministry of Commerce and Industry",
    content: `
      <p>The Ministry of Commerce and Industry has officially launched a groundbreaking digital platform designed to revolutionize the business registration process in Qatar. This comprehensive initiative represents a significant step forward in the country's digital transformation journey and reinforces Qatar's commitment to creating a business-friendly environment for both local and international investors.</p>

      <h3>Key Features of the New Platform</h3>
      <p>The new digital platform offers a wide range of features designed to simplify and expedite the business registration process:</p>

      <p><strong>One-Stop Digital Services:</strong> Complete business registration can now be accomplished entirely online, eliminating the need for multiple office visits.</p>

      <p><strong>Real-Time Processing:</strong> Applications are processed in real-time, significantly reducing waiting periods and improving efficiency.</p>

      <p><strong>Integrated Payment Systems:</strong> Secure online payment options for all fees and charges associated with business registration.</p>

      <p><strong>Document Management:</strong> Digital document upload and verification system that ensures all required paperwork is properly submitted and reviewed.</p>

      <p><strong>Status Tracking:</strong> Real-time tracking of application status, allowing applicants to monitor progress throughout the registration process.</p>

      <h3>Benefits for Investors and Businesses</h3>
      <p>This digital transformation brings numerous advantages to the business community in Qatar:</p>
      <ul>
        <li><strong>Time Efficiency:</strong> The streamlined process reduces registration time from weeks to just a few days.</li>
        <li><strong>Cost Reduction:</strong> Elimination of paper-based processes and reduced administrative overhead.</li>
        <li><strong>24/7 Accessibility:</strong> The platform is available around the clock, allowing businesses to submit applications at their convenience.</li>
        <li><strong>Enhanced Transparency:</strong> Clear visibility into the registration process and requirements.</li>
        <li><strong>Improved Accuracy:</strong> Digital validation reduces errors and ensures compliance with regulatory requirements.</li>
      </ul>

      <h3>Supporting Qatar's Economic Vision</h3>
      <p>This initiative aligns perfectly with Qatar National Vision 2030 and the country's commitment to economic diversification. By making it easier for businesses to establish operations in Qatar, the platform supports the growth of various sectors including technology, manufacturing, services, and innovation.</p>

      <p>The Minister of Commerce and Industry emphasized that this digital platform represents just the beginning of a broader digital transformation strategy. Future enhancements will include additional services such as licensing renewals, compliance monitoring, and expanded integration with other government services.</p>

      <h3>Implementation and Rollout</h3>
      <p>The platform has been developed in collaboration with leading technology partners and has undergone extensive testing to ensure reliability and security. The rollout will be conducted in phases, starting with core registration services and gradually expanding to include additional features and services.</p>

      <p>Training sessions and support materials are being provided to help businesses and their representatives navigate the new system effectively. The Ministry has also established a dedicated support team to assist users during the transition period.</p>

      <h3>Looking Forward</h3>
      <p>This digital platform launch marks a significant milestone in Qatar's journey toward becoming a fully digital economy. The Ministry remains committed to continuous improvement and innovation, with plans to introduce additional digital services and enhancements based on user feedback and evolving business needs.</p>

      <p>For more information about the new digital platform and to access the services, businesses can visit the official Ministry website or contact the dedicated support team.</p>
    `,
    tags: ["Digital Transformation", "Business Registration", "Innovation", "Qatar Vision 2030"],
    relatedArticles: [
      {
        id: 294,
        title: "Qatar's Economic Growth Reaches New Heights in Q4 2023",
        image: "/images/image2.jpg"
      },
      {
        id: 293,
        title: "New Trade Agreements Signed to Boost International Commerce",
        image: "/images/image3.jpg"
      }
    ]
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage={article.image}
        title={article.title}
        subtitle={`Published on ${formatDate(article.date)} • ${article.readTime}`}
        overlayType="gradient-dark"
        textColor="white"
        height="large"
        textAlign="left"
      />

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-wide max-w-4xl">
          {/* Back Navigation */}
          <Link
            to="/media-centre/news"
            className="inline-flex items-center gap-2 text-qatari hover:text-qatari-dark font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to News
          </Link>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-qatari text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-qatari/10 text-qatari rounded-lg hover:bg-qatari/20 transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                <Download size={16} />
                Download PDF
              </button>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {article.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-qatari prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {article.relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/media-centre/news/${relatedArticle.id}`}
                  className="group flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-qatari/5 transition-colors"
                >
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-900 group-hover:text-qatari transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsArticle;
