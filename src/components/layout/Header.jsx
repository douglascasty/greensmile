import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "Início", href: "Home", anchor: "" },
{ label: "Sobre", href: "Home", anchor: "#sobre" },
{ label: "Estrutura", href: "Home", anchor: "#estrutura" },
{ label: "Serviços", href: "Servicos", anchor: "" },
{ label: "Antes & Depois", href: "AntesDepois", anchor: "" },
{ label: "Depoimentos", href: "Depoimentos", anchor: "" },
{ label: "Contato", href: "Contato", anchor: "" }];


export default function Header({ settings }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanWhatsapp = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ?
      'bg-white/95 backdrop-blur-md shadow-sm py-3' :
      'bg-transparent py-5'}`
      }>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center">
            <img
              src="https://media.base44.com/images/public/6981bf961688af1307193755/247fe50cb_logo.png"
              alt="Green Smile Clínica Odontológica"
              className="h-20 w-auto object-contain rounded-none" />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
            <Link
              key={link.label}
              to={createPageUrl(link.href) + link.anchor}
              className={`text-sm font-semibold transition-all duration-300 ${
              isScrolled
                ? 'text-[#1B4332] hover:text-[#2D6A4F]'
                : 'text-white hover:text-[#D4A373] drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'}`
              }>
              
                {link.label}
              </Link>
            )}
          </nav>

          {/* CTA & Social Icons */}
          <div className="flex items-center gap-3">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center gap-2 mr-1">
              <a
                href={settings?.instagram || "https://www.instagram.com/greensmile_odonto/"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'bg-[#1B4332]/10 text-[#1B4332] hover:bg-[#2D6A4F] hover:text-white'
                    : 'bg-white/20 text-white hover:bg-white hover:text-[#1B4332] backdrop-blur-sm border border-white/30'
                }`}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={settings?.facebook || "https://www.facebook.com/people/Green-Smile-Cl%C3%ADnica-Odontol%C3%B3gica/61582121762981/#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'bg-[#1B4332]/10 text-[#1B4332] hover:bg-[#2D6A4F] hover:text-white'
                    : 'bg-white/20 text-white hover:bg-white hover:text-[#1B4332] backdrop-blur-sm border border-white/30'
                }`}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                  isScrolled
                    ? 'bg-[#1B4332]/10 text-[#1B4332] hover:bg-[#2D6A4F] hover:text-white'
                    : 'bg-white/20 text-white hover:bg-white hover:text-[#1B4332] backdrop-blur-sm border border-white/30'
                }`}
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>

            <Button
              asChild
              className="hidden sm:flex bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-6">
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Agendar avaliação
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className={`w-6 h-6 ${isScrolled ? 'text-[#1B4332]' : 'text-white'}`} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b">
                    <img
                      src="https://media.base44.com/images/public/6981bf961688af1307193755/247fe50cb_logo.png"
                      alt="Green Smile Clínica Odontológica"
                      className="h-20 w-auto object-contain" />
                    
                  </div>

                  <nav className="flex-1 p-6">
                    <ul className="space-y-1">
                      {navLinks.map((link) =>
                      <li key={link.label}>
                          <Link
                          to={createPageUrl(link.href) + link.anchor}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 px-4 rounded-xl text-[#1B4332] hover:bg-[#F5F0E8] transition-colors">
                          
                            {link.label}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </nav>

                  <div className="p-6 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full">
                      
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Phone className="w-4 h-4 mr-2" />
                        Agendar avaliação
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>);

}