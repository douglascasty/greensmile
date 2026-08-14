import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, CircleDot, Smile, Sun, Stethoscope, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const iconMap = {
  Sparkles,
  CircleDot,
  Smile,
  Sun,
  Stethoscope,
  Layers
};

const defaultServices = [
  { name: "Prótese Protocolo Com Implantes", short_description: "Recupere todos os dentes fixos sobre implantes com máxima segurança e conforto.", icon: "Sparkles" },
  { name: "Implantes Dentários", short_description: "Recupere dentes perdidos com implantes de última geração.", icon: "CircleDot" },
  { name: "Lentes de Contato Dental", short_description: "Transforme seu sorriso com facetas ultrafinas e naturais.", icon: "Smile" },
  { name: "Clareamento Dental", short_description: "Dentes mais brancos de forma segura e duradoura.", icon: "Sun" },
  { name: "Ortodontia", short_description: "Correção de mordida e alinhamento dentário para todas as idades.", icon: "Layers" },
  { name: "Reabilitação Oral", short_description: "Tratamento completo para devolver função e estética ao seu sorriso.", icon: "Stethoscope" }
];

export default function ServicesSection({ services = [], whatsappLink }) {
  const displayServices = services.length > 0 ? services.filter(s => s.is_featured !== false).slice(0, 6) : defaultServices;

  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-4">
            Tratamentos que transformam
          </h2>
          <p className="text-[#1B4332]/70 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas em odontologia estética e reabilitadora, 
            sempre com foco no seu bem-estar.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2D6A4F]/10 to-[#D4A373]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-7 h-7 text-[#2D6A4F]" />
                </div>
                <h3 className="font-semibold text-xl text-[#1B4332] mb-2 group-hover:text-[#2D6A4F] transition-colors">
                  {service.name}
                </h3>
                <p className="text-[#1B4332]/60 mb-4 line-clamp-2">
                  {service.short_description}
                </p>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#D4A373] font-medium text-sm hover:text-[#C49566] transition-colors"
                >
                  Agendar consulta
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("Servicos")}>
            <Button
              variant="outline"
              size="lg"
              className="border-[#1B4332] text-[#1B4332] hover:bg-[#1B4332] hover:text-white rounded-full px-8"
            >
              Ver todos os serviços
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}