import React from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from '@/components/forms/LeadForm';

export default function Contato({ settings }) {
  const cleanWhatsapp = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Contato
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1B4332] mt-3 mb-4">
            Fale conosco
          </h1>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato pelo WhatsApp ou preencha o formulário.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* WhatsApp Card */}
            <div className="bg-[#25D366]/10 rounded-2xl p-6 border border-[#25D366]/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-[#1B4332] mb-1">WhatsApp</h3>
                  <p className="text-[#1B4332]/70 mb-3">Atendimento rápido e prático</p>
                  <Button
                    asChild
                    className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 mr-2" />
                      {settings?.whatsapp || '(11) 97060-4418'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4">
              <div className="bg-[#F5F0E8] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#2D6A4F]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B4332] mb-1">Endereço</h3>
                    <p className="text-[#1B4332]/70">
                      {settings?.address || 'Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara'}<br />
                      {settings?.city || 'São Paulo - SP, 04309-011'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F0E8] rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#D4A373]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1B4332] mb-1">Horário</h3>
                    <p className="text-[#1B4332]/70 whitespace-pre-line">
                      {settings?.working_hours || 'Seg a Sex: 9h às 19h\nSáb: 9h às 14h'}
                    </p>
                  </div>
                </div>
              </div>

              {settings?.email && (
                <div className="bg-[#F5F0E8] rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#2D6A4F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#1B4332] mb-1">E-mail</h3>
                      <a href={`mailto:${settings.email}`} className="text-[#1B4332]/70 hover:text-[#2D6A4F]">
                        {settings.email}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[250px]">
              {settings?.google_maps_embed ? (
                <iframe
                  src={settings.google_maps_embed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              ) : (
                <div className="w-full h-full bg-[#F5F0E8] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-[#2D6A4F] mx-auto mb-3" />
                    <p className="text-[#1B4332]/60">Mapa em breve</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#F5F0E8] rounded-3xl p-8"
          >
            <h2 className="font-serif text-2xl text-[#1B4332] mb-2">Agende sua avaliação</h2>
            <p className="text-[#1B4332]/70 mb-8">
              Preencha o formulário e entraremos em contato em breve.
            </p>
            <LeadForm source="Contato" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}