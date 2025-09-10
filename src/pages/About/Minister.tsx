import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Briefcase, Award } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

const Minister = () => {
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
        backgroundImage="/images/image1.jpg"
        title="The Minister"
        subtitle="His Excellency Sheikh Faisal bin Thani bin Faisal Al Thani"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Minister Profile */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Photo */}
              <div className="text-center">
                <div className="relative inline-block">
                  <img
                    src="/images/minister.jpg"
                    alt="His Excellency Sheikh Faisal bin Thani bin Faisal Al Thani"
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg border-4 border-qatari/20"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">
                  His Excellency Sheikh Faisal bin Thani bin Faisal Al Thani
                </h2>
                <p className="text-lg text-qatari font-semibold">
                  Minister of Commerce and Industry
                </p>
              </div>

              {/* Biography */}
              <div className="space-y-6">
                <Card className="border-2 border-qatari/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-6 h-6 text-qatari" />
                      <h3 className="text-xl font-bold text-gray-900">Appointment</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      His Excellency Sheikh Faisal bin Thani bin Faisal Al Thani was appointed Minister of Commerce and Industry in November 2024. He brings extensive leadership and management experience, having held numerous senior positions in both local and international institutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-qatari/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Award className="w-6 h-6 text-qatari" />
                      <h3 className="text-xl font-bold text-gray-900">Current Positions</h3>
                    </div>
                    <div className="space-y-3 text-gray-700">
                      <p><strong>Chairman of the Boards:</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Qatar Free Zones Authority</li>
                        <li>Qatar Financial Centre Authority</li>
                        <li>Qatar Stock Exchange</li>
                        <li>Ooredoo Group</li>
                        <li>Lesha Bank</li>
                        <li>Advisory Board of the Investment Promotion Agency (Invest Qatar)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-qatari/20">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-qatari" />
                      <h3 className="text-xl font-bold text-gray-900">Education</h3>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p><strong>Bachelor's degree in Business Administration</strong><br />
                      Marymount University, United States of America</p>
                      <p><strong>Executive Master's in Business Administration</strong><br />
                      HEC Paris</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Roles and Experience */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Additional Roles and Experience
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-qatari/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Board Memberships</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Vice Chairman of Qatar Development Bank (QDB)</li>
                    <li>• Qatar Investment Authority</li>
                    <li>• The Supreme Council for Economic Affairs and Investment</li>
                    <li>• National Planning Council</li>
                    <li>• Qatar Airways Group</li>
                    <li>• Qatar Insurance Company</li>
                    <li>• Supreme Committee for the Preparation of the Third National Development Strategy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-qatari/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Previous Experience</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chief Investment Officer for Asia and Africa at Qatar Investment Authority</li>
                    <li>• Chief Investment Officer at Qatar Foundation Endowment (2014-2017)</li>
                    <li>• Investment management at Qatar Central Bank (2010-2014)</li>
                    <li>• Chairman of Qatar Banking Studies and Business Administration Secondary School</li>
                    <li>• Vice Chairman of Vodafone Qatar (2013-2016)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-qatari/20 mt-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Previous Board Memberships</h3>
                <p className="text-gray-700 leading-relaxed">
                  His Excellency has served as a board member for several prominent organisations, including Ahlibank, Qatari Diar Real Estate Investment Company, Nakilat, Bharti Airtel, and Siemens Qatar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Minister;
