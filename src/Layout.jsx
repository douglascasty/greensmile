import React, { useEffect, useState } from 'react';
import { apiClient as base44, defaultClinicSettings } from '@/api/apiClient';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default function Layout({ children, currentPageName }) {
  const [settings, setSettings] = useState(defaultClinicSettings);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await base44.entities.ClinicSettings.list();
        if (data && data.length > 0) {
          setSettings(data[0]);
        }
      } catch (e) {
        console.warn('Using default clinic settings', e);
      }
    };
    loadSettings();
  }, []);

  // Pages that shouldn't show header/footer
  const isAdminPage = currentPageName?.startsWith('Admin');

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Inter', sans-serif;
        }
        
        body {
          font-family: var(--font-sans);
        }
        
        .font-serif {
          font-family: var(--font-serif);
        }
      `}</style>

      {!isAdminPage && <Header settings={settings} />}
      
      <main className={!isAdminPage ? 'pt-0' : ''}>
        {React.Children.map(children, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { settings });
          }
          return child;
        })}
      </main>

      {!isAdminPage && <Footer settings={settings} />}
      {!isAdminPage && <WhatsAppButton whatsapp={settings?.whatsapp || '5511970604418'} />}
    </div>
  );
}