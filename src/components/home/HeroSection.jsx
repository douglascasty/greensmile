import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, Phone, Heart } from "lucide-react";
import { motion } from "framer-motion";
import heroBgVideo from "@/assets/hero-bg-video.mp4";
import heroBigLogo from "@/assets/hero-big-logo-badge.png";

export default function HeroSection({ settings, onScheduleClick }) {
  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background Video */}
      <video
        src={heroBgVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1B4332]/95 via-[#1B4332]/80 to-black/40 z-10" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-20 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Badge */}
            {settings?.current_month_agenda && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-[#D4A373]/30 backdrop-blur-md text-white border border-[#D4A373]/40 px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2.5 h-2.5 bg-[#D4A373] rounded-full animate-pulse" />
                {settings.current_month_agenda}
              </motion.div>
            )}

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 drop-shadow-md">
              Seu novo sorriso<br />
              <span className="text-[#E9C46A]">começa no Jabaquara.</span>
            </h1>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4A373] text-[#D4A373]" />
                  ))}
                </div>
                <span className="text-white font-semibold">{settings?.average_rating || '5'}/5</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#D4A373] hover:bg-[#C49566] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#D4A373]/30 transition-all hover:shadow-xl hover:shadow-[#D4A373]/40"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar avaliação
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={onScheduleClick}
                className="border-white/80 text-white bg-white/10 hover:bg-white hover:text-[#1B4332] px-8 py-6 text-lg rounded-full backdrop-blur-md transition-all"
              >
                Conhecer serviços
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-start gap-6 mt-10 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm text-white/90">
                <Heart className="w-5 h-5 text-[#D4A373]" />
                <span>Atendimento humanizado</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Big Logo Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative group">
              {/* Soft Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#D4A373]/20 via-white/10 to-[#2D6A4F]/20 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={heroBigLogo}
                alt="Green Smile Clínica Odontológica"
                className="relative w-full max-w-[480px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}