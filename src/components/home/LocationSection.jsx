import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Navigation, QrCode } from "lucide-react";
import qrWhatsapp from "@/assets/qr-whatsapp.png";
import qrInstagram from "@/assets/qr-instagram.png";

export default function LocationSection({ settings }) {
  const cleanWhatsapp = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <section id="local" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Localização
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-4">
            Venha nos visitar
          </h2>
          <p className="text-[#1B4332]/70 text-lg">
            Estamos localizados no coração do {settings?.neighborhood || 'Jabaquara'}, com fácil acesso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl h-[400px] lg:h-auto"
          >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.3!2d-46.6526!3d-23.6581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2b2b2b2b%3A0x0!2sAv.%20Eng.%20Armando%20de%20Arruda%20Pereira%2C%202357%20-%20Jabaquara%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004309-011!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
          </motion.div>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B4332] mb-1">Endereço</h3>
                  <p className="text-[#1B4332]/70">
                    {settings?.address || 'Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara'}
                  </p>
                  <p className="text-[#1B4332]/70">
                    {settings?.city || 'São Paulo - SP, 04309-011'}
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#D4A373]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B4332] mb-1">Horário de Funcionamento</h3>
                  <p className="text-[#1B4332]/70 whitespace-pre-line">
                    {settings?.working_hours || 'Seg a Sex: 9h às 19h\nSáb: 9h às 14h'}
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#2D6A4F]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#2D6A4F]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#1B4332] mb-1">Contato</h3>
                  <div className="flex flex-col gap-1">
                    <a 
                      href={whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#2D6A4F] hover:underline font-semibold inline-flex items-center gap-1.5 text-base"
                    >
                      WhatsApp: {settings?.whatsapp || '(11) 97060-4418'}
                    </a>
                    <a 
                      href={`mailto:${settings?.email || 'greensmile.odonto@gmail.com'}`}
                      className="text-[#1B4332]/70 hover:text-[#2D6A4F] text-sm hover:underline"
                    >
                      E-mail: {settings?.email || 'greensmile.odonto@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Codes Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#2D6A4F]/10">
              <div className="flex items-center gap-2 mb-4">
                <QrCode className="w-5 h-5 text-[#2D6A4F]" />
                <h3 className="font-semibold text-[#1B4332]">QR Code WhatsApp & Instagram</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-[#25D366]/10 p-3 rounded-xl hover:bg-[#25D366]/20 transition-all border border-[#25D366]/20 group text-center"
                >
                  <img
                    src={qrWhatsapp}
                    alt="QR Code WhatsApp"
                    className="w-24 h-24 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform mb-2"
                  />
                  <span className="text-xs font-semibold text-[#1B4332]">WhatsApp</span>
                </a>
                <a
                  href={settings?.instagram || "https://www.instagram.com/greensmile_odonto/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center bg-[#2D6A4F]/10 p-3 rounded-xl hover:bg-[#2D6A4F]/20 transition-all border border-[#2D6A4F]/20 group text-center"
                >
                  <img
                    src={qrInstagram}
                    alt="QR Code Instagram"
                    className="w-24 h-24 object-contain rounded-lg shadow-sm group-hover:scale-105 transition-transform mb-2"
                  />
                  <span className="text-xs font-semibold text-[#1B4332]">Instagram</span>
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Agendar pelo WhatsApp
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white rounded-full"
              >
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings?.address || 'Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara, São Paulo - SP, 04309-011')}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Como chegar
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}