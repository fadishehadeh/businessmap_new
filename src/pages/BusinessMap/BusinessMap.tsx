import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Building2, FileText, BarChart3 } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import PageHero from '@/components/ui/PageHero';
import MultiSelectDropdown from './MultiSelectDropdown';
import QatarMap from './QatarMap';

const BusinessMap = () => {
  const [activeMode, setActiveMode] = useState<'activities' | 'establishments'>('activities');
  const [searchMode, setSearchMode] = useState<'registry' | 'name' | 'license'>('registry');
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [selectedISIC, setSelectedISIC] = useState<string[]>([]);
  const [selectedClassification, setSelectedClassification] = useState('');
  const [activityCode, setActivityCode] = useState('');
  const [searchInput, setSearchInput] = useState('');

  // KPI Data
  const kpiData = [
    { label: 'إجمالي عدد المنشآت التجارية', value: '212,390', icon: Building2 },
    { label: 'الرخص / المنشآت النشطة', value: '107,279', icon: FileText },
    { label: 'المنشآت المهنية الحديثة', value: '13,000', icon: BarChart3 },
    { label: 'المنشآت الحديثة', value: '0', icon: MapPin },
  ];

  // Chart Data
  const municipalityData = [
    { name: 'الدوحة', value: 85000 },
    { name: 'الريان', value: 45000 },
    { name: 'الوكرة', value: 28000 },
    { name: 'أم صلال', value: 18000 },
    { name: 'الخور', value: 15000 },
    { name: 'الشمال', value: 8000 },
    { name: 'الدعين', value: 7000 },
    { name: 'الشحانية', value: 6390 },
  ];

  const durationData = [
    { name: '0-5 سنوات', value: 45000 },
    { name: '5-10 سنوات', value: 35000 },
    { name: '10-15 سنوات', value: 25000 },
    { name: '15-20 سنوات', value: 15000 },
    { name: '20+ سنوات', value: 10000 },
  ];

  const expiredRegistersData = [
    { name: '2020', value: 3200 },
    { name: '2021', value: 2800 },
    { name: '2022', value: 3500 },
    { name: '2023', value: 4100 },
    { name: '2024', value: 3900 },
  ];

  const newRegistersData = [
    { name: '2020', value: 15000 },
    { name: '2021', value: 18000 },
    { name: '2022', value: 22000 },
    { name: '2023', value: 25000 },
    { name: '2024', value: 28000 },
  ];

  // Sample activities data
  const activitiesData = [
    { code: '001', name: 'استوديو تصوير', group: 'استوديوهات التصوير' },
    { code: '002', name: 'التصوير الفني', group: 'استوديوهات التصوير' },
    { code: '003', name: 'التصوير الفوتوغرافي', group: 'استوديوهات التصوير' },
    { code: '004', name: 'تحميض وطبع الأفلام الفوتوغرافية', group: 'استوديوهات التصوير' },
    { code: '005', name: 'تصوير الحفلات والمناسبات الشخصية', group: 'استوديوهات التصوير' },
    { code: '006', name: 'إصلاح الأثاث المنزلي', group: 'اعمال الديكور' },
    { code: '007', name: 'إعداد الديكورات الخاصة بالمعارض والمؤتمرات', group: 'اعمال الديكور' },
  ];

  // Sample establishments data
  const establishmentsData = [
    {
      name: 'شركة قطر للتجارة المحدودة',
      legalForm: 'شركة ذات مسؤولية محدودة',
      registryNumber: 'CR-2024-001234',
      registryExpiry: '2026-12-31',
      registryStatus: 'نشط',
      licenseNumber: 'LIC-2024-5678',
      licenseExpiry: '2025-12-31',
      licenseStatus: 'نشط',
      classification: 'Medium',
      classificationDate: '2024-01-15',
    },
    {
      name: 'مؤسسة الخليج للاستثمار',
      legalForm: 'مؤسسة فردية',
      registryNumber: 'CR-2023-009876',
      registryExpiry: '2025-06-30',
      registryStatus: 'نشط',
      licenseNumber: 'LIC-2023-4321',
      licenseExpiry: '2024-06-30',
      licenseStatus: 'مشطوب',
      classification: 'Small',
      classificationDate: '2023-03-20',
    },
  ];

  // Sample licensed activities data
  const licensedActivitiesData = [
    {
      activity: 'استيراد وتصدير المواد الغذائية',
      legalForm: 'شركة ذات مسؤولية محدودة',
      licenseNumber: 'LIC-2024-1111',
      issueDate: '2024-01-01',
      expiryDate: '2025-01-01',
      status: 'نشط',
      notes: '-',
    },
  ];

  return (
    <Layout>
      <PageHero
        backgroundImage="/images/image1.jpg"
        title="خريطة الأعمال لدولة قطر"
        subtitle="Qatar Business Map – Commercial Activities & Establishments Portal"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      <div className="bg-gray-50 dark:bg-gray-900 py-12">
        <div className="container-wide">
          {/* Mode Selection Buttons */}
          <div className="flex gap-4 mb-8 justify-center" dir="rtl">
            <Button
              onClick={() => setActiveMode('activities')}
              className={`px-8 py-6 text-lg font-semibold ${
                activeMode === 'activities'
                  ? 'bg-qatari hover:bg-qatari-dark text-white'
                  : 'bg-white text-qatari border-2 border-qatari hover:bg-qatari/10'
              }`}
            >
              <Search className="ml-2 h-5 w-5" />
              بحث عن الأنشطة التجارية
            </Button>
            <Button
              onClick={() => setActiveMode('establishments')}
              className={`px-8 py-6 text-lg font-semibold ${
                activeMode === 'establishments'
                  ? 'bg-qatari hover:bg-qatari-dark text-white'
                  : 'bg-white text-qatari border-2 border-qatari hover:bg-qatari/10'
              }`}
            >
              <Building2 className="ml-2 h-5 w-5" />
              بحث عن المنشآت التجارية
            </Button>
          </div>

          {/* MODE 1: Search Commercial Activities */}
          {activeMode === 'activities' && (
            <div className="space-y-8">
              {/* Filters Section */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">فلاتر البحث</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" dir="rtl">
                    {/* Activity Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2">اسم النشاط التجاري</label>
                      <MultiSelectDropdown
                        options={['استوديو تصوير', 'التصوير الفني', 'التصوير الفوتوغرافي', 'إصلاح الأثاث المنزلي']}
                        selected={selectedActivities}
                        onChange={setSelectedActivities}
                        placeholder="اختر الأنشطة"
                      />
                    </div>

                    {/* Activity Code */}
                    <div>
                      <label className="block text-sm font-medium mb-2">كود النشاط التجاري</label>
                      <div className="flex gap-2">
                        <Input
                          type="text"
                          value={activityCode}
                          onChange={(e) => setActivityCode(e.target.value)}
                          placeholder="أدخل الكود"
                          className="flex-1"
                        />
                        <Button className="bg-qatari hover:bg-qatari-dark text-white">
                          Activate
                        </Button>
                      </div>
                    </div>

                    {/* Activity Groups */}
                    <div>
                      <label className="block text-sm font-medium mb-2">مجموعة الأنشطة التجارية</label>
                      <MultiSelectDropdown
                        options={[
                          'استوديوهات التصوير',
                          'اعمال الديكور',
                          'اعمال التجارة',
                          'الإدارة والاستشارات والدراسات بكافة أنواعها',
                          'الاستثمار التجاري',
                          'الاستثمار في الصناعة',
                        ]}
                        selected={selectedGroups}
                        onChange={setSelectedGroups}
                        placeholder="اختر المجموعات"
                      />
                    </div>

                    {/* ISIC */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        التصنيف الصناعي الدولي الموحد (ISIC)
                      </label>
                      <MultiSelectDropdown
                        options={['ISIC Rev.4 - Section A', 'ISIC Rev.4 - Section B', 'ISIC Rev.4 - Section C']}
                        selected={selectedISIC}
                        onChange={setSelectedISIC}
                        placeholder="اختر التصنيف"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results Table */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">نتيجة البحث عن الأنشطة التجارية</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full" dir="rtl">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 border-b">
                          <th className="text-right py-4 px-6 font-semibold">كود النشاط التجاري</th>
                          <th className="text-right py-4 px-6 font-semibold">الأنشطة</th>
                          <th className="text-right py-4 px-6 font-semibold">مجموعات</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activitiesData.map((activity, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="py-4 px-6">{activity.code}</td>
                            <td className="py-4 px-6">{activity.name}</td>
                            <td className="py-4 px-6">{activity.group}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* MODE 2: Search Commercial Establishments */}
          {activeMode === 'establishments' && (
            <div className="space-y-8">
              {/* Search Mode Selection */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">طريقة البحث</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6" dir="rtl">
                    {/* Radio Buttons */}
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="searchMode"
                          value="registry"
                          checked={searchMode === 'registry'}
                          onChange={(e) => setSearchMode(e.target.value as any)}
                          className="w-4 h-4 text-qatari"
                        />
                        <span className="font-medium">رقم السجل التجاري</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="searchMode"
                          value="name"
                          checked={searchMode === 'name'}
                          onChange={(e) => setSearchMode(e.target.value as any)}
                          className="w-4 h-4 text-qatari"
                        />
                        <span className="font-medium">اسم المنشأة</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="searchMode"
                          value="license"
                          checked={searchMode === 'license'}
                          onChange={(e) => setSearchMode(e.target.value as any)}
                          className="w-4 h-4 text-qatari"
                        />
                        <span className="font-medium">رقم الرخصة التجارية</span>
                      </label>
                    </div>

                    {/* Search Input */}
                    <div>
                      <Input
                        type="text"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder={
                          searchMode === 'registry'
                            ? 'أدخل رقم السجل التجاري'
                            : searchMode === 'name'
                            ? 'أدخل اسم المنشأة'
                            : 'أدخل رقم الرخصة التجارية'
                        }
                        className="text-right"
                      />
                    </div>

                    {/* Dropdown Filters */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Commercial Activities */}
                      <div>
                        <label className="block text-sm font-medium mb-2">الأنشطة التجارية</label>
                        <MultiSelectDropdown
                          options={['استوديو تصوير', 'التصوير الفني', 'إصلاح الأثاث المنزلي']}
                          selected={selectedActivities}
                          onChange={setSelectedActivities}
                          placeholder="اختر الأنشطة"
                        />
                      </div>

                      {/* Classification */}
                      <div>
                        <label className="block text-sm font-medium mb-2">التصنيف</label>
                        <Select value={selectedClassification} onValueChange={setSelectedClassification}>
                          <SelectTrigger>
                            <SelectValue placeholder="اختر التصنيف" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">الكل</SelectItem>
                            <SelectItem value="micro">Micro</SelectItem>
                            <SelectItem value="small">Small</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="large">Large</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Activity Groups */}
                      <div>
                        <label className="block text-sm font-medium mb-2">مجموعات الأنشطة</label>
                        <MultiSelectDropdown
                          options={['استوديوهات التصوير', 'اعمال الديكور', 'اعمال التجارة']}
                          selected={selectedGroups}
                          onChange={setSelectedGroups}
                          placeholder="اختر المجموعات"
                        />
                      </div>

                      {/* ISIC */}
                      <div>
                        <label className="block text-sm font-medium mb-2">ISIC</label>
                        <MultiSelectDropdown
                          options={['ISIC Rev.4 - Section A', 'ISIC Rev.4 - Section B']}
                          selected={selectedISIC}
                          onChange={setSelectedISIC}
                          placeholder="اختر التصنيف"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* KPI Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {kpiData.map((kpi, index) => {
                  const IconComponent = kpi.icon;
                  return (
                    <Card key={index} className="border-2 border-qatari/20 hover:border-qatari transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-full bg-qatari/10 flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-qatari" />
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-qatari mb-2">{kpi.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400" dir="rtl">
                          {kpi.label}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Qatar Map */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">التوزيع الجغرافي للمنشآت</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <QatarMap />
                </CardContent>
              </Card>

              {/* Analytics & Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Licenses by Municipality */}
                <Card>
                  <CardHeader className="bg-qatari text-white">
                    <CardTitle className="text-lg" dir="rtl">عدد التراخيص التجارية حسب البلدية</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={municipalityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8b0d32" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* License Duration Distribution */}
                <Card>
                  <CardHeader className="bg-qatari text-white">
                    <CardTitle className="text-lg" dir="rtl">التراخيص التجارية حسب بداية ونهاية الرخص</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={durationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8b0d32" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Expired Registers */}
                <Card>
                  <CardHeader className="bg-qatari text-white">
                    <CardTitle className="text-lg" dir="rtl">عدد السجلات التجارية المنتهية خلال آخر 5 سنوات</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={expiredRegistersData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8b0d32" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* New Registers */}
                <Card>
                  <CardHeader className="bg-qatari text-white">
                    <CardTitle className="text-lg" dir="rtl">عدد السجلات التجارية الجديدة خلال آخر 5 سنوات</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={newRegistersData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis orientation="right" />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8b0d32" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              {/* Latest Registered Commercial Establishments Table */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">أحدث المنشآت التجارية المسجلة</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm" dir="rtl">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 border-b">
                          <th className="text-right py-3 px-4 font-semibold">اسم المنشأة التجارية</th>
                          <th className="text-right py-3 px-4 font-semibold">الشكل القانوني</th>
                          <th className="text-right py-3 px-4 font-semibold">رقم السجل التجاري</th>
                          <th className="text-right py-3 px-4 font-semibold">تاريخ انتهاء السجل التجاري</th>
                          <th className="text-right py-3 px-4 font-semibold">حالة السجل التجاري</th>
                          <th className="text-right py-3 px-4 font-semibold">رقم الرخصة التجارية</th>
                          <th className="text-right py-3 px-4 font-semibold">تاريخ انتهاء الرخصة التجارية</th>
                          <th className="text-right py-3 px-4 font-semibold">حالة الرخصة التجارية</th>
                          <th className="text-right py-3 px-4 font-semibold">التصنيف</th>
                          <th className="text-right py-3 px-4 font-semibold">تاريخ التصنيف</th>
                        </tr>
                      </thead>
                      <tbody>
                        {establishmentsData.map((est, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="py-3 px-4">{est.name}</td>
                            <td className="py-3 px-4">{est.legalForm}</td>
                            <td className="py-3 px-4">{est.registryNumber}</td>
                            <td className="py-3 px-4">{est.registryExpiry}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  est.registryStatus === 'نشط'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {est.registryStatus}
                              </span>
                            </td>
                            <td className="py-3 px-4">{est.licenseNumber}</td>
                            <td className="py-3 px-4">{est.licenseExpiry}</td>
                            <td className="py-3 px-4">
                              <span
                                className={`px-2 py-1 rounded text-xs ${
                                  est.licenseStatus === 'نشط'
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-red-100 text-red-800'
                                }`}
                              >
                                {est.licenseStatus}
                              </span>
                            </td>
                            <td className="py-3 px-4">{est.classification}</td>
                            <td className="py-3 px-4">{est.classificationDate}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Latest Licensed Commercial Activities Table */}
              <Card>
                <CardHeader className="bg-qatari text-white">
                  <CardTitle className="text-xl" dir="rtl">أحدث الأنشطة التجارية المرخصة</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm" dir="rtl">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800 border-b">
                          <th className="text-right py-3 px-4 font-semibold">النشاط التجاري</th>
                          <th className="text-right py-3 px-4 font-semibold">الشكل القانوني</th>
                          <th className="text-right py-3 px-4 font-semibold">رقم الرخصة</th>
                          <th className="text-right py-3 px-4 font-semibold">تاريخ إصدار الرخصة</th>
                          <th className="text-right py-3 px-4 font-semibold">تاريخ انتهاء الرخصة</th>
                          <th className="text-right py-3 px-4 font-semibold">حالة الرخصة</th>
                          <th className="text-right py-3 px-4 font-semibold">ملاحظات قانونية</th>
                        </tr>
                      </thead>
                      <tbody>
                        {licensedActivitiesData.map((activity, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="py-3 px-4">{activity.activity}</td>
                            <td className="py-3 px-4">{activity.legalForm}</td>
                            <td className="py-3 px-4">{activity.licenseNumber}</td>
                            <td className="py-3 px-4">{activity.issueDate}</td>
                            <td className="py-3 px-4">{activity.expiryDate}</td>
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-800">
                                {activity.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">{activity.notes}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BusinessMap;

