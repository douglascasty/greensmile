import React, { useEffect, useState } from 'react';
import { apiClient as base44 } from '@/api/apiClient';
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
    text: "Quebrei meu dente da frente e precisei de uma restauração com urgência. Fui atendido pelo doutor Victor, que fez um trabalho excelente, com muito cuidado e atenção. Além do ótimo atendimento, a clínica é muito agradável. Fiquei muito satisfeta com o resultado e com certeza voltarei mais vezes.",
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

export default function Depoimentos() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const loadTestimonials = async () => {
      const data = await base44.entities.Testimonial.list('order', 50);
      setTestimonials(data.length > 0 ? data : defaultTestimonials);
    };
    loadTestimonials();
  }, []);

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
            Depoimentos
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B4332] mt-3 mb-4">
            O que nossos pacientes dizem
          </h1>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos pacientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre sua experiência na Green Smile.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-serif text-[#1B4332] mb-1">4.9</div>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
              ))}
            </div>
            <p className="text-[#1B4332]/60 text-sm">no Google</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-serif text-[#1B4332] mb-1">2.000+</div>
            <p className="text-[#1B4332]/60 text-sm">Pacientes atendidos</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-serif text-[#1B4332] mb-1">98%</div>
            <p className="text-[#1B4332]/60 text-sm">Taxa de satisfação</p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-serif text-[#1B4332] mb-1">15+</div>
            <p className="text-[#1B4332]/60 text-sm">Anos de experiência</p>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-[#D4A373]/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4A373] text-[#D4A373]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#1B4332]/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2D6A4F] to-[#D4A373] flex items-center justify-center text-white font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#1B4332]">{testimonial.name.split(' ')[0]}</p>
                  <p className="text-[#1B4332]/50 text-sm">
                    {testimonial.service} • via {testimonial.source}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}