import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { apiClient as base44 } from '@/api/apiClient';
import { ArrowRight, ArrowLeft, Sparkles, Check, Loader2, Phone } from "lucide-react";

const questions = [
  {
    id: 1,
    question: "Qual é o seu principal objetivo com o tratamento?",
    options: [
      { value: "alignment", label: "Alinhar meus dentes tortos" },
      { value: "whitening", label: "Deixar meus dentes mais brancos" },
      { value: "missing", label: "Repor dentes que perdi" },
      { value: "aesthetics", label: "Melhorar a estética do meu sorriso" },
      { value: "general", label: "Fazer uma avaliação geral" }
    ]
  },
  {
    id: 2,
    question: "Você sente vergonha de sorrir em fotos?",
    options: [
      { value: "yes", label: "Sim, sempre evito" },
      { value: "sometimes", label: "Às vezes" },
      { value: "no", label: "Não, sorrio à vontade" }
    ]
  },
  {
    id: 3,
    question: "Você tem medo ou ansiedade ao ir ao dentista?",
    options: [
      { value: "high", label: "Sim, muito medo" },
      { value: "medium", label: "Um pouco de ansiedade" },
      { value: "low", label: "Não tenho medo" }
    ]
  },
  {
    id: 4,
    question: "O que é mais importante para você no tratamento?",
    options: [
      { value: "discretion", label: "Que seja discreto/invisível" },
      { value: "speed", label: "Que seja rápido" },
      { value: "comfort", label: "Que seja confortável" },
      { value: "durability", label: "Que seja duradouro" }
    ]
  },
  {
    id: 5,
    question: "Qual sua faixa etária?",
    options: [
      { value: "18-25", label: "18 a 25 anos" },
      { value: "26-35", label: "26 a 35 anos" },
      { value: "36-50", label: "36 a 50 anos" },
      { value: "50+", label: "Acima de 50 anos" }
    ]
  }
];

const recommendations = {
  alignment: {
    treatment: "Invisalign",
    description: "Alinhadores transparentes que corrigem o posicionamento dos seus dentes de forma discreta e confortável.",
    benefits: ["Praticamente invisível", "Removível para comer", "Confortável no dia a dia"]
  },
  whitening: {
    treatment: "Clareamento Dental",
    description: "Tratamento profissional que deixa seus dentes visivelmente mais brancos de forma segura.",
    benefits: ["Resultados imediatos", "Seguro para o esmalte", "Duração de até 2 anos"]
  },
  missing: {
    treatment: "Implantes Dentários",
    description: "A solução mais moderna e duradoura para substituir dentes perdidos com resultados naturais.",
    benefits: ["Solução permanente", "Aparência natural", "Função mastigatória completa"]
  },
  aesthetics: {
    treatment: "Lentes de Contato Dental",
    description: "Facetas ultrafinas que transformam completamente a estética do seu sorriso.",
    benefits: ["Resultado imediato", "Muito natural", "Alta durabilidade"]
  },
  general: {
    treatment: "Avaliação Completa",
    description: "Venha fazer uma avaliação completa para descobrirmos juntos o melhor tratamento para você.",
    benefits: ["Diagnóstico completo", "Planejamento personalizado", "Sem compromisso"]
  }
};

export default function Quiz({ settings }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', lgpd_consent: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getRecommendation = () => {
    const mainGoal = answers[1] || 'general';
    return recommendations[mainGoal] || recommendations.general;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.lgpd_consent) {
      alert('Por favor, aceite os termos para continuar.');
      return;
    }

    setIsSubmitting(true);
    
    const recommendation = getRecommendation();
    
    await base44.entities.Lead.create({
      name: formData.name,
      phone: formData.phone,
      service_interest: recommendation.treatment,
      source: 'Quiz',
      quiz_result: JSON.stringify(answers),
      lgpd_consent: true,
      status: 'Novo'
    });

    setIsComplete(true);
    setIsSubmitting(false);
  };

  const rawPhone = (settings?.whatsapp || '5511970604418').replace(/\D/g, '');
  const cleanWhatsapp = rawPhone ? (rawPhone.startsWith('55') ? rawPhone : `55${rawPhone}`) : '5511970604418';
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Fiz o quiz e gostaria de agendar uma avaliação para ${getRecommendation().treatment}.`;

  if (isComplete) {
    return (
      <div className="pt-24 pb-20 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="font-serif text-3xl text-white mb-4">Obrigado, {formData.name}!</h2>
            <p className="text-white/80 mb-8">
              Recebemos suas informações. Nossa equipe entrará em contato em breve pelo WhatsApp para agendar sua avaliação.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-8"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Falar agora no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showForm) {
    const recommendation = getRecommendation();
    
    return (
      <div className="pt-24 pb-20 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <Sparkles className="w-12 h-12 text-[#D4A373] mx-auto mb-4" />
                <h2 className="font-serif text-2xl text-[#1B4332] mb-2">
                  Quase lá!
                </h2>
                <p className="text-[#1B4332]/70">
                  Deixe seus dados para receber o resultado completo e agendar sua avaliação.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#1B4332]">Nome completo *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Seu nome"
                    className="rounded-xl border-[#1B4332]/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#1B4332]">WhatsApp *</Label>
                  <Input
                    id="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(11) 99999-9999"
                    className="rounded-xl border-[#1B4332]/20"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="lgpd"
                    checked={formData.lgpd_consent}
                    onCheckedChange={(checked) => setFormData({ ...formData, lgpd_consent: checked })}
                    className="mt-1 border-[#1B4332]/30 data-[state=checked]:bg-[#2D6A4F]"
                  />
                  <Label htmlFor="lgpd" className="text-sm text-[#1B4332]/70 cursor-pointer">
                    Concordo em ser contatado(a) pela Green Smile para agendamento e informações. *
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full py-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Ver meu resultado'
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <div className="pt-24 pb-20 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-[#D4A373]/20 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-[#D4A373]" />
                </div>
                <span className="text-[#D4A373] font-medium text-sm uppercase tracking-wider">
                  Seu resultado
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[#1B4332] mt-2">
                  {recommendation.treatment}
                </h2>
              </div>

              <p className="text-[#1B4332]/70 text-lg text-center mb-8">
                {recommendation.description}
              </p>

              <div className="bg-[#F5F0E8] rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-[#1B4332] mb-4">Por que é ideal para você:</h3>
                <div className="space-y-3">
                  {recommendation.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-[#2D6A4F]" />
                      </div>
                      <span className="text-[#1B4332]/70">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => setShowForm(true)}
                size="lg"
                className="w-full bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full py-6"
              >
                Agendar minha avaliação
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gradient-to-br from-[#2D6A4F] to-[#1B4332] min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-white/60 text-sm mb-2">
              <span>Pergunta {currentStep + 1} de {questions.length}</span>
              <span>{Math.round(progress)}% completo</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#D4A373]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <h2 className="font-serif text-2xl md:text-3xl text-[#1B4332] mb-8 text-center">
                {currentQuestion.question}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      answers[currentQuestion.id] === option.value
                        ? 'border-[#2D6A4F] bg-[#2D6A4F]/5'
                        : 'border-[#1B4332]/10 hover:border-[#1B4332]/30'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion.id] === option.value
                          ? 'border-[#2D6A4F] bg-[#2D6A4F]'
                          : 'border-[#1B4332]/30'
                      }`}>
                        {answers[currentQuestion.id] === option.value && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="text-[#1B4332] font-medium">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Button
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="text-[#1B4332]"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!answers[currentQuestion.id]}
                  className="bg-[#D4A373] hover:bg-[#C49566] text-white rounded-full px-8"
                >
                  {currentStep === questions.length - 1 ? 'Ver resultado' : 'Próxima'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}