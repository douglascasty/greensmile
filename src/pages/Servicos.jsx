import React, { useEffect, useState } from 'react';
import { apiClient as base44 } from '@/api/apiClient';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Sparkles, CircleDot, Smile, Sun, Stethoscope, Layers, Check, ArrowRight } from "lucide-react";

const iconMap = {
  Sparkles, CircleDot, Smile, Sun, Stethoscope, Layers
};

const defaultServices = [
  { 
    name: "Prótese Protocolo Com Implantes", 
    short_description: "Recupere todos os dentes fixos sobre implantes com máxima segurança e conforto.",
    long_description: "A Prótese Protocolo com Implantes é a solução definitiva para quem perdeu todos ou a maioria dos dentes. Fixada sobre implantes de titânio, devolve a mastigação firme, a estética natural e a confiança de um sorriso perfeito.",
    benefits: ["Fixação total e segurança", "Mastigação e fala 100% naturais", "Aparência de dentes naturais", "Resultado permanente"],
    average_duration: "3 a 6 meses",
    target_audience: "Pessoas que perderam grande parte ou todos os dentes e buscam uma prótese fixa definitiva.",
    icon: "Sparkles" 
  },
  { 
    name: "Implantes Dentários", 
    short_description: "Recupere dentes perdidos com implantes de última geração.",
    long_description: "Os implantes dentários são a solução mais moderna e duradoura para substituir dentes perdidos. Utilizamos tecnologia de ponta para garantir resultados naturais e funcionais.",
    benefits: ["Solução permanente", "Aparência natural", "Preserva o osso da mandíbula", "Permite mastigação normal"],
    average_duration: "3 a 6 meses",
    target_audience: "Pessoas que perderam um ou mais dentes e buscam uma solução definitiva.",
    icon: "CircleDot" 
  },
  { 
    name: "Lentes de Contato Dental", 
    short_description: "Transforme seu sorriso com facetas ultrafinas e naturais.",
    long_description: "As lentes de contato dental são facetas ultrafinas de porcelana que cobrem a parte frontal dos dentes, corrigindo cor, forma e tamanho para um sorriso harmonioso.",
    benefits: ["Resultado imediato", "Desgaste mínimo do dente", "Alta durabilidade", "Aparência muito natural"],
    average_duration: "2 a 3 sessões",
    target_audience: "Quem deseja melhorar a estética do sorriso de forma rápida e duradoura.",
    icon: "Smile" 
  },
  { 
    name: "Clareamento Dental", 
    short_description: "Dentes mais brancos de forma segura e duradoura.",
    long_description: "Oferecemos clareamento dental com laser e também kits para uso domiciliar, sempre com acompanhamento profissional para garantir resultados seguros e duradouros.",
    benefits: ["Resultado visível na primeira sessão", "Seguro para o esmalte", "Tratamento personalizado", "Duração de até 2 anos"],
    average_duration: "1 a 3 sessões",
    target_audience: "Pessoas com dentes amarelados ou manchados que desejam um sorriso mais branco.",
    icon: "Sun" 
  },
  { 
    name: "Ortodontia", 
    short_description: "Correção de mordida e alinhamento dentário para todas as idades.",
    long_description: "Tratamentos ortodônticos completos para correção de mordida, alinhamento dental e problemas de oclusão, utilizando técnicas modernas e aparelhos de última geração.",
    benefits: ["Melhora da mordida", "Alinhamento perfeito", "Opções estéticas disponíveis", "Planejamento digital"],
    average_duration: "18 a 36 meses",
    target_audience: "Crianças, adolescentes e adultos com problemas de alinhamento ou mordida.",
    icon: "Layers" 
  },
  { 
    name: "Reabilitação Oral", 
    short_description: "Tratamento completo para devolver função e estética ao seu sorriso.",
    long_description: "A reabilitação oral é um tratamento completo que combina diversas especialidades para restaurar a função mastigatória, estética e saúde bucal.",
    benefits: ["Tratamento personalizado", "Abordagem multidisciplinar", "Melhora da mastigação", "Recuperação da autoestima"],
    average_duration: "Varia conforme o caso",
    target_audience: "Pacientes com múltiplos problemas bucais que precisam de tratamento integrado.",
    icon: "Stethoscope" 
  }
];

export default function Servicos({ settings }) {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const loadServices = async () => {
      const data = await base44.entities.Service.list('order', 20);
      setServices(data.length > 0 ? data : defaultServices);
      setSelectedService(data.length > 0 ? data[0] : defaultServices[0]);
    };
    loadServices();
  }, []);

  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de saber mais sobre ${selectedService?.name}.`;

  return (
    <div className="pt-24 pb-20 bg-[#F5F0E8]">
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
            Conheça todos os nossos serviços e descubra como podemos transformar o seu sorriso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Service List */}
          <div className="lg:col-span-1 space-y-3">
            {(services.length > 0 ? services : defaultServices).map((service, index) => {
              const IconComponent = iconMap[service.icon] || Sparkles;
              const isSelected = selectedService?.name === service.name;
              
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedService(service)}
                  className={`w-full p-4 rounded-2xl text-left flex items-center gap-4 transition-all ${
                    isSelected 
                      ? 'bg-[#1B4332] text-white shadow-lg' 
                      : 'bg-white hover:bg-white/80 text-[#1B4332]'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-white/20' : 'bg-[#2D6A4F]/10'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${isSelected ? 'text-white' : 'text-[#2D6A4F]'}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className={`text-sm ${isSelected ? 'text-white/70' : 'text-[#1B4332]/60'}`}>
                      {service.average_duration || 'Consulte'}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Service Detail */}
          {selectedService && (
            <motion.div
              key={selectedService.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                {(() => {
                  const IconComponent = iconMap[selectedService.icon] || Sparkles;
                  return (
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#D4A373]/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-[#2D6A4F]" />
                    </div>
                  );
                })()}
                <div>
                  <h2 className="font-serif text-3xl text-[#1B4332]">{selectedService.name}</h2>
                  <p className="text-[#D4A373] font-medium">
                    Duração: {selectedService.average_duration || 'Consulte'}
                  </p>
                </div>
              </div>

              <p className="text-[#1B4332]/70 text-lg mb-8 leading-relaxed">
                {selectedService.long_description || selectedService.short_description}
              </p>

              {selectedService.benefits && selectedService.benefits.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold text-[#1B4332] mb-4">Benefícios</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-[#2D6A4F]" />
                        </div>
                        <span className="text-[#1B4332]/70">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedService.target_audience && (
                <div className="mb-8 p-4 bg-[#F5F0E8] rounded-xl">
                  <h3 className="font-semibold text-[#1B4332] mb-2">Para quem é indicado?</h3>
                  <p className="text-[#1B4332]/70">{selectedService.target_audience}</p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-8"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Agendar avaliação
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