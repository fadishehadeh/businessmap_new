import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, Target, FileText, Shield } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const About = () => {
  const subPages = [
    {
      title: "The Minister",
      description: "Learn about His Excellency Sheikh Faisal bin Thani bin Faisal Al Thani",
      href: "/about/minister",
      icon: Users,
    },
    {
      title: "The Strategy of the Ministry",
      description: "Discover our strategic vision for 2024-2030",
      href: "/about/strategy", 
      icon: Target,
    },
    {
      title: "Vision, Mission and Values",
      description: "Our core principles and guiding values",
      href: "/about/vision",
      icon: FileText,
    },
    {
      title: "National Committees",
      description: "Specialized committees protecting Qatar's economic interests",
      href: "/about/committees",
      icon: Shield,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image4.jpg"
        title="About the Ministry"
        subtitle="The Ministry of Commerce and Industry is responsible for overseeing commercial and industrial activities in Qatar and directing these activities as per the requirements of national development."
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Ministry Description */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Mandate
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-6">
                The Ministry's mandate includes undertaking business development, contributing to attracting investments, as well as supporting and developing exports. Other responsibilities involve developing methods and procedures for providing public services to the business and investment sector, regulating the practice of business activities, registering commercial and investment establishments, issuing licenses to carry out their activities, and supervising the regulation and control of markets in its area of competence.
              </p>
              <p className="mb-6">
                The Ministry is additionally responsible for taking measures to protect consumers, combat commercial fraud, safeguard competition and prevent monopolistic practices, as well as protect intellectual property rights.
              </p>
              <p>
                Moreover, the Ministry seeks to devise general policies to promote industrialization and national industries, develop and exploit industrial zones, and propose the establishment of new ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-pages Navigation */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Learn More About Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {subPages.map((page) => {
                const IconComponent = page.icon;
                return (
                  <Card key={page.title} className="border-2 border-gray-200 hover:border-qatari transition-colors duration-300 group">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-qatari/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-qatari/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-qatari" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-qatari transition-colors duration-300">
                        {page.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                        {page.description}
                      </CardDescription>
                      <Button asChild className="w-full bg-qatari hover:bg-qatari-dark text-white border-2 border-qatari hover:border-qatari-dark">
                        <Link to={page.href} className="flex items-center justify-center gap-2">
                          Learn More
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </Button>
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

export default About;
