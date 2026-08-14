import React from 'react';
import { motion } from "framer-motion";


export default function WhatsAppButton({ whatsapp }) {
  const cleanWhatsapp = (whatsapp || '5511970604418').replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${cleanWhatsapp}?text=Olá! Gostaria de agendar uma avaliação.`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 flex items-center gap-3 group"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.554 4.118 1.528 5.855L0 24l6.341-1.508A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 0 1-5.034-1.378l-.361-.214-3.741.981.999-3.648-.235-.374A9.856 9.856 0 0 1 2.118 12C2.118 6.532 6.532 2.118 12 2.118S21.882 6.532 21.882 12 17.468 21.882 12 21.882z"/>
      </svg>
      <span className="max-w-0 overflow-hidden group-hover:max-w-[150px] transition-all duration-300 whitespace-nowrap font-medium">
        Fale conosco
      </span>
    </motion.a>
  );
}