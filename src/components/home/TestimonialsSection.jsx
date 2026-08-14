import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const defaultTestimonials = [
  {
    name: "Lulu",
    rating: 5,
    text: "Minha experiência foi excelente! Sempre fui muito bem atendida, e o resultado superou minhas expectativas. Meus dentes ficaram maravilhosos! Obrigado Dr. Victor.",
    source: "Google",
    service: "Avaliação Geral"
  },
  {
    name: "Douglas",
    rating: 5,
    text: "Ótimo lugar com ambiente limpo e agradável. Fui atendido pelo dentista Victor, onde realizei o procedimento de lentes de contato. Trabalho excelente e super acessível da região, além de ter tido todo o suporte de dúvidas no pós. Super recomendo!",
    source: "Google",
    service: "Lentes de Contato"
  },
  {
    name: "Rubia",
    rating: 5,
    text: "Quero parabenizar o atendimento do dentista dr Victor, fiz meu canal com ele e fiquei muito satisfeita, ficou ótimo, agora estou aguardando minha prótese nova. Médico maravilhoso, trabalha com humanização e profissionalismo com os pacientes além do carinho nos atendimentos! Super indico!!",
    source: "Google",
    service: "Tratamento de Canal"
  },
  {
    name: "Cida",
    rating: 5,
    text: "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente, com muito cuidado e atenção. Além do ótimo atendimento, a clínica é muito agradável. Fiquei muito satisfeita com o resultado e com certeza voltarei mais vezes.",
    source: "Google",
    service: "Restauração de Urgência"
  },
  {
    name: "Gilvanete",
    rating: 5,
    text: "Há 05 dias fiz lentes de resina na green smile ótima clinica, o Trabalho dó Dr. Superou minhas expectativas, tinha dentes pequenos e amarelos, ficaram perfeito lindos , super indico Parabéns a Clinica Green Smile pela profissionalismo e atendimento",
    source: "Google",
    service: "Lentes de Resina"
  }
];

export default function TestimonialsSection({ testimonials = [] }) {
  const [current, setCurrent] = useState(0);
  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % displayTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [displayTestimonials.length]);

  const next = () => setCurrent((prev) => (prev + 1) % displayTestimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + displayTestimonials.length) % displayTestimonials.length);

  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-4">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#D4A373]/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(displayTestimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-xl md:text-2xl text-[#1B4332] font-serif leading-relaxed mb-8">
                "{displayTestimonials[current].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#D4A373] flex items-center justify-center text-white font-semibold text-lg">
                    {displayTestimonials[current].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B4332]">{displayTestimonials[current].name.split(' ')[0]}</p>
                    <p className="text-[#1B4332]/60 text-sm">{displayTestimonials[current].service} • via {displayTestimonials[current].source}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1B4332] hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {displayTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    current === index ? 'bg-[#D4A373] w-8' : 'bg-[#1B4332]/20'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-[#1B4332] hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("Depoimentos")}>
            <Button
              variant="outline"
              size="lg"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white rounded-full px-8"
            >
              Ver todos os depoimentos
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}