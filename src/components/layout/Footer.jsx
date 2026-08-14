import React from 'react';
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export default function Footer({ settings }) {
  return (
    <footer className="bg-[#1B4332] text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center text-center">
            <img src="https://media.base44.com/images/public/6981bf961688af1307193755/247fe50cb_logo.png"
              alt="Green Smile Clínica Odontológica"
              className="h-32 w-auto object-contain rounded-xl shadow-md mb-4 mx-auto" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transformando sorrisos no {settings?.neighborhood || 'Jabaquara'} com tecnologia de ponta e atendimento humanizado.
            </p>
            <div className="flex justify-center gap-3">
              <a
                href={settings?.instagram || "https://www.instagram.com/greensmile_odonto/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={settings?.facebook || "https://www.facebook.com/people/Green-Smile-Cl%C3%ADnica-Odontol%C3%B3gica/61582121762981/#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
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
                  Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3 text-sm">
              <li><span className="text-white/70">Invisalign</span></li>
              <li><span className="text-white/70">Implantes Dentários</span></li>
              <li><span className="text-white/70">Lentes de Contato Dental</span></li>
              <li><span className="text-white/70">Clareamento Dental</span></li>
              <li><span className="text-white/70">Ortodontia</span></li>
              <li><span className="text-white/70">Reabilitação Oral</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                <span className="text-white/70">
                  {settings?.address || 'Av. Eng. Armando de Arruda Pereira, 2357 - Jabaquara'}<br />
                  {settings?.city || 'São Paulo - SP, 04309-011'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                <a href={`https://wa.me/${(settings?.whatsapp || '5511970604418').replace(/\D/g, '')}`} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  {settings?.whatsapp || '(11) 97060-4418'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4A373] flex-shrink-0" />
                <a href={`mailto:${settings?.email || 'greensmile.odonto@gmail.com'}`} className="text-white/70 hover:text-[#D4A373] transition-colors">
                  {settings?.email || 'greensmile.odonto@gmail.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {new Date().getFullYear()} Green Smile Odontologia. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <Link to={createPageUrl("Privacidade")} className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to={createPageUrl("Termos")} className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

}