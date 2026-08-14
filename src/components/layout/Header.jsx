import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, Instagram, Facebook } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import logoImg from "@/assets/hero-big-logo-clean.png";

const navLinks = [
  { label: "Início", href: "Home", anchor: "" },
  { label: "Sobre", href: "Home", anchor: "#sobre" },
  { label: "Estrutura", href: "Home", anchor: "#estrutura" },
  { label: "Serviços", href: "Servicos", anchor: "" },
  { label: "Antes & Depois", href: "AntesDepois", anchor: "" },
  { label: "Depoimentos", href: "Depoimentos", anchor: "" },
  { label: "Contato", href: "Contato", anchor: "" }
];

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
        'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center">
            <img
              src={logoImg}
              alt="Green Smile Clínica Odontológica"
              className="h-16 md:h-20 w-auto object-contain" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={createPageUrl(link.href) + link.anchor}
                className={`font-medium transition-colors hover:text-[#D4A373] ${
                  isScrolled ? 'text-[#1B4332]' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:inline-flex bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Consulta
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
                      src={logoImg}
                      alt="Green Smile Clínica Odontológica"
                      className="h-16 w-auto object-contain" 
                    />
                  </div>

                  <nav className="flex-1 p-6">
                    <ul className="space-y-1">
                      {navLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={createPageUrl(link.href) + link.anchor}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 px-4 rounded-xl text-[#1B4332] hover:bg-[#F5F0E8] transition-colors"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>

                  <div className="p-6 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full"
                    >
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
    </motion.header>
  );
}