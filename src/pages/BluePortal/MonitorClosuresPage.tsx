import React, { useState } from 'react';
import BluePortalLayout from '@/components/Layout/BluePortalLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Info } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const MonitorClosuresPage = () => {
  const { t, dir } = useLanguage();
  const [selectedMunicipality, setSelectedMunicipality] = useState('all');

  const municipalities = [
    { id: 'all', name: 'Select Municipality' },
    { id: 'doha', name: 'Doha' },
    { id: 'al-rayyan', name: 'Al Rayyan' },
    { id: 'al-wakrah', name: 'Al Wakrah' },
    { id: 'umm-salal', name: 'Umm Salal' },
  ];

  return (
    <BluePortalLayout showFooter={false}>
      <div className="fixed inset-0 top-[317px]" dir={dir}>
        {/* Sidebar - Left in English, Right in Arabic */}
        <aside className={`fixed top-[317px] bottom-0 w-96 bg-white overflow-y-auto shadow-lg border-gray-200 ${dir === 'rtl' ? 'right-0 border-l' : 'left-0 border-r'}`}>
          <div className="p-6 space-y-6">
            {/* Title */}
            <div className="border-b border-gray-200 pb-4">
              <h2 className="text-2xl font-bold text-[#19407F]">
                {t('monitor.title')}
              </h2>
            </div>

            {/* Municipality Selector */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">
                {t('businessTypes.selectMunicipality')}
              </label>
              <Select value={selectedMunicipality} onValueChange={setSelectedMunicipality}>
                <SelectTrigger className="w-full bg-white border-gray-300 text-gray-900">
                  <SelectValue placeholder={t('businessTypes.selectMunicipality')} />
                </SelectTrigger>
                <SelectContent>
                  {municipalities.map(m => (
                    <SelectItem key={m.id} value={m.id}>{m.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Date Range From */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">{t('monitor.from')}</label>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#19407F]">
                  {t('monitor.last1Month')}
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#19407F]">
                  {t('monitor.last6Months')}
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#19407F]">
                  {t('monitor.last1Year')}
                </Button>
                <Button variant="outline" size="sm" className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#19407F]">
                  {t('monitor.last5Years')}
                </Button>
              </div>
            </div>

            {/* Date Range To */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">{t('monitor.to')}</label>
              <input
                type="date"
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-900"
                defaultValue="2026-02-11"
              />
            </div>

            {/* Categories */}
            <div className="space-y-2">
              <Button className="w-full bg-[#19407F] hover:bg-[#2557A7] text-white justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                {t('monitor.categories')}
              </Button>
            </div>

            {/* Population Info */}
            <Card className="bg-gradient-to-br from-[#19407F]/5 to-[#FDC300]/5 border-[#19407F]/20">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-600">{t('monitor.population')}</p>
                    <p className="text-2xl font-bold text-[#19407F] mt-1">2.85M</p>
                    <p className="text-xs text-gray-500 mt-1">{t('monitor.person')}</p>
                  </div>
                  <Info className="w-5 h-5 text-[#19407F]" />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>{t('monitor.males')}: 2.03M</span>
                    <span>71.5%</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>{t('monitor.females')}: 0.81M</span>
                    <span>28.5%</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 bg-white border-[#19407F] text-[#19407F] hover:bg-[#19407F] hover:text-white"
                >
                  {t('monitor.more')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Map Area - Google Maps Embed */}
        <main className={`absolute top-0 bottom-0 bg-gradient-to-br from-blue-50 via-white to-blue-50 ${dir === 'rtl' ? 'right-96 left-0' : 'left-96 right-0'}`}>
          {/* Google Maps Embed */}
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462118.3261839952!2d51.18390000000001!3d25.3548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534ffdce87f%3A0x1cfa88cf812b4032!2sDoha%2C%20Qatar!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Qatar Business Closures Map"
            />
          </div>
        </main>
      </div>
    </BluePortalLayout>
  );
};

export default MonitorClosuresPage;
