import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { apiClient as base44 } from '@/api/apiClient';
import { Loader2, Send, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Invisalign",
  "Implantes Dentários",
  "Lentes de Contato Dental",
  "Clareamento Dental",
  "Ortodontia",
  "Reabilitação Oral",
  "Primeira Consulta",
  "Outro"
];

const timeSlots = [
  "Manhã (8h às 12h)",
  "Tarde (12h às 18h)",
  "Qualquer horário"
];

export default function LeadForm({ source = "Contato", onSuccess, variant = "default" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service_interest: '',
    preferred_time: '',
    message: '',
    lgpd_consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.lgpd_consent) {
      alert('Por favor, aceite os termos para continuar.');
      return;
    }

    setIsSubmitting(true);
    
    await base44.entities.Lead.create({
      ...formData,
      source,
      status: 'Novo'
    });

    setIsSuccess(true);
    setIsSubmitting(false);
    
    if (onSuccess) {
      onSuccess();
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-[#2D6A4F]/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#2D6A4F]" />
        </div>
        <h3 className="font-serif text-2xl text-[#1B4332] mb-3">Mensagem enviada!</h3>
        <p className="text-[#1B4332]/70 mb-6">
          Entraremos em contato em breve pelo WhatsApp.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSuccess(false)}
          className="border-[#1B4332] text-[#1B4332]"
        >
          Enviar outra mensagem
        </Button>
      </motion.div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={isCompact ? "space-y-4" : "grid md:grid-cols-2 gap-5"}>
        <div className="space-y-2">
          <Label htmlFor="name" className="text-[#1B4332]">Nome completo *</Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Seu nome"
            className="rounded-xl border-[#1B4332]/20 focus:border-[#2D6A4F] focus:ring-[#2D6A4F]"
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
            className="rounded-xl border-[#1B4332]/20 focus:border-[#2D6A4F] focus:ring-[#2D6A4F]"
          />
        </div>
      </div>

      {!isCompact && (
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#1B4332]">E-mail (opcional)</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="seu@email.com"
            className="rounded-xl border-[#1B4332]/20 focus:border-[#2D6A4F] focus:ring-[#2D6A4F]"
          />
        </div>
      )}

      <div className={isCompact ? "space-y-4" : "grid md:grid-cols-2 gap-5"}>
        <div className="space-y-2">
          <Label className="text-[#1B4332]">Serviço de interesse</Label>
          <Select
            value={formData.service_interest}
            onValueChange={(value) => setFormData({ ...formData, service_interest: value })}
          >
            <SelectTrigger className="rounded-xl border-[#1B4332]/20">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>{service}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-[#1B4332]">Melhor horário</Label>
          <Select
            value={formData.preferred_time}
            onValueChange={(value) => setFormData({ ...formData, preferred_time: value })}
          >
            <SelectTrigger className="rounded-xl border-[#1B4332]/20">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>{slot}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {!isCompact && (
        <div className="space-y-2">
          <Label htmlFor="message" className="text-[#1B4332]">Mensagem (opcional)</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Conte-nos mais sobre o que você procura..."
            className="rounded-xl border-[#1B4332]/20 focus:border-[#2D6A4F] focus:ring-[#2D6A4F] min-h-[100px]"
          />
        </div>
      )}

      <div className="flex items-start gap-3">
        <Checkbox
          id="lgpd"
          checked={formData.lgpd_consent}
          onCheckedChange={(checked) => setFormData({ ...formData, lgpd_consent: checked })}
          className="mt-1 border-[#1B4332]/30 data-[state=checked]:bg-[#2D6A4F] data-[state=checked]:border-[#2D6A4F]"
        />
        <Label htmlFor="lgpd" className="text-sm text-[#1B4332]/70 cursor-pointer">
          Concordo em ser contatado(a) pela Green Smile para agendamento e informações sobre tratamentos. *
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
          <>
            <Send className="w-5 h-5 mr-2" />
            Enviar mensagem
          </>
        )}
      </Button>
    </form>
  );
}