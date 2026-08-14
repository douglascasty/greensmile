import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Obrigado({ settings }) {
  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Acabei de preencher o formulário no site e gostaria de confirmar meu agendamento.`;

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Mensagem enviada!
          </h1>
          <p className="text-white/80 text-lg mb-10">
            Obrigado pelo seu contato. Nossa equipe entrará em contato em breve
            pelo WhatsApp para agendar sua avaliação.
          </p>

          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="w-full bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Falar agora no WhatsApp
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full border-white text-white hover:bg-white hover:text-[#1B4332] rounded-full py-6"
            >
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings?.address || 'Green Smile Jabaquara')}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Ver como chegar
              </a>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <Link 
              to={createPageUrl("Home")}
              className="inline-flex items-center text-white/70 hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Voltar para o site
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}