import React from 'react';
import { motion } from "framer-motion";

export default function Privacidade({ settings }) {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl text-[#1B4332] mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-[#1B4332]/70 leading-relaxed">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">1. Quais dados coletamos</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              A Green Smile Odontologia coleta os seguintes dados pessoais:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>Nome completo</li>
              <li>Telefone/WhatsApp</li>
              <li>E-mail (quando fornecido)</li>
              <li>Serviço de interesse</li>
              <li>Preferência de horário para contato</li>
              <li>Mensagens enviadas através de formulários</li>
              <li>Respostas do quiz de tratamentos</li>
            </ul>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">2. Finalidade da coleta</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Utilizamos seus dados para:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>Entrar em contato para agendamento de consultas</li>
              <li>Enviar informações sobre tratamentos de interesse</li>
              <li>Personalizar sua experiência de atendimento</li>
              <li>Enviar comunicações relevantes sobre a clínica</li>
            </ul>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">3. Compartilhamento de dados</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>Cumprimento de obrigações legais</li>
              <li>Proteção dos direitos da clínica</li>
            </ul>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">4. Armazenamento e segurança</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Seus dados são armazenados em servidores seguros, com acesso restrito à equipe autorizada.
              Mantemos seus dados pelo tempo necessário para atender às finalidades descritas ou conforme
              exigido por lei.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">5. Seus direitos</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de dados</li>
              <li>Revogar o consentimento</li>
            </ul>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">6. Contato</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>WhatsApp: {settings?.whatsapp || '(11) 97060-4418'}</li>
              {settings?.email && <li>E-mail: {settings.email}</li>}
              <li>Endereço: {settings?.address || 'Av. Jabaquara, 1234 - Jabaquara, São Paulo - SP'}</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}