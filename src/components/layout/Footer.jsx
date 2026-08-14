import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logoImg from "@/assets/hero-big-logo-clean.png";

export default function Footer({ settings }) {
  const cleanWhatsapp = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img 
              src={logoImg}
              alt="Green Smile Clínica Odontológica"
              className="h-20 w-auto object-contain mb-4" 
            />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transformando sorrisos no {settings?.neighborhood || 'Jabaquara'} com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a
                href={settings?.instagram || "https://www.instagram.com/greensmile_odonto/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={settings?.facebook || "https://www.facebook.com/people/Green-Smile-Cl%C3%ADnica-Odontol%C3%B3gica/61582121762981/#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A373]">Links Rápidos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to={createPageUrl("Home")} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Servicos")} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Home") + "#estrutura"} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Estrutura
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("AntesDepois")} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Antes & Depois
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Depoimentos")} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link to={createPageUrl("Quiz")} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  Quiz do Sorriso
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A373]">Principais Tratamentos</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>Prótese Protocolo com Implantes</li>
              <li>Implantes Dentários</li>
              <li>Lentes de Contato Dental</li>
              <li>Clareamento Dental</li>
              <li>Ortodontia & Invisalign</li>
              <li>Reabilitação Oral</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4A373]">Contato & Localização</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] shrink-0 mt-0.5" />
                <span>
                  {settings?.address || 'Av. Eng. Armando de Arruda Pereira, 2357'}<br />
                  {settings?.city || 'Jabaquara - São Paulo / SP'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A373] shrink-0" />
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {settings?.phone || '(11) 97060-4418'}
                </a>
              </li>
              {settings?.email && (
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#D4A373] shrink-0" />
                  <a href={`mailto:${settings.email}`} className="hover:text-white">
                    {settings.email}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {settings?.clinic_name || 'Green Smile'} Clínica Odontológica. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <Link to={createPageUrl("Privacidade")} className="hover:text-white transition-colors">
              Privacidade
            </Link>
            <Link to={createPageUrl("Termos")} className="hover:text-white transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}