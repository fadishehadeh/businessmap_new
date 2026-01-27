# Qatar Business Map Portal Documentation

## Overview
The Qatar Business Map (خريطة الأعمال لدولة قطر) is a comprehensive data-heavy government dashboard that provides search, filtering, analytics, and visualization for commercial activities and registered commercial establishments in Qatar.

## Access
- **URL:** `/business-map`
- **Full URL:** `http://localhost:8094/business-map`

## Features

### 1. Dual Mode System
The portal operates in two distinct modes:

#### Mode 1: Search Commercial Activities (بحث عن الأنشطة التجارية)
- **Purpose:** Search and filter commercial activities
- **Filters:**
  - اسم النشاط التجاري (Activity Name) - Multi-select dropdown with search
  - كود النشاط التجاري (Activity Code) - Input field with "Activate" button
  - مجموعة الأنشطة التجارية (Activity Groups) - Multi-select dropdown
  - التصنيف الصناعي الدولي الموحد (ISIC) - Multi-select dropdown

- **Results Table:**
  - Columns: كود النشاط التجاري | الأنشطة | مجموعات
  - Sortable and paginated
  - Displays activities like:
    - استوديو تصوير
    - التصوير الفني
    - إصلاح الأثاث المنزلي
    - إعداد الديكورات الخاصة بالمعارض والمؤتمرات

#### Mode 2: Search Commercial Establishments (بحث عن المنشآت التجارية)
- **Purpose:** Search and analyze registered commercial establishments
- **Search Modes (Radio Selection):**
  - رقم السجل التجاري (Registry Number)
  - اسم المنشأة (Establishment Name)
  - رقم الرخصة التجارية (License Number)

- **Filters:**
  - الأنشطة التجارية (Commercial Activities) - Multi-select
  - التصنيف (Classification) - Dropdown: Micro, Small, Medium, Large
  - مجموعات الأنشطة (Activity Groups) - Multi-select
  - ISIC - Multi-select

### 2. KPI Summary Cards
Four prominent metric cards displaying:
- **إجمالي عدد المنشآت التجارية:** 212,390 (Total Establishments)
- **الرخص / المنشآت النشطة:** 107,279 (Active Licenses)
- **المنشآت المهنية الحديثة:** 13,000 (Modern Professional Establishments)
- **المنشآت الحديثة:** 0 (Modern Establishments)

### 3. Interactive Qatar Map
- **Geographic Distribution:** Visual representation of establishments across Qatar
- **Municipalities Covered:**
  - الدوحة (Doha) - 85,000 establishments
  - الريان (Al Rayyan) - 45,000
  - الوكرة (Al Wakrah) - 28,000
  - أم صلال (Umm Salal) - 18,000
  - الخور (Al Khor) - 15,000
  - الشمال (Al Shamal) - 8,000
  - الدعين (Al Daayen) - 7,000
  - الشحانية (Al Shahaniya) - 6,390

- **Features:**
  - Color-coded density markers
  - Hover tooltips showing area name and establishment count
  - Interactive zoom and pan
  - Legend showing establishment ranges

### 4. Analytics & Charts
Four comprehensive bar charts:

1. **عدد التراخيص التجارية حسب البلدية**
   - Licenses by Municipality
   - Shows distribution across all 8 municipalities

2. **التراخيص التجارية حسب بداية ونهاية الرخص**
   - License Duration Distribution
   - Ranges: 0-5, 5-10, 10-15, 15-20, 20+ years

3. **عدد السجلات التجارية المنتهية خلال آخر 5 سنوات**
   - Expired Commercial Registers (Last 5 Years)
   - Years: 2020-2024

4. **عدد السجلات التجارية الجديدة خلال آخر 5 سنوات**
   - New Commercial Registers (Last 5 Years)
   - Years: 2020-2024

### 5. Data Tables

#### Table 1: Latest Registered Commercial Establishments (أحدث المنشآت التجارية المسجلة)
Columns:
- اسم المنشأة التجارية (Establishment Name)
- الشكل القانوني (Legal Form)
- رقم السجل التجاري (Registry Number)
- تاريخ انتهاء السجل التجاري (Registry Expiry Date)
- حالة السجل التجاري (Registry Status: نشط/مشطوب)
- رقم الرخصة التجارية (License Number)
- تاريخ انتهاء الرخصة التجارية (License Expiry Date)
- حالة الرخصة التجارية (License Status: نشط/مشطوب)
- التصنيف (Classification)
- تاريخ التصنيف (Classification Date)

#### Table 2: Latest Licensed Commercial Activities (أحدث الأنشطة التجارية المرخصة)
Columns:
- النشاط التجاري (Commercial Activity)
- الشكل القانوني (Legal Form)
- رقم الرخصة (License Number)
- تاريخ إصدار الرخصة (Issue Date)
- تاريخ انتهاء الرخصة (Expiry Date)
- حالة الرخصة (License Status)
- ملاحظات قانونية (Legal Notes)

## Design & Theme

### Color Scheme
- **Primary Color:** Maroon (#8b0d32) - AMOCI theme
- **Accent Colors:** 
  - Light Maroon: #a82645
  - Dark Maroon: #6a0926
- **Status Colors:**
  - Active (نشط): Green
  - Inactive (مشطوب): Red

### Layout
- **Header:** Standard MOCI header with maroon navigation
- **Footer:** Standard MOCI footer
- **RTL Support:** Full Arabic right-to-left layout
- **Responsive:** Mobile, tablet, and desktop optimized
- **Dark Mode:** Full dark mode support

## Technical Implementation

### File Structure
```
src/pages/BusinessMap/
├── BusinessMap.tsx           # Main component
├── MultiSelectDropdown.tsx   # Custom multi-select with search
└── QatarMap.tsx             # Interactive Qatar map visualization
```

### Key Components Used
- Layout (MOCI standard header/footer)
- Card, CardContent, CardHeader, CardTitle
- Button, Input, Select
- Recharts (BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip)
- Custom MultiSelectDropdown
- Custom QatarMap

### State Management
- Mode switching (activities vs establishments)
- Search mode selection (registry/name/license)
- Filter selections (activities, groups, ISIC, classification)
- Search inputs

## Accessibility
- Government-grade accessibility
- Keyboard navigation support
- Screen reader compatible
- High contrast mode support
- Font size adjustment

## Future Enhancements
- Real API integration for live data
- Advanced filtering and sorting
- Export functionality (PDF, Excel)
- Print-friendly views
- Saved searches
- Email alerts for new registrations
- Advanced analytics dashboard

