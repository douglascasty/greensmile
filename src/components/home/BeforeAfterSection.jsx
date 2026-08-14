import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeftRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const categories = ["Todos", "Implantes", "Invisalign", "Estética", "Clareamento"];

const defaultCases = [
  {
    category: "Invisalign",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Correção de apinhamento com Invisalign em 12 meses"
  },
  {
    category: "Implantes",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Reabilitação com implantes e prótese fixa"
  },
  {
    category: "Estética",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Lentes de contato dental para harmonização do sorriso"
  },
  {
    category: "Clareamento",
    before_image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&q=80",
    after_image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&q=80",
    description: "Clareamento a laser com resultado imediato"
  }
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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/20 to-transparent" />
        
        {/* Badge */}
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

        {/* Toggle Hint */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <ArrowLeftRight className="w-4 h-4 text-white" />
        </div>

        {/* Content */}
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

export default function BeforeAfterSection({ cases = [] }) {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const displayCases = cases.length > 0 ? cases : defaultCases;
  
  const filteredCases = activeFilter === "Todos" 
    ? displayCases 
    : displayCases.filter(c => c.category === activeFilter);

  return (
    <section id="antesdepois" className="py-20 md:py-28 bg-[#1B4332]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
            Resultados Reais
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mt-3 mb-4">
            Antes & Depois
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Veja transformações reais de pacientes que confiaram na Green Smile.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.slice(0, 4).map((caseItem, index) => (
              <BeforeAfterCard key={index} caseItem={caseItem} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to={createPageUrl("AntesDepois")}>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#1B4332] rounded-full px-8"
            >
              Ver mais casos
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}