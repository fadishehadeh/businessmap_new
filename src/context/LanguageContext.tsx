import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'header.signIn': 'Sign In',
    'header.arabic': 'Arabic',
    'header.english': 'English',
    'header.search': 'Search...',
    'header.home': 'Home',
    'header.interactiveMap': 'Interactive Map',
    'header.businessTypes': 'Business Types',
    'header.monitorClosures': 'Monitor Closures',
    
    // Home Page
    'home.hero.title1': 'Your Gateway to',
    'home.hero.title2': 'Smart Investment',
    'home.hero.subtitle': 'Make smarter decisions about your project. Our interactive map, reports, and insights.',
    'home.hero.cta': 'Get Started →',
    'home.kpi.total': 'Total Establishment Count',
    'home.kpi.lastYear': 'Last Year Establishment Count',
    'home.kpi.last6Months': 'Last 6 Months',
    'home.kpi.last3Months': 'Last 3 Months',
    'home.services.title': 'Our Services',
    'home.services.subtitle': 'Explore our comprehensive business solutions',
    'home.reports.title': 'Our Reports',
    'home.reports.subtitle': 'Comprehensive business intelligence and analytics',
    
    // Services
    'service.exploreTypes.title': 'Explore Business Types',
    'service.exploreTypes.desc': 'All registered businesses by regions across the Agro, license status and categories.',
    'service.checkLocation.title': 'Check Location Readiness',
    'service.checkLocation.desc': 'Map shows location suitability for business. On hovering the map, users can view the location and accessibility.',
    'service.monitorClosures.title': 'Monitor Business Closures',
    'service.monitorClosures.desc': 'Track business closures by regions and date range with interactive map visualizations.',
    'service.discoverNew.title': 'Discover New Businesses',
    'service.discoverNew.desc': 'Find recently registered businesses by location, date range, and categories.',
    
    // Reports
    'report.overview.title': 'Business Overview',
    'report.overview.desc': 'High-level view of all business by business, by business type, by license status, by ownership, by municipalities.',
    'report.demographic.title': 'Demographic Reports',
    'report.demographic.desc': 'Demographic data of all businesses. The reports, by business type, by license status, by ownership, by municipalities.',
    'report.chartVisualization': 'Chart Visualization',
    
    // Interactive Map Page
    'interactive.title': 'how can we support you?',
    'interactive.subtitle': 'Choose a module to explore Qatar\'s business landscape',
    'interactive.comingSoon': 'Coming Soon',
    'interactive.strategicGap.title': 'Strategic Gap Analysis',
    'interactive.strategicGap.desc': 'Identify market opportunities and business gaps by analyzing spatial data and demographics.',
    'interactive.distribution.title': 'Business Distribution',
    'interactive.distribution.desc': 'View geographic distribution of businesses filtered by region, status, and time period.',
    'interactive.foreignInvestment.title': 'Attract Foreign Investment',
    'interactive.foreignInvestment.desc': 'Analyze foreign investments by region, country of origin, and establishment counts.',
    
    // Business Types Page
    'businessTypes.title': 'Explore Business Types',
    'businessTypes.showing': 'Showing',
    'businessTypes.establishments': 'establishments',
    'businessTypes.selectMunicipality': 'Select Municipality',
    'businessTypes.allMunicipalities': 'All Municipalities',
    'businessTypes.ownershipType': 'Ownership Type',
    'businessTypes.all': 'All',
    'businessTypes.international': 'International',
    'businessTypes.qatari': 'Qatari',
    'businessTypes.gcc': 'GCC',
    'businessTypes.licenseStatus': 'License Status',
    'businessTypes.active': 'Active',
    'businessTypes.inactive': 'Inactive',
    'businessTypes.suspended': 'Suspended',
    'businessTypes.expired': 'Expired',
    'businessTypes.categories': 'Business Categories',
    'businessTypes.selectAll': 'Select All',
    'businessTypes.clearAll': 'Clear All',
    'businessTypes.capitalRange': 'Capital Range (QAR)',
    'businessTypes.landmarks': 'Nearby Landmarks',
    'businessTypes.applyFilters': 'Apply Filters',
    'businessTypes.resetFilters': 'Reset All Filters',
    'businessTypes.filters': 'Filters',
    
    // Monitor Closures Page
    'monitor.title': 'Monitor Business Closures',
    'monitor.from': 'From',
    'monitor.to': 'To',
    'monitor.last1Month': 'Last 1 Month',
    'monitor.last6Months': 'Last 6 Months',
    'monitor.last1Year': 'Last 1 Year',
    'monitor.last5Years': 'Last 5 Years',
    'monitor.categories': 'Categories',
    'monitor.population': 'Population',
    'monitor.person': 'person',
    'monitor.males': 'Males',
    'monitor.females': 'Females',
    'monitor.more': 'More',
    
    // Footer
    'footer.about': 'About',
    'footer.ourStory': 'Our Story',
    'footer.missionVision': 'Mission & Vision',
    'footer.sectors': 'Sectors',
    'footer.healthcare': 'Healthcare',
    'footer.finance': 'Finance',
    'footer.education': 'Education',
    'footer.logistics': 'Logistics',
    'footer.insights': 'Insights',
    'footer.reports': 'Reports',
    'footer.discoverMore': 'Discover More',
    'footer.caseStudies': 'Case Studies',
    'footer.contactUs': 'Contact Us',
    'footer.terms': 'Terms & Conditions',
    'footer.copyright': '© 2025 MOCI Qatar. All rights reserved.',
  },
  ar: {
    // Header
    'header.signIn': 'تسجيل الدخول',
    'header.arabic': 'العربية',
    'header.english': 'الإنجليزية',
    'header.search': 'بحث...',
    'header.home': 'الرئيسية',
    'header.interactiveMap': 'الخريطة التفاعلية',
    'header.businessTypes': 'أنواع الأعمال',
    'header.monitorClosures': 'مراقبة الإغلاقات',
    
    // Home Page
    'home.hero.title1': 'فرصتك نحو',
    'home.hero.title2': 'الاستثمار الذكي',
    'home.hero.subtitle': 'اتخذ قرارات أكثر ذكاءً بشأن مشروعك. خريطتنا التفاعلية والتقارير والرؤى.',
    'home.hero.cta': 'ابدأ الآن ←',
    'home.kpi.total': 'إجمالي عدد المنشآت',
    'home.kpi.lastYear': 'عدد المنشآت العام الماضي',
    'home.kpi.last6Months': 'آخر 6 أشهر',
    'home.kpi.last3Months': 'آخر 3 أشهر',
    'home.services.title': 'خدماتنا',
    'home.services.subtitle': 'استكشف حلولنا التجارية الشاملة',
    'home.reports.title': 'تقاريرنا',
    'home.reports.subtitle': 'ذكاء الأعمال والتحليلات الشاملة',
    
    // Services
    'service.exploreTypes.title': 'استكشف أنواع الأعمال',
    'service.exploreTypes.desc': 'جميع الأعمال المسجلة حسب المناطق عبر الزراعة وحالة الترخيص والفئات.',
    'service.checkLocation.title': 'تحقق من جاهزية الموقع',
    'service.checkLocation.desc': 'تُظهر الخريطة مدى ملاءمة الموقع للأعمال. عند التمرير فوق الخريطة، يمكن للمستخدمين عرض الموقع وإمكانية الوصول.',
    'service.monitorClosures.title': 'مراقبة إغلاق الأعمال',
    'service.monitorClosures.desc': 'تتبع إغلاق الأعمال حسب المناطق والنطاق الزمني مع تصورات الخريطة التفاعلية.',
    'service.discoverNew.title': 'اكتشف الأعمال الجديدة',
    'service.discoverNew.desc': 'ابحث عن الأعمال المسجلة حديثًا حسب الموقع والنطاق الزمني والفئات.',
    
    // Reports
    'report.overview.title': 'نظرة عامة على الأعمال',
    'report.overview.desc': 'عرض عالي المستوى لجميع الأعمال حسب الأعمال، حسب نوع العمل، حسب حالة الترخيص، حسب الملكية، حسب البلديات.',
    'report.demographic.title': 'التقارير الديموغرافية',
    'report.demographic.desc': 'البيانات الديموغرافية لجميع الأعمال. التقارير، حسب نوع العمل، حسب حالة الترخيص، حسب الملكية، حسب البلديات.',
    'report.chartVisualization': 'تصور الرسم البياني',
    
    // Interactive Map Page
    'interactive.title': 'كيف يمكننا دعمك؟',
    'interactive.subtitle': 'اختر وحدة لاستكشاف مشهد الأعمال في قطر',
    'interactive.comingSoon': 'قريباً',
    'interactive.strategicGap.title': 'تحليل الفجوة الاستراتيجية',
    'interactive.strategicGap.desc': 'حدد فرص السوق وفجوات الأعمال من خلال تحليل البيانات المكانية والديموغرافية.',
    'interactive.distribution.title': 'توزيع الأعمال',
    'interactive.distribution.desc': 'عرض التوزيع الجغرافي للأعمال مصفاة حسب المنطقة والحالة والفترة الزمنية.',
    'interactive.foreignInvestment.title': 'جذب الاستثمار الأجنبي',
    'interactive.foreignInvestment.desc': 'تحليل الاستثمارات الأجنبية حسب المنطقة وبلد المنشأ وعدد المنشآت.',
    
    // Business Types Page
    'businessTypes.title': 'استكشف أنواع الأعمال',
    'businessTypes.showing': 'عرض',
    'businessTypes.establishments': 'منشأة',
    'businessTypes.selectMunicipality': 'اختر البلدية',
    'businessTypes.allMunicipalities': 'جميع البلديات',
    'businessTypes.ownershipType': 'نوع الملكية',
    'businessTypes.all': 'الكل',
    'businessTypes.international': 'دولي',
    'businessTypes.qatari': 'قطري',
    'businessTypes.gcc': 'خليجي',
    'businessTypes.licenseStatus': 'حالة الترخيص',
    'businessTypes.active': 'نشط',
    'businessTypes.inactive': 'غير نشط',
    'businessTypes.suspended': 'معلق',
    'businessTypes.expired': 'منتهي',
    'businessTypes.categories': 'فئات الأعمال',
    'businessTypes.selectAll': 'تحديد الكل',
    'businessTypes.clearAll': 'مسح الكل',
    'businessTypes.capitalRange': 'نطاق رأس المال (ريال قطري)',
    'businessTypes.landmarks': 'المعالم القريبة',
    'businessTypes.applyFilters': 'تطبيق الفلاتر',
    'businessTypes.resetFilters': 'إعادة تعيين جميع الفلاتر',
    'businessTypes.filters': 'الفلاتر',
    
    // Monitor Closures Page
    'monitor.title': 'مراقبة إغلاق الأعمال',
    'monitor.from': 'من',
    'monitor.to': 'إلى',
    'monitor.last1Month': 'آخر شهر',
    'monitor.last6Months': 'آخر 6 أشهر',
    'monitor.last1Year': 'آخر سنة',
    'monitor.last5Years': 'آخر 5 سنوات',
    'monitor.categories': 'الفئات',
    'monitor.population': 'السكان',
    'monitor.person': 'شخص',
    'monitor.males': 'ذكور',
    'monitor.females': 'إناث',
    'monitor.more': 'المزيد',
    
    // Footer
    'footer.about': 'حول',
    'footer.ourStory': 'قصتنا',
    'footer.missionVision': 'الرؤية والرسالة',
    'footer.sectors': 'القطاعات',
    'footer.healthcare': 'الرعاية الصحية',
    'footer.finance': 'المالية',
    'footer.education': 'التعليم',
    'footer.logistics': 'اللوجستيات',
    'footer.insights': 'الرؤى',
    'footer.reports': 'التقارير',
    'footer.discoverMore': 'اكتشف المزيد',
    'footer.caseStudies': 'دراسات الحالة',
    'footer.contactUs': 'اتصل بنا',
    'footer.terms': 'الشروط والأحكام',
    'footer.copyright': '© 2025 وزارة التجارة والصناعة قطر. جميع الحقوق محفوظة.',
  },
};

