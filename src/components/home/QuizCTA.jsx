import React from 'react';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function QuizCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4A373]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#D4A373]/20 mb-6">
            <Sparkles className="w-8 h-8 text-[#D4A373]" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Qual tratamento combina<br />com você?
          </h2>

          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Responda algumas perguntas rápidas e descubra o tratamento ideal para transformar o seu sorriso.
          </p>

          <Link to={createPageUrl("Quiz")}>
            <Button
              size="lg"
              className="bg-[#D4A373] hover:bg-[#C49566] text-white px-10 py-7 text-lg rounded-full shadow-lg shadow-[#D4A373]/30 transition-all hover:shadow-xl"
            >
              Fazer o quiz
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <p className="text-white/50 text-sm mt-6">
            Leva menos de 2 minutos • 100% gratuito
          </p>
        </motion.div>
      </div>
    </section>
  );
}