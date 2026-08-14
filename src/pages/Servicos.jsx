import React, { useEffect, useState } from 'react';
import { apiClient as base44, defaultServices } from '@/api/apiClient';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, CircleDot, Smile, Sun, Stethoscope, Layers, Check, ArrowRight } from "lucide-react";

const iconMap = {
  Sparkles, CircleDot, Smile, Sun, Stethoscope, Layers
};

export default function Servicos({ settings }) {
  const [services, setServices] = useState(defaultServices);
  const [selectedService, setSelectedService] = useState(defaultServices[0]);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await base44.entities.Service.list('order', 20);
        if (data && data.length > 0) {
          setServices(data);
          setSelectedService(data[0]);
        }
      } catch (e) {
        console.warn('Using default services', e);
      }
    };
    loadServices();
  }, []);

  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de saber mais sobre ${selectedService?.name || 'os tratamentos'}.`;

  const SelectedIcon = selectedService?.icon && iconMap[selectedService.icon] ? iconMap[selectedService.icon] : Sparkles;

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B4332] mt-3 mb-4">
            Tratamentos especializados
          </h1>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            Conheça todos os procedimentos odontológicos realizados com excelência, tecnologia e cuidado individualizado.
          </p>
        </motion.div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services List */}
          <div className="space-y-3">
            {services.map((service, index) => {
              const IconComp = iconMap[service.icon] || Sparkles;
              const isSelected = selectedService?.name === service.name;
              return (
                <button
                  key={service.id || index}
                  onClick={() => setSelectedService(service)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                    isSelected 
                      ? 'bg-[#1B4332] text-white shadow-lg scale-[1.02]' 
                      : 'bg-white text-[#1B4332] hover:bg-white/80'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-[#2D6A4F]/10 text-[#2D6A4F]'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className={`text-sm line-clamp-1 ${isSelected ? 'text-white/70' : 'text-[#1B4332]/60'}`}>
                      {service.short_description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Details */}
          {selectedService && (
            <motion.div
              key={selectedService.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 lg:p-10 shadow-sm space-y-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#2D6A4F]/10 flex items-center justify-center shrink-0">
                  <SelectedIcon className="w-8 h-8 text-[#2D6A4F]" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl text-[#1B4332] mb-2">{selectedService.name}</h2>
                  <p className="text-[#1B4332]/70 text-lg leading-relaxed">{selectedService.long_description}</p>
                </div>
              </div>

              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div>
                  <h3 className="font-semibold text-[#1B4332] text-xl mb-4">Principais Benefícios:</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3 bg-[#F5F0E8] p-3.5 rounded-xl">
                        <Check className="w-5 h-5 text-[#2D6A4F] shrink-0" />
                        <span className="text-[#1B4332] font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.target_audience && (
                <div className="bg-[#1B4332]/5 p-5 rounded-2xl">
                  <h4 className="font-semibold text-[#1B4332] mb-1">Para quem é indicado:</h4>
                  <p className="text-[#1B4332]/80">{selectedService.target_audience}</p>
                </div>
              )}

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-8 py-6 text-base"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Agendar avaliação para {selectedService.name}
                  </a>
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}