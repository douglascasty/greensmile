import React from 'react';
import { motion } from "framer-motion";
import { Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Ambiente biofílico",
    description: "Espaço projetado para transmitir calma e acolhimento, com elementos naturais."
  },
  {
    icon: Users,
    title: "Equipe especializada",
    description: "Profissionais com formação nas melhores instituições do país."
  }
];

export default function AboutSection({ settings }) {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80"
                  alt="Clínica Green Smile"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80"
                  alt="Equipamentos modernos"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&q=80"
                  alt="Atendimento humanizado"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&q=80"
                  alt="Ambiente acolhedor"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A373]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#2D6A4F]/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
              Sobre a Green Smile
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-6">
              Odontologia moderna com<br />
              <span className="text-[#2D6A4F]">acolhimento de verdade</span>
            </h2>
            <p className="text-[#1B4332]/70 text-lg mb-8 leading-relaxed">
              {settings?.about_text || 
                "A Green Smile nasceu da vontade de transformar a experiência odontológica. Aqui, unimos tecnologia de ponta a um ambiente pensado para você se sentir em casa. Nosso foco é proporcionar tratamentos de excelência com o máximo de conforto e o mínimo de ansiedade."}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B4332] mb-1">{feature.title}</h3>
                    <p className="text-sm text-[#1B4332]/60">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}