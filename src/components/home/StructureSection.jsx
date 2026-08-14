import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Shield, Maximize2, X } from "lucide-react";

import clinic1 from "@/assets/gallery/clinic-1.jpeg";
import clinic2 from "@/assets/gallery/clinic-2.jpeg";
import clinic3 from "@/assets/gallery/clinic-3.jpeg";
import clinic4 from "@/assets/gallery/clinic-4.jpeg";
import clinic5 from "@/assets/gallery/clinic-5.jpeg";
import clinic6 from "@/assets/gallery/clinic-6.jpeg";

const galleryImages = [
  { src: clinic1, alt: "Recepção Green Smile", title: "Recepção & Atendimento" },
  { src: clinic2, alt: "Sala de Espera", title: "Espaço de Espera Acolhedor" },
  { src: clinic3, alt: "Consultório Climatizado", title: "Consultório Climatizado" },
  { src: clinic4, alt: "Detalhes do Espaço", title: "Detalhes do Nosso Espaço" },
  { src: clinic5, alt: "Ambiente Cromoterápico", title: "Ambiente Cromoterápico" },
  { src: clinic6, alt: "Salas de Tratamento", title: "Salas de Tratamento" },
];

export default function StructureSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="estrutura" className="py-16 md:py-24 bg-[#F5F0E8]/40 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Concise Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-left"
          >
            <span className="text-[#D4A373] font-semibold text-xs md:text-sm uppercase tracking-widest block mb-2">
              Nossa Estrutura
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1B4332] leading-tight mb-4">
              Um ambiente projetado para o seu conforto
            </h2>
            <p className="text-sm md:text-base text-[#1B4332]/75 leading-relaxed mb-6">
              A Green Smile une tecnologia de ponta a um ambiente moderno e acolhedor. Nossos consultórios possuem iluminação cromoterápica e equipamentos avançados para garantir o seu bem-estar durante todo o atendimento.
            </p>

            {/* Compact Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#1B4332]/10">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#1B4332]/5">
                <div className="w-8 h-8 rounded-lg bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#2D6A4F]" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-[#1B4332]">Cromoterapia</h3>
                  <p className="text-[11px] text-[#1B4332]/60">Calma e serenidade</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-[#1B4332]/5">
                <div className="w-8 h-8 rounded-lg bg-[#D4A373]/15 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4 text-[#D4A373]" />
                </div>
                <div>
                  <h3 className="font-bold text-xs text-[#1B4332]">Equipamentos Modernos</h3>
                  <p className="text-[11px] text-[#1B4332]/60">Alta tecnologia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 6 Unique Clinic Photos Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImg(item)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#1B4332]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-3 text-center">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white mb-1.5">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <span className="text-white font-semibold text-xs drop-shadow line-clamp-1">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-t-2xl shadow-2xl"
              />
              <div className="bg-[#1B4332] text-white p-4 text-center">
                <p className="font-semibold text-base">{selectedImg.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
