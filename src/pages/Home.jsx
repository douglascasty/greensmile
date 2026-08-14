import React, { useEffect, useState } from 'react';
import { 
  apiClient as base44, 
  defaultServices, 
  defaultBeforeAfterCases, 
  defaultTestimonials, 
  defaultFAQs 
} from '@/api/apiClient';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import StructureSection from '@/components/home/StructureSection';
import BeforeAfterSection from '@/components/home/BeforeAfterSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import QuizCTA from '@/components/home/QuizCTA';
import FAQSection from '@/components/home/FAQSection';
import LocationSection from '@/components/home/LocationSection';

export default function Home({ settings }) {
  const [services, setServices] = useState(defaultServices);
  const [cases, setCases] = useState(defaultBeforeAfterCases);
  const [testimonials, setTestimonials] = useState(defaultTestimonials);
  const [faqs, setFaqs] = useState(defaultFAQs);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [servicesData, casesData, testimonialsData, faqsData] = await Promise.all([
          base44.entities.Service.list('order', 10),
          base44.entities.BeforeAfterCase.list('order', 10),
          base44.entities.Testimonial.list('order', 10),
          base44.entities.FAQ.list('order', 20)
        ]);
        
        if (servicesData?.length) setServices(servicesData);
        if (casesData?.length) setCases(casesData);
        if (testimonialsData?.length) setTestimonials(testimonialsData);
        if (faqsData?.length) setFaqs(faqsData);
      } catch (e) {
        console.warn('Using default home data', e);
      }
    };
    loadData();
  }, []);

  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  const scrollToServices = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection settings={settings} onScheduleClick={scrollToServices} />
      <AboutSection settings={settings} />
      <ServicesSection services={services} whatsappLink={whatsappLink} />
      <StructureSection />
      <BeforeAfterSection cases={cases} />
      <TestimonialsSection testimonials={testimonials} />
      <QuizCTA />
      <FAQSection faqs={faqs} />
      <LocationSection settings={settings} />
    </div>
  );
}