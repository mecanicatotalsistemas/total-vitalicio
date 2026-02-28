import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertCircle } from 'lucide-react';

interface ExitPopupProps {
  checkoutUrl: string;
}

export default function ExitPopup({ checkoutUrl }: ExitPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0F1520] border-4 border-[#FF3B30] rounded-2xl max-w-2xl w-full relative overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 text-[#8B95A8] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 sm:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              >
                <AlertCircle className="w-20 h-20 text-[#FF3B30] mx-auto mb-6" />
              </motion.div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
                ESPERE! NÃO PERCA ESSA OPORTUNIDADE
              </h2>

              <p className="text-xl sm:text-2xl text-[#8B95A8] mb-6">
                Você está a um clique de transformar sua carreira na mecânica industrial!
              </p>

              <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] p-6 rounded-lg mb-8">
                <p className="text-xl font-bold text-black mb-4">
                  🎁 ÚLTIMA CHANCE: OFERTA ESPECIAL
                </p>
                <div className="text-4xl sm:text-5xl font-black text-white mb-2">
                  12x R$ 17<span className="text-2xl">,10</span>
                </div>
                <div className="text-lg text-black font-bold">
                  ou R$ 156,00 à vista no PIX (10% desconto)
                </div>
              </div>

              <div className="space-y-3 mb-8 text-left">
                {[
                  "✅ 23 cursos completos + futuros lançamentos",
                  "✅ Acesso vitalício sem mensalidades",
                  "✅ Certificado reconhecido nacionalmente",
                  "✅ 7 dias de garantia total"
                ].map((item, i) => (
                  <div key={i} className="text-[#F0F4FA] text-lg flex items-center gap-3">
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block w-full bg-[#00C853] hover:bg-[#00D65C] text-black text-center font-black text-xl py-5 rounded-lg mb-4 transition-all neon-pulse-green"
              >
                🔒 SIM! QUERO GARANTIR MINHA VAGA
              </motion.a>

              <button
                onClick={handleClose}
                className="text-[#8B95A8] hover:text-white text-sm underline transition-colors"
              >
                Não, prefiro continuar sem qualificação
              </button>
            </div>

            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF3B30] via-[#FF6B00] to-[#FFD600]"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
