import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Users,
  Award,
  Lock,
  CreditCard,
  RotateCcw,
  Zap,
  TrendingUp,
  Star,
  ChevronDown,
  Shield,
  Smartphone,
  Box,
  Bot,
  FileText,
  Infinity as InfinityIcon
} from 'lucide-react';
import { useCountdown } from './hooks/useCountdown';
import { useCountUp } from './hooks/useCountUp';
import SalesNotifications from './components/SalesNotifications';
import ExitPopup from './components/ExitPopup';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const linkPagamento = "https://pay.hotmart.com/K84654845I?off=032huz23&checkoutMode=10";

  const courses = [
    "Bombas Centrífugas",
    "Transportadores de correia",
    "Mancais e Rolamentos",
    "Redutores e engrenagens",
    "Elementos de vedação",
    "Acoplamentos Mecânico",
    "Peneiras Vibratórias",
    "Válvulas Industriais",
    "Hidráulica Industrial",
    "Monitoramento On-line de Ativos",
    "Inglês Básico",
    "Lubrificação industrial",
    "Metrologia",
    "Técnicas de Confiabilidade",
    "Pneumática Industrial",
    "Elementos Filtrantes",
    "Compressores",
    "IA para Inspeção de Equipamentos",
    "TPM - Manutenção Produtiva Total",
    "SAP - Módulo Manutenção",
    "PCM - Planejamento e controle da manutenção",
    "Trocadores de Calor",
    "Termografia Industrial"
  ];

  const painPoints = [
    { icon: "😤", text: "Fica sem resposta quando o chefe pergunta sobre a falha" },
    { icon: "📉", text: "Vê colegas sendo promovidos enquanto você fica parado" },
    { icon: "📚", text: "Estudou por conta, mas ainda não se sente seguro" },
    { icon: "💸", text: "Não consegue aumentar o salário sem uma qualificação reconhecida" },
    { icon: "🔧", text: "Passa horas resolvendo problemas que poderiam ser evitados" },
    { icon: "🤷", text: "Não sabe por onde começar para se especializar de verdade" }
  ];

  const benefits = [
    {
      icon: <Box className="w-12 h-12" />,
      title: "Tecnologia 3D Interativa",
      desc: "Visualize peças e montagens em 3D diretamente nas aulas"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "MecChat (IA exclusiva)",
      desc: "Tire dúvidas técnicas com inteligência artificial especializada em mecânica"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "FMEAs e Planos de Inspeção",
      desc: "Documentos prontos para aplicar imediatamente no trabalho"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Acesso em qualquer dispositivo",
      desc: "Celular, tablet, notebook ou TV, onde quiser"
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Certificado reconhecido",
      desc: "Válido nacionalmente conforme Lei 9.394/96 do MEC"
    },
    {
      icon: <InfinityIcon className="w-12 h-12" />,
      title: "Acesso Vitalício",
      desc: "Pague uma vez e acesse para sempre, incluindo novos cursos"
    }
  ];

  const testimonials = [
    {
      name: "Carlos M.",
      role: "Técnico de Manutenção",
      company: "SP",
      text: "Após o curso de rolamentos, fui promovido a técnico sênior em 4 meses. O conteúdo 3D é diferente de tudo que eu já vi.",
      initials: "CM"
    },
    {
      name: "Ricardo P.",
      role: "Mecânico Industrial",
      company: "MG",
      text: "O MecChat me ajudou a resolver um problema que a empresa tentava resolver há 3 meses. Valeu cada centavo.",
      initials: "RP"
    },
    {
      name: "João S.",
      role: "Operador Industrial",
      company: "RS",
      text: "Finalmente um curso que vai direto ao ponto. Em 2 semanas já estava aplicando no trabalho.",
      initials: "JS"
    }
  ];

  const faqs = [
    {
      q: "Por quanto tempo terei acesso ao conteúdo?",
      a: "Você terá acesso VITALÍCIO! Pague uma vez e acesse para sempre, incluindo todos os cursos futuros que lançarmos. Sem mensalidades, sem renovações."
    },
    {
      q: "O certificado é reconhecido?",
      a: "Sim! Nosso certificado é válido em todo o Brasil, conforme a Lei 9.394/96 do MEC. Você pode utilizá-lo para comprovar horas complementares, processos seletivos e promoções."
    },
    {
      q: "Posso assistir no celular?",
      a: "Sim! A plataforma funciona perfeitamente em celulares, tablets, notebooks e Smart TVs. Você pode estudar de onde estiver, até mesmo offline baixando as aulas."
    },
    {
      q: "Como recebo meu acesso?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso. Em minutos você já pode começar a estudar!"
    },
    {
      q: "Qual a forma de pagamento?",
      a: "Aceitamos PIX, cartão de crédito (em até 12x sem juros) e boleto bancário."
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia."
    },
    {
      q: "Vou receber os cursos futuros sem pagar nada a mais?",
      a: "SIM! Todos os cursos que lançarmos no futuro serão automaticamente adicionados à sua conta, sem custo adicional. Você paga uma vez e tem acesso para sempre."
    },
    {
      q: "Preciso ter experiência prévia em mecânica?",
      a: "Não necessariamente. Os cursos são estruturados desde o nível básico até avançado. Se você já trabalha na área, vai aprofundar seus conhecimentos. Se está começando, vai aprender do zero."
    }
  ];

  const alunosCount = useCountUp(15000, 2000);
  const cursosCount = useCountUp(23, 1500);
  const avaliacaoCount = useCountUp(49, 1500);

  return (
    <div className="min-h-screen">
      <SalesNotifications />
      <ExitPopup checkoutUrl={linkPagamento} />

      {/* HERO SECTION */}
      <section className="pt-12 sm:pt-16 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
          >
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              <motion.div variants={cardVariants} className="inline-flex items-center gap-2 bg-[#0F1520] border border-[#FF3B30] px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-[#FF3B30] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF3B30]"></span>
                </span>
                <span className="text-white font-bold text-sm uppercase">LIVE • VAGAS LIMITADAS</span>
              </motion.div>

              <motion.h1 variants={cardVariants} className="text-4xl sm:text-5xl lg:text-7xl leading-tight">
                TORNE-SE UM<br />
                <span className="text-[#FF6B00]">ESPECIALISTA</span> EM<br />
                <span className="text-outline">MECÂNICA INDUSTRIAL</span>
              </motion.h1>

              <motion.p variants={cardVariants} className="text-lg sm:text-xl text-[#8B95A8] leading-relaxed">
                23 cursos + futuros lançamentos com acesso vitalício. Aprenda com tecnologia 3D, IA integrada e conquiste a promoção que você merece na indústria.
              </motion.p>

              <motion.div variants={cardVariants} className="grid grid-cols-3 gap-4 py-6">
                <div className="text-center">
                  <div ref={alunosCount.ref} className="text-3xl sm:text-4xl font-black text-[#FF6B00]">+{alunosCount.count.toLocaleString()}</div>
                  <div className="text-xs sm:text-sm text-[#8B95A8] mt-1">alunos formados</div>
                </div>
                <div className="text-center">
                  <div ref={cursosCount.ref} className="text-3xl sm:text-4xl font-black text-[#FF6B00]">{cursosCount.count}</div>
                  <div className="text-xs sm:text-sm text-[#8B95A8] mt-1">cursos inclusos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-black text-[#FF6B00]">100%</div>
                  <div className="text-xs sm:text-sm text-[#8B95A8] mt-1">online vitalício</div>
                </div>
              </motion.div>

              <motion.div variants={cardVariants} className="flex items-start gap-3 bg-[#0F1520] border border-[rgba(255,107,0,0.15)] p-4 rounded-lg">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] flex items-center justify-center text-white font-bold flex-shrink-0">
                  AM
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-white">André Martins</span>
                    <span className="text-[#8B95A8] text-sm">• Supervisor de Manutenção</span>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FFD600] text-[#FFD600]" />)}
                  </div>
                  <p className="text-sm text-[#8B95A8]">"A melhor decisão que tomei para minha carreira. Conteúdo extremamente prático e aplicável."</p>
                </div>
              </motion.div>
            </div>

            {/* Coluna Direita - Card de Compra */}
            <motion.div
              variants={cardVariants}
              className="bg-[#0F1520] border-t-4 border-t-[#FF6B00] rounded-lg p-6 sm:p-8 shadow-[0_8px_40px_rgba(255,107,0,0.25)] animate-border-pulse lg:sticky lg:top-24"
            >
              <div className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-4 py-2 rounded-full mb-4 font-bold">
                🔥 OFERTA ESPECIAL
              </div>

              <div className="mb-6">
                <div className="text-[#8B95A8] line-through text-lg mb-2">De R$ 497,00</div>
                <div className="text-5xl sm:text-6xl font-black text-white mb-2">12x R$ 17<span className="text-2xl">,10</span></div>
                <div className="text-[#8B95A8] text-lg mb-3">no cartão de crédito</div>
                <div className="flex items-center gap-2 text-[#00C853] font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>ou R$ 156,00 à vista no PIX</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "23 cursos + futuros lançamentos",
                  "Tecnologia 3D interativa nas aulas",
                  "MecChat — IA para dúvidas técnicas",
                  "Certificado válido em todo Brasil (Lei 9.394/96)",
                  "Garantia de 7 dias sem burocracia"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                    <span className="text-[#F0F4FA]">{item}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href={linkPagamento}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="block w-full bg-[#00C853] hover:bg-[#00D65C] text-black text-center font-black text-lg py-4 rounded-lg mb-3 transition-all ripple neon-pulse-green"
              >
                🔒 GARANTIR MINHA VAGA AGORA
              </motion.a>

              <p className="text-center text-sm text-[#8B95A8] mb-4">Acesso imediato após o pagamento</p>

              <button
                onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full border-2 border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-black font-bold py-3 rounded-lg transition-all"
              >
                Ver grade completa de aulas ↓
              </button>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-[rgba(255,107,0,0.15)] text-xs text-center text-[#8B95A8]">
                <div className="flex flex-col items-center gap-1">
                  <Lock className="w-4 h-4" />
                  <span>Compra segura</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <CreditCard className="w-4 h-4" />
                  <span>12x sem juros</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <RotateCcw className="w-4 h-4" />
                  <span>7 dias garantia</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VÍDEOS DEMONSTRATIVOS */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1520]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">
              VEJA COMO FUNCIONA NA PRÁTICA
            </h2>
            <p className="text-lg sm:text-xl text-[#8B95A8] max-w-3xl mx-auto">
              Assista aos vídeos e descubra por que nossos alunos estão conquistando promoções e melhores salários
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div variants={cardVariants} className="bg-[#1A1F2E] rounded-lg overflow-hidden border border-[rgba(255,107,0,0.15)] hover:border-[#FF6B00] transition-all">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/9FGcRpQIpdlqcWcdAbribLWyXhKcDq4v.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Tecnologia 3D Interativa</h3>
                <p className="text-[#8B95A8]">Aprenda com visualizações em 3D que tornam conceitos complexos simples de entender</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-[#1A1F2E] rounded-lg overflow-hidden border border-[rgba(255,107,0,0.15)] hover:border-[#FF6B00] transition-all">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/xc9rEgDMf2pwC8VXQEVU6ucQ1SvsL66c.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Conteúdo Prático e Aplicável</h3>
                <p className="text-[#8B95A8]">Aulas direto ao ponto com situações reais da indústria</p>
              </div>
            </motion.div>

            <motion.div variants={cardVariants} className="bg-[#1A1F2E] rounded-lg overflow-hidden border border-[rgba(255,107,0,0.15)] hover:border-[#FF6B00] transition-all">
              <div className="aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/mctbDZwsxOPXZWlr65kFVVT3TWwKKiWN.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Resultados Comprovados</h3>
                <p className="text-[#8B95A8]">Veja como nossos alunos aplicam o conhecimento no dia a dia</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="text-center mt-12"
          >
            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#00C853] hover:bg-[#00D65C] text-black font-black text-xl px-10 py-5 rounded-lg transition-all neon-pulse-green"
            >
              🔒 QUERO ACESSO COMPLETO AGORA
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* BARRA DE PROVA SOCIAL */}
      <section className="bg-[#0F1520] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div ref={alunosCount.ref} className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-2">
                {alunosCount.count.toLocaleString()}+
              </div>
              <div className="text-sm sm:text-base text-[#8B95A8]">Alunos ativos</div>
            </div>
            <div className="text-center">
              <div ref={cursosCount.ref} className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-2">
                {cursosCount.count}
              </div>
              <div className="text-sm sm:text-base text-[#8B95A8]">Cursos disponíveis</div>
            </div>
            <div className="text-center">
              <div ref={avaliacaoCount.ref} className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-2">
                {(avaliacaoCount.count / 10).toFixed(1)}★
              </div>
              <div className="text-sm sm:text-base text-[#8B95A8]">Avaliação média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-2">7 dias</div>
              <div className="text-sm sm:text-base text-[#8B95A8]">Garantia total</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DOR */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-4">Isso parece familiar?</h2>
          <p className="text-lg sm:text-xl text-[#8B95A8] text-center mb-12 max-w-3xl mx-auto">
            Se você se identifica com algum desses pontos, esse combo foi feito para você:
          </p>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {painPoints.map((pain, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#0F1520] border-t-2 border-t-[#FF3B30] p-6 rounded-lg"
              >
                <div className="text-4xl mb-4">{pain.icon}</div>
                <p className="text-[#F0F4FA] leading-relaxed">{pain.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] p-8 rounded-lg text-center"
          >
            <p className="text-xl sm:text-2xl font-bold text-black mb-6">
              Se você marcou pelo menos 1 item acima, o Combo Vitalício foi desenvolvido exatamente para resolver isso.
            </p>
            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF3B30] hover:bg-[#FF1B10] text-white font-black text-xl px-10 py-4 rounded-lg transition-all neon-pulse-red"
            >
              QUERO RESOLVER ISSO AGORA
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* GRADE DE CURSOS */}
      <motion.section
        id="courses"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-4">23 CURSOS QUE VÃO TRANSFORMAR SUA CARREIRA</h2>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-12 mb-8"
          >
            {courses.map((course, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#0F1520] border border-[rgba(255,107,0,0.15)] hover:border-[#FF6B00] p-6 rounded-lg transition-all flex items-start gap-4"
              >
                <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{course}</h3>
                  <span className="inline-block bg-[#00C853] text-black text-xs font-bold px-3 py-1 rounded-full">INCLUSO</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#00C853] hover:bg-[#00D65C] text-black font-black text-xl px-12 py-5 rounded-lg transition-all neon-pulse-green"
            >
              GARANTIR ACESSO A 23 CURSOS →
            </motion.a>

            <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#FFD600] to-[#FF8C00] px-6 py-4 rounded-lg">
              <span className="text-3xl">🎁</span>
              <span className="text-black font-bold text-lg">BÔNUS: Acesso a todos os NOVOS cursos futuros sem pagar nada a mais</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* DIFERENCIAIS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-16">Por que somos diferentes de qualquer curso que você já viu</h2>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#0F1520] border border-[rgba(255,107,0,0.15)] hover:border-[#FF6B00] p-8 rounded-lg text-center transition-all"
              >
                <div className="text-[#FF6B00] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-[#8B95A8] leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#FF3B30] hover:bg-[#FF1B10] text-white font-black text-xl px-12 py-5 rounded-lg transition-all neon-pulse-red"
            >
              QUERO ESSAS VANTAGENS AGORA
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* COMO FUNCIONA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-16">3 PASSOS PARA COMEÇAR HOJE</h2>

          <div className="grid sm:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/4 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#FF8C00] to-[#FFD600] hidden sm:block" style={{ zIndex: 0 }}></div>

            {[
              { icon: <CreditCard className="w-16 h-16" />, title: "Faça sua matrícula", desc: "Clique no botão, escolha PIX ou cartão" },
              { icon: <Zap className="w-16 h-16" />, title: "Receba o acesso", desc: "Chega no seu e-mail em minutos" },
              { icon: <TrendingUp className="w-16 h-16" />, title: "Comece a aprender", desc: "Acesse imediatamente de qualquer dispositivo" }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="relative bg-[#0F1520] border-2 border-[#FF6B00] p-8 rounded-lg text-center z-10"
              >
                <div className="w-12 h-12 bg-[#FF6B00] text-black font-black text-2xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {i + 1}
                </div>
                <div className="text-[#FF6B00] mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-[#8B95A8]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* DEPOIMENTOS */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-16">O que nossos alunos estão dizendo</h2>

          <motion.div
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#0F1520] border border-[rgba(255,107,0,0.15)] p-6 rounded-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {testimonial.initials}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-white mb-1">{testimonial.name}</div>
                    <div className="text-sm text-[#8B95A8]">{testimonial.role}</div>
                    <div className="text-sm text-[#8B95A8]">{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-4 h-4 fill-[#FFD600] text-[#FFD600]" />)}
                </div>
                <p className="text-[#F0F4FA] leading-relaxed">{testimonial.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-bold text-[#FF6B00] mb-8">
              +15.000 profissionais já transformaram suas carreiras
            </p>
            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#00C853] hover:bg-[#00D65C] text-black font-black text-xl px-12 py-5 rounded-lg transition-all neon-pulse-green"
            >
              EU TAMBÉM QUERO ME QUALIFICAR
            </motion.a>
          </div>
        </div>
      </motion.section>

      {/* SEGUNDA ÁREA DE COMPRA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0F1520]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4">INVISTA NA SUA CARREIRA HOJE</h2>
          <p className="text-xl sm:text-2xl text-[#8B95A8] mb-12">Acesso a 23 cursos com investimento acessível</p>

          <motion.div
            variants={cardVariants}
            className="bg-[#111827] border-4 border-[#FF6B00] rounded-lg p-8 sm:p-12 max-w-lg mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#FF3B30] text-white px-6 py-3 rounded-full mb-6 font-bold">
              🔥 OFERTA ESPECIAL
            </div>

            <div className="mb-6">
              <div className="text-[#8B95A8] line-through text-xl mb-2">De R$ 497,00</div>
              <div className="text-5xl sm:text-6xl font-black mb-3">12x R$ 17<span className="text-2xl">,10</span></div>
              <div className="text-[#8B95A8] text-lg mb-2">no cartão de crédito</div>
              <div className="flex items-center justify-center gap-2 text-[#00C853] font-bold text-lg">
                <CheckCircle2 className="w-6 h-6" />
                <span>ou R$ 156,00 à vista no PIX</span>
              </div>
            </div>

            <motion.a
              href={linkPagamento}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full bg-[#00C853] hover:bg-[#00D65C] text-black text-center font-black text-xl py-5 rounded-lg mb-6 transition-all neon-pulse-green"
            >
              QUERO GARANTIR MINHA VAGA
            </motion.a>

            <div className="flex items-center justify-center gap-4 text-[#8B95A8] text-sm">
              <div className="flex items-center gap-2">
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24' viewBox='0 0 40 24'%3E%3Crect fill='%231A1F71' width='40' height='24' rx='4'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='Arial' font-size='10' font-weight='bold'%3EVISA%3C/text%3E%3C/svg%3E" alt="Visa" className="h-6" />
                <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='24' viewBox='0 0 40 24'%3E%3Crect fill='%23EB001B' width='40' height='24' rx='4'/%3E%3Ccircle cx='15' cy='12' r='7' fill='%23EB001B'/%3E%3Ccircle cx='25' cy='12' r='7' fill='%23F79E1B'/%3E%3C/svg%3E" alt="Mastercard" className="h-6" />
                <span className="font-bold text-[#00C853]">PIX</span>
              </div>
              <Lock className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* GARANTIA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="w-24 h-24 text-[#00C853] mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6">GARANTIA INCONDICIONAL DE 7 DIAS</h2>
          <p className="text-xl sm:text-2xl text-[#8B95A8] leading-relaxed mb-8">
            Se por qualquer motivo você não ficar satisfeito nos primeiros 7 dias, devolvemos 100% do seu investimento. Sem perguntas, sem burocracia.
          </p>
          <motion.a
            href={linkPagamento}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#FF3B30] hover:bg-[#FF1B10] text-white font-black text-xl px-12 py-5 rounded-lg transition-all neon-pulse-red"
          >
            TESTAR SEM RISCOS AGORA
          </motion.a>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#111827]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mb-12">PERGUNTAS FREQUENTES</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                className="bg-[#0F1520] border border-[rgba(255,107,0,0.15)] rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[rgba(255,107,0,0.05)] transition-colors"
                >
                  <span className="text-lg font-bold text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#FF6B00] flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[#8B95A8] leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA FINAL */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
        className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00] via-[#FF8C00] to-[#FFD600] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            NÃO DEIXE PARA AMANHÃ<br />O QUE PODE MUDAR SUA CARREIRA HOJE
          </h2>
          <p className="text-xl sm:text-2xl text-[#8B95A8] mb-12 leading-relaxed">
            Milhares de profissionais já deram esse passo. A diferença entre você e uma promoção pode ser essa decisão agora.
          </p>

          <motion.a
            href={linkPagamento}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-[#00C853] hover:bg-[#00D65C] text-black font-black text-2xl px-16 py-6 rounded-lg shadow-2xl transition-all neon-pulse-green"
          >
            GARANTIR ACESSO VITALÍCIO AGORA
          </motion.a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="bg-[#0F1520] border-t border-[rgba(255,107,0,0.15)] py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-[#FF6B00]" />
            <span className="text-2xl font-black text-white">MECÂNICA TOTAL</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm text-[#8B95A8]">
            <a href="#" className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-[#FF6B00] transition-colors">Termos de Uso</a>
          </div>

          <p className="text-xs text-[#8B95A8] max-w-3xl mx-auto leading-relaxed">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
          </p>

          <p className="text-xs text-[#8B95A8] mt-4">
            © 2024 Mecânica Total. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-t from-[#080B10] via-[#080B10] to-transparent pt-4 pb-4 px-4">
        <motion.a
          href={linkPagamento}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          className="block w-full bg-[#00C853] text-black text-center font-black text-lg py-4 rounded-lg shadow-2xl neon-pulse-green"
        >
          🔒 GARANTIR VAGA AGORA
        </motion.a>
      </div>
    </div>
  );
}

export default App;
