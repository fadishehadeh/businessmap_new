import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Phone, Mail, AlertTriangle, Scale, Eye, Gavel, Target } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageHero from '@/components/ui/PageHero';

const NationalCommittees = () => {
  const antiConcealmentFunctions = [
    "Develop anti-concealment plans and programs and monitor their implementation.",
    "Coordinate with relevant authorities to enforce the provisions of legislation related to combating concealment.",
    "Receive reports related to violations of the provisions of this law, examine them, verify their seriousness, and refer them to the Public Prosecution.",
    "Request and exchange information with relevant entities and take necessary actions to combat concealment.",
    "Cooperate with various government and private entities to develop public awareness programs on combating concealment.",
    "Any other functions specified by the Council of Ministers."
  ];

  const antiConcealmentFaqData = [
    {
      question: "What is meant by concealment?",
      answer: "Concealment refers to enabling a non-Qatari, whether a natural or legal person, to engage in or invest in a commercial, economic, or professional activity they are not licensed to perform under the laws in force in the state. This also includes obtaining a share of profits exceeding the percentages stipulated in the company's founding documents or articles of association.\n\nIt is also prohibited for any natural or legal person to conceal a non-Qatari by enabling them to engage in or invest in a commercial, economic, or professional activity that violates the laws in force in the state. This includes allowing them to use the concealer's name, license, commercial or professional registration, or any other means that enable the non-Qatari to evade obligations imposed by the applicable laws, whether for the benefit of the concealed person, the concealer, or others.\n\nNon-Qataris are not permitted to engage in commercial activities that they are not authorized to practice under the laws of the state. Qatar has established specific percentages allowing foreigners to engage in commercial activities, with the law setting a maximum ownership percentage of 49% for foreigners, while Qataris must own 51% or more. Therefore, if a foreigner's account receives substantial amounts exceeding their salary, it raises suspicion of concealment. The matter is then referred for investigation.\n\nThis law also penalizes Qataris who enable foreigners to use their name, license, or commercial registration to evade the obligations stipulated in the laws of the state."
    },
    {
      question: "What are the committee's functions and who are its members?",
      answer: "Article 3 of the above law stipulates the establishment of a Concealment Combat Committee within the Ministry of Commerce and Industry. The committee's formation, its members' remuneration, and its procedures are determined by a decision from the Council of Ministers.\n\nThe committee consists of representatives from various government entities including the Ministry of Commerce and Industry, Ministry of Interior, Ministry of Administrative Development, Labor and Social Affairs, Qatar Central Bank, and other relevant authorities. The committee is chaired by a representative from the Ministry of Commerce and Industry."
    },
    {
      question: "What is the penalty for concealment crimes?",
      answer: "Anyone found guilty of a concealment crime is subject to a fine of up to 500,000 Qatari Riyals and imprisonment for up to two years. The penalty also includes the confiscation of funds related to the crime and the deportation of the foreign offender.\n\nAdditionally, the law provides for the closure of the commercial establishment involved in concealment activities and the cancellation of relevant licenses. The penalties are designed to serve as a strong deterrent against concealment practices."
    },
    {
      question: "How can concealment activities be reported?",
      answer: "Concealment activities can be reported through multiple channels:\n\n• Ministry of Commerce and Industry hotline: 16001\n• Email: info@moci.gov.qa\n• Online reporting system on the ministry's website\n• Direct submission to the Anti-Concealment Committee\n\nAll reports are treated confidentially and investigated thoroughly by the committee."
    },
    {
      question: "What are examples of concealment activities?",
      answer: "Examples of concealment activities include:\n\n• A non-Qatari using a Qatari's name to establish a business they are not legally permitted to operate\n• Receiving profits from a business that exceed the legal ownership percentage\n• Using someone else's commercial license or registration to conduct business\n• Establishing shell companies to circumvent foreign ownership restrictions\n• Operating businesses in sectors restricted to Qatari nationals only"
    },
    {
      question: "What are the individual's responsibilities under the anti-concealment law?",
      answer: "Individuals have several responsibilities under the anti-concealment law:\n\n• Qatari nationals must not allow non-Qataris to use their names, licenses, or registrations for illegal commercial activities\n• Non-Qataris must comply with foreign ownership restrictions and not engage in prohibited commercial activities\n• All individuals must report suspected concealment activities to the authorities\n• Business owners must ensure their partnerships and profit-sharing arrangements comply with legal requirements\n• Everyone must cooperate with investigations conducted by the Anti-Concealment Committee"
    },
    {
      question: "What legal consequences can individuals face?",
      answer: "Individuals involved in concealment activities face serious legal consequences:\n\n• Criminal prosecution under Law No. (3) of 2023\n• Fines up to 500,000 Qatari Riyals\n• Imprisonment for up to two years\n• Confiscation of assets and profits from illegal activities\n• Deportation for non-Qatari offenders\n• Permanent ban from conducting business in Qatar\n• Blacklisting from government contracts and services"
    },
    {
      question: "How does the committee investigate concealment cases?",
      answer: "The Anti-Concealment Committee follows a systematic investigation process:\n\n• Initial assessment of reported cases\n• Collection and analysis of financial and commercial records\n• Coordination with relevant government agencies\n• Conducting interviews with involved parties\n• Verification of ownership structures and profit distributions\n• Preparation of detailed investigation reports\n• Referral to Public Prosecution for legal action when violations are confirmed"
    },
    {
      question: "What preventive measures are in place?",
      answer: "The committee implements various preventive measures:\n\n• Regular monitoring of commercial activities and ownership structures\n• Public awareness campaigns about concealment laws\n• Training programs for government officials and private sector\n• Coordination with financial institutions for suspicious transaction reporting\n• Regular audits of businesses in high-risk sectors\n• Development of detection systems and early warning mechanisms"
    },
    {
      question: "How does concealment affect Qatar's economy?",
      answer: "Concealment activities have several negative impacts on Qatar's economy:\n\n• Unfair competition that disadvantages legitimate businesses\n• Loss of government revenue through tax evasion\n• Undermining of economic policies and development plans\n• Distortion of market mechanisms and pricing\n• Reduced investment confidence and economic stability\n• Violation of international trade agreements and commitments\n\nThe anti-concealment law helps protect Qatar's economic interests and ensures fair business practices."
    }
  ];

  const tradeCommitteeWorkPlan = [
    "Coordinate with the private sector to identify trade opportunities and challenges",
    "Develop strategies to maximize benefits from WTO membership",
    "Monitor implementation of trade agreements and commitments",
    "Provide technical assistance and capacity building programs",
    "Facilitate dialogue between government and business community",
    "Conduct research and analysis on trade-related issues",
    "Organize workshops and seminars on international trade",
    "Support Qatar's participation in international trade negotiations"
  ];

  const competitionCommitteeMembers = [
    "A private sector representative who is nominated as president by the Minister of Economy and Commerce",
    "Two representatives of the Ministry of Economy and Commerce among whom one is named as vice president",
    "A representative of the Energy and Industry Ministry",
    "A representative of the Finance Ministry",
    "A representative of the Ministry of Justice",
    "A representative of Qatar Central Bank",
    "A representative of the General Authority of Customs and Ports",
    "Two experts nominated by the Minister of Economy and Commerce"
  ];

  const competitionObjectives = [
    "Raising awareness about the importance of fair competition in terms of ensuring fair prices and high quality goods and products",
    "Preventing monopoly practices that negatively affect fair competition",
    "Creating an integrated and complete database related to economic activity in the State of Qatar",
    "Building highly qualified and skilled cadres capable of conducting academic research and studies",
    "Liaising with counterpart committees in other countries to discuss issues of common interest",
    "Contributing to the development of legal frameworks to ensure fair competition and prevent monopoly practices"
  ];

  const competitionJurisdiction = [
    "Preparing a database that includes comprehensive information regarding economic activity in Qatar",
    "Receiving complaints regarding violations of law (19), verifying their authenticity and taking appropriate measures",
    "Coordinating with counterparts in other countries over issues of common interest",
    "Issuing a regular newsletter that outlines the decisions, recommendations and measures taken by the committee",
    "Preparing an annual report to be submitted to the Minister of Economy and Commerce",
    "Giving advice concerning draft laws and proposals related to economic competition and antimonopoly practices"
  ];

  const competitionFaqData = [
    {
      question: "What is the objective of the competition and antimonopoly law?",
      answer: "Law number (19) issued in 2006 aims to provide a mechanism of work to fight monopoly practices. It also aims to promote fair economic competition in the context of transparent markets that enable businesses to compete freely and consumers to benefit from such competition. In this regard, the Competition and Antimonopoly law in Qatar outlines the principles of economic competition in Qatar."
    },
    {
      question: "Where is the Competition and Antimonopoly law applicable?",
      answer: "The law applies to all activities (undertaken by factories, institutions and companies) across all economic sectors (industrial, commercial, agricultural or services) in violation of fair competition regulations and influence the market."
    },
    {
      question: "Does the law apply to foreign companies that have no representative offices in Qatar?",
      answer: "The law applies to all violations that influence the local market, including violations committed by institutions based outside Qatar."
    },
    {
      question: "Are there any exemptions to the law?",
      answer: "The law exempts state actions and institutions under the supervision of the State. The minister has also the right to exempt agreements that promote consumers' welfare."
    },
    {
      question: "Who is responsible for enforcing the law?",
      answer: "The Competition Protection and Antimonopoly Committee is responsible for enforcing the law. Article (7) of the law stipulates the formation of the committee whose members include financial, legal and economic experts as well as the representatives of the ministry and concerned parties. The committee was formed in accordance with decision (105) issued in 2008."
    },
    {
      question: "Which practices are banned under the Competition Protection law?",
      answer: "The law bans all agreements that aim to limit competition or result in monopolies. Institutions that have a dominant position in the market are also prohibited from abusing this position. It is important to note that institutions are allowed to have a dominant position but are not entitled to abuse this position."
    },
    {
      question: "What are the penalties for violating the law?",
      answer: "The law stipulates the following penalties for violating its provisions: Any person who commits a violation of the provisions of this law is fined an amount not less than a hundred thousand rial and not exceeding five million rial. In all cases, the court shall confiscate all profits resulting from activities in violation of the provisions of this law."
    },
    {
      question: "What are the measures taken by the committee when a violation is proven?",
      answer: "When a violation is proven, the committee shall issue a warning to the person responsible for committing the violation, requiring him to comply with the law immediately or within a certain deadline. If the person responsible for committing the violation fails to comply with the law within the appointed deadline, the committee refers the case to the Minister of the Economy and Commerce, who in turns refers the case to the judiciary."
    },
    {
      question: "Should institutions planning mergers and acquisitions inform the committee of their intent?",
      answer: "Institutions that are planning to acquire assets or intellectual property rights or shares or undergo mergers and acquisitions that result in a dominant market position should inform the committee of their decision in writing. The law ensures the quick processing of applications in less than 90 days following their submission to the committee. If the committee fails to process the application within a 90-day deadline, the application is deemed approved."
    },
    {
      question: "How is the law enforced?",
      answer: "The law is enforced by the committee in two ways: The committee takes the initiative to investigate any violations of the provisions of the law."
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
        backgroundImage="/images/image4.jpg"
        title="National Committees"
        subtitle="Specialized committees working to protect Qatar's economic interests"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Committees Tabs */}
      <section className="py-16">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <Tabs defaultValue="anti-concealment" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 mb-12 bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-xl border-2 border-gray-200 shadow-lg enhanced-tabs-list">
                <TabsTrigger
                  value="anti-concealment"
                  className="enhanced-tab-trigger flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300
                    data-[state=active]:bg-qatari data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-qatari-dark data-[state=active]:enhanced-tab-active
                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 data-[state=inactive]:border-2 data-[state=inactive]:border-gray-200
                    hover:bg-qatari/10 hover:text-qatari hover:border-qatari/30 hover:shadow-md hover:scale-105
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qatari focus-visible:ring-offset-2"
                >
                  <Shield className="w-5 h-5" />
                  <span className="hidden sm:inline">Anti-Concealment Committee</span>
                  <span className="sm:hidden">Anti-Concealment</span>
                </TabsTrigger>
                <TabsTrigger
                  value="trade"
                  className="enhanced-tab-trigger flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300
                    data-[state=active]:bg-qatari data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-qatari-dark data-[state=active]:enhanced-tab-active
                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 data-[state=inactive]:border-2 data-[state=inactive]:border-gray-200
                    hover:bg-qatari/10 hover:text-qatari hover:border-qatari/30 hover:shadow-md hover:scale-105
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qatari focus-visible:ring-offset-2"
                >
                  <Users className="w-5 h-5" />
                  <span className="hidden sm:inline">National Committee on Trade</span>
                  <span className="sm:hidden">Trade Committee</span>
                </TabsTrigger>
                <TabsTrigger
                  value="competition"
                  className="enhanced-tab-trigger flex items-center justify-center gap-3 px-6 py-4 text-base font-semibold rounded-lg transition-all duration-300
                    data-[state=active]:bg-qatari data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:border-2 data-[state=active]:border-qatari-dark data-[state=active]:enhanced-tab-active
                    data-[state=inactive]:bg-white data-[state=inactive]:text-gray-700 data-[state=inactive]:border-2 data-[state=inactive]:border-gray-200
                    hover:bg-qatari/10 hover:text-qatari hover:border-qatari/30 hover:shadow-md hover:scale-105
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-qatari focus-visible:ring-offset-2"
                >
                  <Gavel className="w-5 h-5" />
                  <span className="hidden sm:inline">Competition Protection Committee</span>
                  <span className="sm:hidden">Competition</span>
                </TabsTrigger>
              </TabsList>

              {/* Anti-Concealment Committee Tab */}
              <TabsContent value="anti-concealment" className="space-y-8 animate-fade-in">
                {/* Committee Header with Background Image */}
                <div className="relative mb-12 rounded-2xl overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/images/image6.png')" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-qatari/90 to-qatari/60"></div>
                    <div className="relative z-10 h-full flex items-center justify-center text-center">
                      <div>
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                          <Shield className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 hero-text-shadow">
                          Anti-Concealment Committee
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto hero-text-shadow">
                          Protecting Qatar's economic integrity through vigilant oversight and enforcement
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Definition Section */}
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <Card className="border-2 border-qatari/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-qatari" />
                        Definition of Concealment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        Concealment is defined as enabling a non-Qatari individual or entity to engage in commercial, economic, or professional activities in violation of applicable laws and regulations.
                      </p>
                      <div className="bg-red-50 border-l-4 border-red-400 p-4">
                        <p className="text-red-800 leading-relaxed">
                          <strong>Important:</strong> Concealment is a crime punishable by law due to its threat to the economic and social security of countries.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="relative">
                    <img
                      src="/images/image1.jpg"
                      alt="Qatar Financial Centre representing legal business practices and economic security"
                      className="w-full h-80 object-cover rounded-2xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-qatari/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>

                {/* Functions Section */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <Scale className="w-6 h-6 text-qatari" />
                      Functions of the Anti-Concealment Committee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {antiConcealmentFunctions.map((func, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-qatari text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 leading-relaxed">{func}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                      <Users className="w-6 h-6 text-qatari" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {antiConcealmentFaqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-qatari text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* National Committee on Trade Tab */}
              <TabsContent value="trade" className="space-y-8 animate-fade-in">
                {/* Trade Committee Header with Background Image */}
                <div className="relative mb-12 rounded-2xl overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/images/image2.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-qatari/90 to-qatari/60"></div>
                    <div className="relative z-10 h-full flex items-center justify-center text-center">
                      <div>
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                          <Users className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 hero-text-shadow">
                          The National Committee on Trade
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto hero-text-shadow">
                          Maximizing benefits from WTO membership and international trade opportunities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-2 border-qatari/20 overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="/images/image3.jpg"
                        alt="Doha port facilities representing international trade infrastructure"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-qatari/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                        <Eye className="w-5 h-5 text-qatari" />
                        About the Committee
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        The National Committee on Trade was formed in 2001 under Cabinet Resolution No. (4). The committee's main objective is to coordinate with both the private and public sector to maximize the benefits of Qatar's WTO membership.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-qatari/20 overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src="/images/image7.png"
                        alt="Qatar's economic vision and strategic development"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-qatari/60 to-transparent"></div>
                      <div className="absolute bottom-2 left-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                        <Target className="w-5 h-5 text-qatari" />
                        Committee Vision
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">
                        "To maximize the benefits of Qatar's membership with the WTO by providing support to state projects and initiatives as well as raising awareness among various economic sectors."
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Work Plan */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <Scale className="w-6 h-6 text-qatari" />
                      Committee Work Plan
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {tradeCommitteeWorkPlan.map((plan, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-qatari text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 leading-relaxed">{plan}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                      <Phone className="w-5 h-5 text-qatari" />
                      Contact The Committee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="w-4 h-4 text-qatari" />
                        <span className="text-gray-700">
                          <strong>Hotline:</strong> 44945500—44945550
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="w-4 h-4 text-qatari" />
                        <span className="text-gray-700">
                          <strong>Email:</strong> <a href="mailto:info@moci.gov.qa" className="text-qatari hover:text-qatari-dark underline">info@moci.gov.qa</a>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Competition Protection Committee Tab */}
              <TabsContent value="competition" className="space-y-8 animate-fade-in">
                {/* Competition Committee Header with Background Image */}
                <div className="relative mb-12 rounded-2xl overflow-hidden">
                  <div
                    className="h-64 bg-cover bg-center relative"
                    style={{ backgroundImage: "url('/images/image4.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-qatari/90 to-qatari/60"></div>
                    <div className="relative z-10 h-full flex items-center justify-center text-center">
                      <div>
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
                          <Gavel className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-4 hero-text-shadow">
                          Competition Protection Committee
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto hero-text-shadow">
                          Ensuring fair competition and preventing monopolistic practices in Qatar's markets
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <Card className="border-2 border-qatari/20">
                    <CardHeader>
                      <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                        <Eye className="w-6 h-6 text-qatari" />
                        About the Committee
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        In line with the efforts of the State of Qatar to protect economic competition and fight which interfere with the principles of a free market economy, Amiri Decree No. (19) was issued in 2006 with the aim of protecting economic competition and preventing monopoly practices which are defined in articles No. (3) and (4) of the aforementioned law.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Article No (7) of the same law stipulates the formation of a committee entitled "Competition Protection and Antimonopoly Committee." The committee is affiliated with the Minister of Economy and Commerce and includes economic, financial and legal experts.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="space-y-4">
                    <div className="relative">
                      <img
                        src="/images/image5.png"
                        alt="Traditional market representing fair competition and economic balance"
                        className="w-full h-64 object-cover rounded-2xl shadow-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-qatari/20 to-transparent rounded-2xl"></div>
                    </div>

                    <div className="bg-qatari/10 border-l-4 border-qatari p-4 rounded-r-lg">
                      <p className="text-gray-800 font-semibold mb-2">Committee Vision:</p>
                      <p className="text-gray-700">Working towards free competition based on advanced rules far from monopoly practices.</p>
                    </div>
                    <div className="bg-qatari/10 border-l-4 border-qatari p-4 rounded-r-lg">
                      <p className="text-gray-800 font-semibold mb-2">Committee Mission:</p>
                      <p className="text-gray-700">The Committee's vision is to promote economic competition and fight monopoly practices by taking the appropriate measures based on market research and available data concerning economic activity in the State of Qatar.</p>
                    </div>
                  </div>
                </div>

                {/* Committee Members */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <Users className="w-6 h-6 text-qatari" />
                      Committee Members
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {competitionCommitteeMembers.map((member, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-qatari text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 leading-relaxed">{member}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Committee Objectives */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <Target className="w-6 h-6 text-qatari" />
                      Committee Objectives
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {competitionObjectives.map((objective, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-qatari text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 leading-relaxed">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Committee Jurisdiction */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900 flex items-center gap-3">
                      <Scale className="w-6 h-6 text-qatari" />
                      Committee Jurisdiction
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {competitionJurisdiction.map((jurisdiction, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-qatari text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <p className="text-gray-700 leading-relaxed">{jurisdiction}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* FAQ Section */}
                <Card className="border-2 border-qatari/20">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 flex items-center gap-3">
                      <Users className="w-6 h-6 text-qatari" />
                      Frequently Asked Questions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {competitionFaqData.map((faq, index) => (
                        <AccordionItem key={index} value={`competition-item-${index}`}>
                          <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-qatari text-lg">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NationalCommittees;
