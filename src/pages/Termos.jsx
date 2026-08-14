import React from 'react';
import { motion } from "framer-motion";

export default function Termos({ settings }) {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-serif text-4xl text-[#1B4332] mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg prose-stone max-w-none">
            <p className="text-[#1B4332]/70 leading-relaxed">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">1. Aceitação dos termos</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Ao acessar e utilizar este site, você concorda com os termos e condições aqui estabelecidos.
              Se você não concordar com qualquer parte destes termos, não utilize nossos serviços.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">2. Uso do site</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Este site é destinado a fornecer informações sobre os serviços odontológicos oferecidos pela
              Green Smile Odontologia e permitir o contato para agendamento de consultas.
            </p>
            <p className="text-[#1B4332]/70 leading-relaxed">
              O conteúdo deste site tem caráter informativo e não substitui uma consulta profissional.
              Diagnósticos e tratamentos devem ser realizados presencialmente por profissionais habilitados.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">3. Propriedade intelectual</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é de propriedade
              da Green Smile Odontologia ou está devidamente licenciado, sendo protegido por leis de
              direitos autorais.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">4. Limitação de responsabilidade</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              A Green Smile não se responsabiliza por eventuais interrupções no acesso ao site ou por
              danos decorrentes do uso das informações aqui contidas para fins de autodiagnóstico ou
              autotratamento.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">5. Agendamento e consultas</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              O preenchimento de formulários neste site não garante agendamento automático. Nossa equipe
              entrará em contato para confirmar datas e horários disponíveis. Valores e condições de
              pagamento serão informados presencialmente.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">6. Alterações nos termos</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              A Green Smile reserva-se o direito de modificar estes termos a qualquer momento. As
              alterações entram em vigor imediatamente após sua publicação no site.
            </p>

            <h2 className="font-serif text-2xl text-[#1B4332] mt-8 mb-4">7. Contato</h2>
            <p className="text-[#1B4332]/70 leading-relaxed">
              Para dúvidas sobre estes termos, entre em contato:
            </p>
            <ul className="text-[#1B4332]/70 space-y-2 ml-6">
              <li>WhatsApp: {settings?.whatsapp || '(11) 97060-4418'}</li>
              {settings?.email && <li>E-mail: {settings.email}</li>}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}