import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  FileText,
  Building2,
  Clock,
  UserPlus,
  FileCheck,
  Briefcase,
  Users,
  ClipboardList,
  Shield,
  Phone,
  Mail,
  MessageSquare,
  Grid3x3,
  TrendingUp,
  Eye,
  Camera,
  Package,
  Hammer,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const UnifiedSystem: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedMenu, setSelectedMenu] = useState('all-services');

  const menuItems = [
    { id: 'all-services', icon: Grid3x3, title: 'جميع الخدمات', section: 'المستهلك' },
    { id: 'most-used', icon: TrendingUp, title: 'الأكثر استخداماً', section: 'المستهلك' },
    { id: 'product-monitoring', icon: Eye, title: 'مراقبة المنتجات', section: 'المستثمر' },
    { id: 'prices', icon: Camera, title: 'الأسعار', section: 'المستثمر' },
    { id: 'goods', icon: Package, title: 'السلع', section: 'المستثمر' },
    { id: 'brokerage', icon: Hammer, title: 'أعمال الدلالة', section: 'المستثمر' },
    { id: 'product-monitoring-2', icon: Eye, title: 'مراقبة المنتجات', section: 'المستثمر' },
    { id: 'competition', icon: ShieldCheck, title: 'حماية المنافسة', section: 'المستثمر' },
    { id: 'supplier-procedures', icon: Briefcase, title: 'إجراءات مزودين الخدمات', section: 'الملكية الفكرية' },
    { id: 'author-rights', icon: Users, title: 'حقوق المؤلف', section: 'الملكية الفكرية' },
  ];

  const services = [
    { icon: FileText, title: 'جميع معاملاتك', titleEn: 'All Your Transactions' },
    { icon: Building2, title: 'تغيير مقدمتها', titleEn: 'Change Submissions' },
    { icon: Clock, title: 'الحضور', titleEn: 'Attendance' },
    { icon: FileText, title: 'الأجور', titleEn: 'Wages' },
    { icon: UserPlus, title: 'إضافة موظف جديد - إقامة عمل وإصدار البطاقة', titleEn: 'Add New Employee - Work Permit & Card' },
    { icon: FileCheck, title: 'إشعار عن عدم الاستقدام', titleEn: 'Non-Recruitment Notice' },
    { icon: Briefcase, title: 'إضافة معاملة جديدة برخصة عمل جديدة', titleEn: 'Add New Transaction with Work License' },
    { icon: Shield, title: 'إضافة مرخصة تجديد', titleEn: 'Add Renewal License' },
    { icon: Users, title: 'إضافة معاملة جديدة برخصة عمل جديدة', titleEn: 'Add New Transaction with Work License' },
    { icon: ClipboardList, title: 'إضافة مستخدم', titleEn: 'Add User' },
    { icon: FileCheck, title: 'إضافة وكيل جديد - حقوق الموظف', titleEn: 'Add New Agent - Employee Rights' },
    { icon: MessageSquare, title: 'استعلام عن طلب استقالة', titleEn: 'Resignation Request Inquiry' },
    { icon: FileText, title: 'إعداد وإصدار البطاقة', titleEn: 'Card Preparation & Issuance' },
    { icon: Clock, title: 'استمارة طلب وقف نقل', titleEn: 'Stop Transfer Request Form' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#1D4381] to-[#1B458A]" style={{ fontFamily: 'Lusail, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <header className="p-6 flex justify-between items-center animate-fade-in">
        {/* Left side - Language and accessibility */}
        <div className="flex items-center gap-4 text-white">
          <button className="text-sm hover:underline transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>English</button>
          <button className="text-xl hover:scale-110 transition-transform hover:rotate-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>🔊</button>
          <button className="text-xl hover:scale-110 transition-transform animate-fade-in" style={{ animationDelay: '0.3s' }}>A+</button>
          <button className="text-xl hover:scale-110 transition-transform animate-fade-in" style={{ animationDelay: '0.4s' }}>A</button>
          <button className="text-xl hover:scale-110 transition-transform animate-fade-in" style={{ animationDelay: '0.5s' }}>A-</button>
          <button className="px-6 py-2 bg-white text-[#1D4381] rounded-full text-sm font-medium hover:bg-gray-100 transition-all hover:scale-105 hover:shadow-xl shadow-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
            تسجيل الدخول
          </button>
        </div>

        {/* Right side - Logos */}
        <div className="flex items-center gap-6">
          {/* Unified Logo on the left */}
          <img
            src="/images/unifiedlogo.png"
            alt="Unified Logo"
            className="h-20 object-contain hover:scale-110 transition-transform duration-300 animate-slide-in-right"
            style={{ animationDelay: '0.2s' }}
          />
          {/* Vertical divider */}
          <div className="h-16 w-px bg-white/40 animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
          {/* MOCI Logo on the right */}
          <img
            src="/images/logo-main-white.svg"
            alt="MOCI Logo"
            className="h-20 object-contain hover:scale-110 transition-transform duration-300 animate-slide-in-right"
            style={{ animationDelay: '0.4s' }}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Login Card */}
          <Card className="bg-white shadow-2xl animate-slide-in-left hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-8">
              {/* Tawtheeq Logo */}
              <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src="/images/tawtheeq.png"
                  alt="Tawtheeq Logo"
                  className="h-12 object-contain hover:scale-105 transition-transform"
                />
              </div>

              <h2 className="text-2xl font-bold text-right mb-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>تسجيل الدخول</h2>
              <p className="text-right text-gray-600 mb-1 animate-fade-in" style={{ animationDelay: '0.5s' }}>ليس لديك حساب؟ <a href="#" className="text-[#345D9B] hover:underline transition-all">إنشاء حساب</a></p>
              <p className="text-right text-sm text-gray-500 mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>أو سجل الدخول باستخدام</p>

              <form className="space-y-4">
                <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  <label className="block text-right text-sm font-medium text-gray-700 mb-2">
                    اسم المستخدم
                  </label>
                  <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-right transition-all focus:scale-[1.02]"
                    placeholder="أدخل اسم المستخدم"
                  />
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <label className="block text-right text-sm font-medium text-gray-700 mb-2">
                    كلمة المرور
                  </label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-right transition-all focus:scale-[1.02]"
                    placeholder="أدخل كلمة المرور أو رقم الهوية"
                  />
                  <a href="#" className="block text-right text-sm text-[#345D9B] hover:underline mt-2 transition-all">
                    نسيت كلمة المرور؟
                  </a>
                </div>

                <Button className="w-full bg-[#345D9B] hover:bg-[#1D4381] text-white h-12 text-lg transition-all hover:scale-[1.02] hover:shadow-xl animate-fade-in" style={{ animationDelay: '0.9s' }}>
                  تسجيل الدخول
                </Button>

                <div className="text-center text-sm text-gray-600 animate-fade-in" style={{ animationDelay: '1s' }}>
                  أو
                </div>

                <Button variant="outline" className="w-full h-12 text-[#345D9B] border-[#345D9B] hover:bg-[#345D9B]/10 transition-all hover:scale-[1.02] animate-fade-in" style={{ animationDelay: '1.1s' }}>
                  تسجيل الدخول بالبطاقة الذكية
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* MOCI Logo Card */}
          <div className="bg-[#345D9B]/30 backdrop-blur-sm rounded-lg p-12 flex flex-col items-center justify-center text-white animate-slide-in-right hover:bg-[#345D9B]/40 transition-all duration-500 hover:scale-[1.02]">
            <div className="w-1/2 flex items-center justify-center mb-6 hover:scale-110 transition-all duration-500">
              {/* Unified Logo */}
              <img
                src="/images/unifiedlogo.png"
                alt="Unified System Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Services Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-8">
                <button className="text-[#345D9B] hover:underline flex items-center gap-2 transition-all hover:gap-3 hover:scale-105 animate-fade-in">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <span>العودة إلى الصفحة</span>
                </button>
                <h2 className="text-3xl font-bold text-gray-900 animate-fade-in">الخدمات</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {services.map((service, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <CardContent className="p-6 flex flex-col items-center gap-4 relative z-10">
                      <div className="bg-[#345D9B]/10 p-3 rounded-lg group-hover:bg-[#345D9B] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                        <service.icon className="h-5 w-5 text-[#345D9B] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div className="flex-1 text-center w-full">
                        <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-[#345D9B] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-500">{service.titleEn}</p>
                      </div>

                      {/* Hover Button */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-[#345D9B]/95 to-[#345D9B]/80 flex items-center justify-center transition-all duration-500 ${
                        hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}>
                        <Button className="bg-white text-[#345D9B] hover:bg-gray-100 font-bold text-sm px-5 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-3">
                          زيارة الخدمة
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center justify-center gap-2 mb-4 flex-row-reverse">
                  <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded transition-all hover:scale-110 hover:translate-x-1">←</button>
                  <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded transition-all hover:scale-110">3</button>
                  <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded transition-all hover:scale-110">2</button>
                  <button className="px-4 py-2 bg-[#345D9B] text-white rounded shadow-lg hover:shadow-xl transition-all hover:scale-110">1</button>
                  <button className="px-4 py-2 text-[#345D9B] hover:bg-gray-100 rounded transition-all hover:scale-110 hover:-translate-x-1">→</button>
                </div>
                <p className="text-sm text-gray-600">عرض 1 إلى 12 من 36 نتيجة</p>
              </div>
            </div>

            {/* Side Menu - On the right */}
            <div className="lg:w-80 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-white shadow-lg sticky top-4 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isFirst = index === 0 || menuItems[index - 1]?.section !== item.section;

                    return (
                      <div key={item.id} className="animate-fade-in" style={{ animationDelay: `${0.4 + index * 0.05}s` }}>
                        {isFirst && (
                          <div className="text-gray-400 text-sm mb-3 mt-4 first:mt-0 text-right">
                            {item.section}
                          </div>
                        )}
                        <button
                          onClick={() => setSelectedMenu(item.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg text-right transition-all duration-300 hover:scale-[1.02] ${
                            selectedMenu === item.id
                              ? 'bg-[#345D9B]/10 text-[#345D9B] border-r-4 border-[#345D9B] shadow-md'
                              : 'hover:bg-gray-100 text-gray-700 hover:shadow-sm'
                          }`}
                        >
                          <span className="font-medium flex-1 text-right">{item.title}</span>
                          <Icon className={`h-5 w-5 transition-transform duration-300 ${selectedMenu === item.id ? 'scale-110' : ''}`} />
                        </button>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#345D9B] text-white py-8 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            {/* Contact Info - On the left */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 text-white">
              {/* Contact Us */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="text-sm mb-2">تواصل معنا</div>
                <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all hover:scale-110">
                  <Phone className="h-4 w-4" />
                </div>
              </div>

              {/* Email */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="text-sm mb-2">البريد الإلكتروني</div>
                <a
                  href="mailto:info@moci.gov.qa"
                  className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all hover:scale-110"
                >
                  <span className="text-sm">info@moci.gov.qa</span>
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              {/* Phone */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="text-sm mb-2">الهاتف</div>
                <a
                  href="tel:16001"
                  className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all hover:scale-110"
                >
                  <span className="text-sm">16001</span>
                  <Phone className="h-4 w-4" />
                </a>
              </div>

              {/* WhatsApp */}
              <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="text-sm mb-2">واتساب</div>
                <a
                  href="https://wa.me/97466111400"
                  className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition-all hover:scale-110"
                >
                  <span className="text-sm">+974 6611 1400</span>
                  <MessageSquare className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Logo - On the right */}
            <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <img
                src="/images/logo-main-white.svg"
                alt="MOCI Logo"
                className="h-16 object-contain hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-12 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110 hover:rotate-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <div className="flex gap-6">
              <a href="#" className="hover:underline transition-all hover:scale-105">المساعدة</a>
              <a href="#" className="hover:underline transition-all hover:scale-105">سياسة الخصوصية</a>
            </div>
            <div className="text-center">
              جميع الحقوق محفوظة © 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UnifiedSystem;

