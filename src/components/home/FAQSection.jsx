import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const defaultFAQs = [
  {
    question: "O tratamento com Invisalign dói?",
    answer: "O Invisalign é muito confortável! Pode haver um leve desconforto nos primeiros dias de cada alinhador, mas é muito menor que o aparelho tradicional. A maioria dos pacientes se adapta rapidamente."
  },
  {
    question: "Quanto tempo dura um implante dentário?",
    answer: "Com os cuidados adequados, um implante pode durar a vida toda. A taxa de sucesso é superior a 95%. Fazemos acompanhamento regular para garantir a longevidade do seu implante."
  },
  {
    question: "Quais formas de pagamento vocês aceitam?",
    answer: "Aceitamos cartão de crédito (em até 12x), débito, PIX e boleto. Também trabalhamos com financiamento odontológico para tratamentos de maior valor. Consulte nossas condições especiais."
  },
  {
    question: "Como é a primeira consulta?",
    answer: "A primeira consulta é uma avaliação completa onde fazemos exame clínico, radiografias (se necessário) e conversamos sobre suas expectativas. Apresentamos um plano de tratamento personalizado sem compromisso."
  }
];

export default function FAQSection({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(0);
  const displayFAQs = faqs.length > 0 ? faqs : defaultFAQs;

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
              Dúvidas Frequentes
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-3 mb-6">
              Perguntas que<br />você pode ter
            </h2>
            <p className="text-[#1B4332]/70 text-lg mb-8">
              Reunimos as principais dúvidas dos nossos pacientes. Se você não encontrar a sua pergunta, fale conosco pelo WhatsApp.
            </p>

            <div className="flex items-center gap-4 p-4 bg-[#F5F0E8] rounded-2xl">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <HelpCircle className="w-6 h-6 text-[#2D6A4F]" />
              </div>
              <div>
                <p className="font-semibold text-[#1B4332]">Ainda com dúvidas?</p>
                <p className="text-[#1B4332]/60 text-sm">Estamos prontos para ajudar</p>
              </div>
            </div>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {displayFAQs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#1B4332]/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F0E8]/50 transition-colors"
                >
                  <span className="font-medium text-[#1B4332] pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#2D6A4F] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="px-5 pb-5 text-[#1B4332]/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}