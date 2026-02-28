import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X } from 'lucide-react';

interface Sale {
  name: string;
  city: string;
  state: string;
  time: string;
}

const sales: Sale[] = [
  { name: "Carlos M.", city: "São Paulo", state: "SP", time: "2 minutos atrás" },
  { name: "Ana Silva", city: "Rio de Janeiro", state: "RJ", time: "5 minutos atrás" },
  { name: "João Pedro", city: "Belo Horizonte", state: "MG", time: "8 minutos atrás" },
  { name: "Maria Santos", city: "Curitiba", state: "PR", time: "12 minutos atrás" },
  { name: "Ricardo L.", city: "Porto Alegre", state: "RS", time: "15 minutos atrás" },
  { name: "Patricia F.", city: "Salvador", state: "BA", time: "18 minutos atrás" },
  { name: "Fernando A.", city: "Brasília", state: "DF", time: "22 minutos atrás" },
  { name: "Juliana Costa", city: "Fortaleza", state: "CE", time: "25 minutos atrás" },
  { name: "Marcos Vinicius", city: "Manaus", state: "AM", time: "28 minutos atrás" },
  { name: "Camila R.", city: "Recife", state: "PE", time: "32 minutos atrás" }
];

export default function SalesNotifications() {
  const [currentSale, setCurrentSale] = useState<Sale | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      const randomSale = sales[Math.floor(Math.random() * sales.length)];
      setCurrentSale(randomSale);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const initialDelay = setTimeout(() => {
      showNotification();
      const interval = setInterval(showNotification, 15000);
      return () => clearInterval(interval);
    }, 3000);

    return () => clearTimeout(initialDelay);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && currentSale && (
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-20 lg:bottom-8 left-4 z-40 bg-[#0F1520] border-2 border-[#00C853] rounded-lg shadow-2xl max-w-sm"
        >
          <div className="p-4">
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-[#8B95A8] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-[#00C853]" />
              </div>
              <div className="flex-1">
                <div className="font-bold text-white mb-1">Nova matrícula confirmada!</div>
                <div className="text-sm text-[#8B95A8]">
                  <span className="text-white font-semibold">{currentSale.name}</span> de{' '}
                  <span className="text-white">{currentSale.city} - {currentSale.state}</span>
                </div>
                <div className="text-xs text-[#8B95A8] mt-1">{currentSale.time}</div>
              </div>
            </div>
          </div>
          <div className="h-1 bg-[#00C853] rounded-b-lg animate-shrink-width"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
