// Mock data for the Business Map portal

export const municipalities = [
  { id: '1', name: 'Doha', nameAr: 'الدوحة' },
  { id: '2', name: 'Al Rayyan', nameAr: 'الريان' },
  { id: '3', name: 'Al Wakrah', nameAr: 'الوكرة' },
  { id: '4', name: 'Umm Salal', nameAr: 'أم صلال' },
  { id: '5', name: 'Al Khor', nameAr: 'الخور' },
  { id: '6', name: 'Al Shamal', nameAr: 'الشمال' },
  { id: '7', name: 'Al Daayen', nameAr: 'الدعين' },
  { id: '8', name: 'Al Shahaniya', nameAr: 'الشحانية' },
];

export const ownershipTypes = [
  { id: 'all', name: 'All', nameAr: 'الكل' },
  { id: 'international', name: 'International', nameAr: 'دولي' },
  { id: 'qatari', name: 'Qatari', nameAr: 'قطري' },
  { id: 'gcc', name: 'GCC', nameAr: 'خليجي' },
];

export const licenseStatuses = [
  { id: 'active', name: 'Active', nameAr: 'نشط' },
  { id: 'inactive', name: 'Inactive', nameAr: 'غير نشط' },
  { id: 'suspended', name: 'Suspended', nameAr: 'معلق' },
  { id: 'expired', name: 'Expired', nameAr: 'منتهي' },
];

export const businessCategories = [
  { id: '1', name: 'Retail Trade', nameAr: 'تجارة التجزئة', icon: '🛒' },
  { id: '2', name: 'Food Services', nameAr: 'خدمات الطعام', icon: '🍽️' },
  { id: '3', name: 'Construction', nameAr: 'البناء', icon: '🏗️' },
  { id: '4', name: 'Real Estate', nameAr: 'العقارات', icon: '🏢' },
  { id: '5', name: 'Professional Services', nameAr: 'الخدمات المهنية', icon: '💼' },
  { id: '6', name: 'Healthcare', nameAr: 'الرعاية الصحية', icon: '🏥' },
  { id: '7', name: 'Education', nameAr: 'التعليم', icon: '🎓' },
  { id: '8', name: 'Transportation', nameAr: 'النقل', icon: '🚗' },
  { id: '9', name: 'Manufacturing', nameAr: 'التصنيع', icon: '🏭' },
  { id: '10', name: 'Technology', nameAr: 'التكنولوجيا', icon: '💻' },
];

export const landmarks = [
  { id: '1', name: 'Souq Waqif', nameAr: 'سوق واقف', lat: 25.2867, lng: 51.5333 },
  { id: '2', name: 'The Pearl Qatar', nameAr: 'اللؤلؤة قطر', lat: 25.3714, lng: 51.5408 },
  { id: '3', name: 'Katara Cultural Village', nameAr: 'كتارا', lat: 25.3547, lng: 51.5311 },
  { id: '4', name: 'West Bay', nameAr: 'الخليج الغربي', lat: 25.3208, lng: 51.5311 },
  { id: '5', name: 'Education City', nameAr: 'المدينة التعليمية', lat: 25.3167, lng: 51.4333 },
  { id: '6', name: 'Hamad International Airport', nameAr: 'مطار حمد الدولي', lat: 25.2731, lng: 51.6081 },
  { id: '7', name: 'Aspire Zone', nameAr: 'منطقة أسباير', lat: 25.2619, lng: 51.4439 },
  { id: '8', name: 'Lusail City', nameAr: 'مدينة لوسيل', lat: 25.4333, lng: 51.5167 },
];

export const capitalRanges = [
  { min: 0, max: 100000, label: '0 - 100K QAR' },
  { min: 100000, max: 500000, label: '100K - 500K QAR' },
  { min: 500000, max: 1000000, label: '500K - 1M QAR' },
  { min: 1000000, max: 5000000, label: '1M - 5M QAR' },
  { min: 5000000, max: 10000000, label: '5M - 10M QAR' },
  { min: 10000000, max: 50000000, label: '10M - 50M QAR' },
  { min: 50000000, max: Infinity, label: '50M+ QAR' },
];

// Generate mock establishments with realistic data
export const generateMockEstablishments = (count: number = 1000) => {
  const establishments = [];
  
  for (let i = 0; i < count; i++) {
    const municipality = municipalities[Math.floor(Math.random() * municipalities.length)];
    const category = businessCategories[Math.floor(Math.random() * businessCategories.length)];
    const ownership = ownershipTypes[Math.floor(Math.random() * (ownershipTypes.length - 1)) + 1]; // Skip 'all'
    const status = licenseStatuses[Math.floor(Math.random() * licenseStatuses.length)];
    
    // Generate random coordinates within Qatar bounds
    const lat = 24.5 + Math.random() * 2; // Roughly 24.5 to 26.5
    const lng = 50.7 + Math.random() * 1.5; // Roughly 50.7 to 52.2
    
    // Generate random capital
    const capitalIndex = Math.floor(Math.random() * capitalRanges.length);
    const range = capitalRanges[capitalIndex];
    const capital = range.min + Math.random() * (range.max === Infinity ? 50000000 : range.max - range.min);
    
    establishments.push({
      id: `EST-${String(i + 1).padStart(6, '0')}`,
      name: `${category.name} Business ${i + 1}`,
      nameAr: `${category.nameAr} ${i + 1}`,
      municipality: municipality.id,
      category: category.id,
      ownership: ownership.id,
      status: status.id,
      lat,
      lng,
      capital: Math.floor(capital),
      registrationDate: new Date(2020 + Math.floor(Math.random() * 5), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString(),
      licenseNumber: `LIC-${String(i + 1).padStart(8, '0')}`,
      employees: Math.floor(Math.random() * 500) + 1,
    });
  }
  
  return establishments;
};

export const mockEstablishments = generateMockEstablishments(1254);

// KPI data
export const kpiData = [
  { 
    id: 'total', 
    label: 'Total Establishment Count', 
    labelAr: 'إجمالي عدد المنشآت',
    value: 0, 
    icon: 'building' 
  },
  { 
    id: 'lastYear', 
    label: 'Last Year Establishment Count', 
    labelAr: 'عدد المنشآت العام الماضي',
    value: 0, 
    icon: 'calendar' 
  },
  { 
    id: 'last6Months', 
    label: 'Last 6 Months', 
    labelAr: 'آخر 6 أشهر',
    value: 0, 
    icon: 'trending-up' 
  },
  { 
    id: 'last3Months', 
    label: 'Last 3 Months', 
    labelAr: 'آخر 3 أشهر',
    value: 0, 
    icon: 'activity' 
  },
];

