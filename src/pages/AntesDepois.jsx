import React, { useEffect, useState } from 'react';
import { apiClient as base44 } from '@/api/apiClient';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight } from "lucide-react";

const categories = ["Todos", "Implantes", "Invisalign", "Estética", "Clareamento"];

const defaultCases = [
  { category: "Invisalign", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Correção de apinhamento severo com Invisalign em 14 meses" },
  { category: "Implantes", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Reabilitação total com 6 implantes e prótese fixa" },
  { category: "Estética", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "20 lentes de contato dental para harmonização completa" },
  { category: "Clareamento", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Clareamento a laser com 8 tons de diferença" },
  { category: "Invisalign", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Correção de mordida cruzada com Invisalign" },
  { category: "Estética", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Facetas de porcelana para correção de cor e formato" },
  { category: "Implantes", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Implante unitário com coroa de porcelana" },
  { category: "Clareamento", before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80", after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&q=80", description: "Clareamento combinado: consultório + caseiro" }
];

function BeforeAfterCard({ caseItem }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setShowAfter(true)}
      onMouseLeave={() => setShowAfter(false)}
      onClick={() => setShowAfter(!showAfter)}
    >
      <div className="relative aspect-[4/3]">
        <img
          src={showAfter ? caseItem.after_image : caseItem.before_image}
          alt={showAfter ? "Depois" : "Antes"}
          className="w-full h-full object-cover transition-all duration-500"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            !showAfter ? 'bg-white text-[#1B4332]' : 'bg-white/30 text-white'
          }`}>
            Antes
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            showAfter ? 'bg-[#D4A373] text-white' : 'bg-white/30 text-white'
          }`}>
            Depois
          </span>
        </div>

        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <ArrowLeftRight className="w-4 h-4 text-white" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="inline-block px-3 py-1 bg-[#D4A373] text-white text-xs font-medium rounded-full mb-2">
            {caseItem.category}
          </span>
          <p className="text-white font-medium">{caseItem.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AntesDepois() {
  const [cases, setCases] = useState(defaultCases);
  const [activeFilter, setActiveFilter] = useState("Todos");

  useEffect(() => {
    const loadCases = async () => {
      try {
        const data = await base44.entities.BeforeAfterCase.list('order', 50);
        if (data && data.length > 0) {
          setCases(data);
        }
      } catch (e) {
        console.warn('Using default cases', e);
      }
    };
    loadCases();
  }, []);

  const filteredCases = activeFilter === "Todos" 
    ? cases 
    : cases.filter(c => c.category === activeFilter);

  return (
    <div className="pt-24 pb-20 bg-[#1B4332] min-h-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Resultados Reais
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white mt-3 mb-4">
            Antes & Depois
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Veja transformações reais de pacientes que confiaram na Green Smile. 
            Passe o mouse ou toque para ver o resultado.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? 'bg-[#D4A373] text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((caseItem, index) => (
              <BeforeAfterCard key={index} caseItem={caseItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCases.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/50 text-lg">Nenhum caso encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
}