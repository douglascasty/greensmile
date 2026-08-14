import React, { useEffect, useState } from 'react';
import { apiClient as base44, defaultTestimonials } from '@/api/apiClient';
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Depoimentos() {
  const [testimonials, setTestimonials] = useState(defaultTestimonials);

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const data = await base44.entities.Testimonial.list('order', 50);
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      } catch (e) {
        console.warn('Using default testimonials', e);
      }
    };
    loadTestimonials();
  }, []);

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
            Depoimentos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B4332] mt-3 mb-4">
            O que dizem nossos pacientes
          </h1>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            Avaliações reais de quem já transformou o sorriso com a nossa equipe no Jabaquara.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 shadow-sm relative flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-[#D4A373]/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                  ))}
                </div>
                <p className="text-[#1B4332]/80 leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#1B4332]/10 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-[#1B4332]">{item.name}</h3>
                  {item.service && (
                    <p className="text-xs text-[#D4A373] font-medium">{item.service}</p>
                  )}
                </div>
                {item.source && (
                  <span className="text-xs text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.source}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}