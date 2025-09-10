import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Target, Heart, Star, Lightbulb, Shield, Users } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const VisionMissionValues = () => {
  const values = [
    {
      icon: Star,
      title: "Outstanding Service",
      description: "Provide high quality public services, characterized by timeliness and accuracy to satisfy investors and consumers; in addition to spreading a culture of providing outstanding services that exceed expectations, thus enhancing the confidence of beneficiaries.",
      image: "/images/image1.jpg",
      imageAlt: "Modern Qatar Financial Centre showcasing outstanding service delivery"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurial thinking and innovation",
      description: "Adopt a pioneering culture and a groundbreaking way of thinking to achieve the desired goals, attaining a competitive edge and improving performance. Instill a culture of innovation in the public sector and promote mechanisms for analyzing and devising innovative public policies that suit contemporary challenges, by relying on the ideas of employees, beneficiaries and the civil society.",
      image: "/images/image4.jpg",
      imageAlt: "Business innovation hub supporting entrepreneurial thinking and innovation"
    },
    {
      icon: Shield,
      title: "Transparency",
      description: "Create an environment for the exchange of information and knowledge and make them accessible to all, as well as clarifying decisions, tasks and procedures in line with the highest degree of professionalism.",
      image: "/images/image6.png",
      imageAlt: "Ministry headquarters representing transparency and professional governance"
    },
    {
      icon: Users,
      title: "Cooperate as partners",
      description: "Establish complete harmony between internal entities and stakeholders, as well as cooperating with the public and clients as partners.",
      image: "/images/image2.jpg",
      imageAlt: "International trade conference demonstrating partnership and cooperation"
    }
  ];

  return (
    <Layout>
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-wide">
          <Button asChild variant="ghost" className="text-qatari hover:text-qatari-dark">
            <Link to="/about" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to About
            </Link>
          </Button>
        </div>
      </section>

      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image3.jpg"
        title="Vision, Mission and Values"
        subtitle="Our guiding principles and core beliefs"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Vision and Mission */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Vision */}
              <Card className="border-2 border-qatari/20 bg-gradient-to-br from-qatari/5 to-qatari/10 overflow-hidden">
                {/* Vision Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/image7.png"
                    alt="Qatar's economic vision showcasing modern development and growth opportunities"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qatari/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-8 h-8 text-qatari" />
                  </div>
                </div>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    Create a competitive environment that encourages innovation and abounds with opportunities, thus contributing to establishing and developing businesses and attracting investments, to achieve sustainable growth in the trade, industry and consumer sectors.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="border-2 border-qatari/20 bg-gradient-to-br from-qatari/5 to-qatari/10 overflow-hidden">
                {/* Mission Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/image3.jpg"
                    alt="Doha port facilities representing Qatar's mission to develop business environment and trade"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-qatari/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Target className="w-8 h-8 text-qatari" />
                  </div>
                </div>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-3xl font-bold text-gray-900">
                    Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    Develop an attractive business environment through providing quality services by devising general policies for business development, encouraging investment and developing national industries; this endeavor is pursued within a system that guarantees the development of intellectual property, consumer protection, competition protection and prevention of monopolistic practices.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Impact Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Driving Qatar's Economic Future
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our vision, mission, and values work together to create a comprehensive framework that guides Qatar's commercial and industrial development. Through strategic planning and dedicated implementation, we foster an environment where businesses thrive and innovation flourishes.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-qatari/5 rounded-lg">
                    <div className="text-2xl font-bold text-qatari mb-2">2030</div>
                    <div className="text-sm text-gray-600">Strategic Vision</div>
                  </div>
                  <div className="text-center p-4 bg-qatari/5 rounded-lg">
                    <div className="text-2xl font-bold text-qatari mb-2">100%</div>
                    <div className="text-sm text-gray-600">Commitment</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/images/hero.jpg"
                  alt="Qatar's economic development and business growth representing our strategic impact"
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-qatari/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            {/* Values Header with Background Image */}
            <div className="relative mb-16 rounded-2xl overflow-hidden">
              <div
                className="h-64 bg-cover bg-center relative"
                style={{ backgroundImage: "url('/images/image5.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-qatari/90 to-qatari/60"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                      <Heart className="w-10 h-10 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-white mb-4 hero-text-shadow">
                      Our Values
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto hero-text-shadow">
                      These core values guide our actions and decisions, ensuring we deliver exceptional service while maintaining the highest standards of integrity and professionalism.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="border-2 border-gray-200 hover:border-qatari transition-all duration-300 group hover:shadow-lg overflow-hidden">
                    {/* Value Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={value.image}
                        alt={value.imageAlt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <IconComponent className="w-6 h-6 text-qatari" />
                        </div>
                        <h3 className="text-xl font-bold text-white hero-text-shadow">
                          {value.title}
                        </h3>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VisionMissionValues;
