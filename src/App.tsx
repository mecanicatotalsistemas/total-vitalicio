import { useEffect, useState } from 'react';
import { Shield, CheckCircle, Mail, Phone, Zap, TrendingUp, Users } from 'lucide-react';

function App() {
  const [notifications, setNotifications] = useState<Array<{ id: number; text: string }>>([]);
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    let exitIntentShown = false;

    const handleMouseOut = (e: MouseEvent) => {
      if (!exitIntentShown && e.clientY < 50) {
        setShowExitPopup(true);
        exitIntentShown = true;
      }
    };

    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    const clientes = [
      { nome: "Gerson Jose", cidade: "Maracás - BA" },
      { nome: "Deivid Crisciullo", cidade: "Rio de Janeiro - RJ" },
      { nome: "Rafael Adame", cidade: "Paraty - RJ" },
      { nome: "Leandro Faustino", cidade: "Alagoinhas - BA" },
      { nome: "Raphael Luís", cidade: "São Bernardo do Campo - SP" },
      { nome: "Kelson Xavier", cidade: "Jacareí - SP" },
      { nome: "Cristiano Paulino", cidade: "Juquiá - SP" },
      { nome: "Evandro Poffo", cidade: "Joinville - SC" },
      { nome: "Victor Pastore", cidade: "Guarapari - ES" },
      { nome: "Maxwell Pinheiro", cidade: "São José de Ribamar - MA" },
      { nome: "Allan César", cidade: "Mongaguá - SP" },
      { nome: "Silvio Barbosa", cidade: "Patrocínio - MG" },
      { nome: "Anderson Duarte", cidade: "São Gonçalo - RJ" },
      { nome: "Railson Fernandes", cidade: "Barcarena - PA" },
      { nome: "Ewerton Douglas", cidade: "Ponta Grossa - PR" },
      { nome: "Everton Da", cidade: "Gravataí - RS" },
      { nome: "Edilton Leonardy", cidade: "Salvador - BA" },
      { nome: "Virgilio Carvalho", cidade: "Lauro de Freitas - BA" },
      { nome: "Célio Pereira", cidade: "Várzea Paulista - SP" },
      { nome: "Felipe Goncalves", cidade: "Telêmaco Borba - PR" }
    ];

    const showNotification = () => {
      const cliente = clientes[Math.floor(Math.random() * clientes.length)];

      const id = Date.now();
      const newNotification = {
        id,
        text: `${cliente.nome} de ${cliente.cidade} garantiu o acesso vitalício!`
      };

      setNotifications(prev => [...prev, newNotification]);

      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== id));
      }, 6000);
    };

    const notificationInterval = setInterval(showNotification, 20000);
    setTimeout(showNotification, 3000);

    return () => clearInterval(notificationInterval);
  }, []);

  const linkPagamento = "https://pay.hotmart.com/K84654845I?off=1itzus27&checkoutMode=10";

  const courses = [
    "1. Curso sobre Bombas Centrífugas",
    "2. Curso sobre Transportadores de Correia",
    "3. Curso sobre Mancais e Rolamentos",
    "4. Curso sobre Redutores e Engrenagens",
    "5. Curso sobre Elementos de Vedação",
    "6. Curso sobre Acoplamentos Mecânicos",
    "7. Curso sobre Peneiras Vibratórias",
    "8. Curso sobre Válvulas Industriais",
    "9. Curso sobre Hidráulica Industrial",
    "10. Curso sobre Monitoramento On-line de Ativos",
    "11. Curso sobre Inglês Básico",
    "12. Curso sobre Lubrificação Industrial",
    "13. Curso sobre Metrologia",
    "14. Curso sobre Técnicas de Confiabilidade",
    "15. Curso sobre Pneumática Industrial",
    "16. Curso sobre Elementos Filtrantes",
    "17. Curso sobre Compressores",
    "18. Curso sobre IA para Inspeção de Equipamentos",
    "19. Curso sobre TPM - Manutenção Produtiva Total",
    "20. Curso sobre SAP - Módulo Manutenção",
    "21. Curso sobre PCM - Planejamento e Controle da Manutenção",
    "22. Curso sobre Trocadores de Calor"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#004aad] via-[#0056c9] to-[#003d8f]">
      <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2 leading-tight drop-shadow-2xl">
              UPGRADE VITALÍCIO - LIBERADO
            </h2>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-400 mb-6 drop-shadow-xl">
              Aniversário Mecânica Total
            </p>
          </div>

          <div className="flex items-center justify-center mb-6">
            <img
              src="https://static-media.hotmart.com/_Qtpx6CJ3KcK3YgAuuOLAfvSFlU=/1024x545/filters:quality(100)/hotmart/checkout_custom/6aac451f-bdfc-4bd2-a364-224a622eabd3/th1xkm2p8.jpeg"
              alt="Mecânica Total"
              className="w-full max-w-2xl rounded-2xl shadow-2xl border-4 border-white/30"
            />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
            COMBO VITALÍCIO<br />
            <span className="text-orange-400 animate-pulse">MECÂNICA TOTAL</span>
          </h1>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg sm:text-xl px-6 py-3 rounded-full inline-block mb-6 shadow-2xl animate-pulse-cta">
            Pague uma vez, e tenha acesso a todos os cursos
          </div>

          <p className="text-xl sm:text-2xl text-white mb-8 max-w-3xl mx-auto font-semibold drop-shadow-lg">
            Acesso imediato a 22 cursos + TODOS os futuros lançamentos sem pagar nada a mais!
          </p>

          <a
            href={linkPagamento}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl sm:text-2xl px-12 py-5 rounded-2xl shadow-2xl animate-pulse-cta uppercase cursor-pointer"
          >
            SIM! QUERO ACESSO VITALÍCIO AGORA
          </a>

          <p className="text-white text-sm mt-4 opacity-90">Oferta por tempo limitado - Não perca!</p>
        </div>

        <div className="bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-2xl p-6 mb-8 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-6 text-center text-white">
            <div className="space-y-2">
              <Users className="w-12 h-12 mx-auto text-orange-400" />
              <p className="text-3xl font-black">+14.000</p>
              <p className="text-lg font-semibold">Alunos Satisfeitos</p>
            </div>
            <div className="space-y-2">
              <Zap className="w-12 h-12 mx-auto text-orange-400" />
              <p className="text-3xl font-black">22 Cursos</p>
              <p className="text-lg font-semibold">Acesso Imediato</p>
            </div>
            <div className="space-y-2">
              <TrendingUp className="w-12 h-12 mx-auto text-orange-400" />
              <p className="text-3xl font-black">VITALÍCIO</p>
              <p className="text-lg font-semibold">Acesso Ilimitado</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl border-4 border-orange-500">
          <h2 className="text-3xl sm:text-4xl font-black text-[#004aad] mb-6 text-center">
            O QUE VOCÊ VAI RECEBER HOJE:
          </h2>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {courses.map((course, index) => (
              <div key={index} className="flex items-start space-x-2 bg-blue-50 p-3 rounded-lg border border-blue-200">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-[#004aad] text-lg font-semibold">{course}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-300 p-6 rounded-xl mt-6 border-2 border-orange-500">
            <p className="text-2xl font-black text-[#004aad] text-center mb-4">
              BÔNUS EXCLUSIVOS:
            </p>
            <div className="space-y-3">
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                TODOS os novos cursos futuros sem pagar nada a mais!
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Certificado em todos os cursos
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Aulas com modelos 3D
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Suporte 24h
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Mais de 200 apostilas e 500 Elementos de Máquinas 3D
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Acesso 24/7
              </p>
              <p className="text-lg font-bold text-[#004aad] flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" />
                Material de Diagnóstico para otimização de performance
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <a
            href={linkPagamento}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-2xl px-12 py-6 rounded-full shadow-2xl animate-pulse-cta border-4 border-white uppercase cursor-pointer"
          >
            QUERO ME MATRICULAR AGORA
            <CheckCircle className="w-8 h-8" />
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl border-2 border-[#004aad]">
          <h3 className="text-3xl font-black text-[#004aad] mb-6 text-center">VEJA COMO SÃO NOSSAS AULAS:</h3>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h4 className="text-2xl font-bold text-[#004aad] mb-4">Aulas com elementos de máquinas 3D</h4>
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg mb-2"
                preload="metadata"
              >
                <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/9FGcRpQIpdlqcWcdAbribLWyXhKcDq4v.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h4 className="text-2xl font-bold text-[#004aad] mb-4">Aulas com montagem e desmontagem</h4>
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg mb-2"
                preload="metadata"
              >
                <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/xc9rEgDMf2pwC8VXQEVU6ucQ1SvsL66c.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-orange-500">
              <h4 className="text-2xl font-bold text-[#004aad] mb-4">Dicas técnicas por quem viveu manutenção no campo</h4>
              <video
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full rounded-lg shadow-lg mb-2"
                preload="metadata"
              >
                <source src="https://s4-lb.1app.com.br/path/https://s3.1app.com.br/master/project_3969/mctbDZwsxOPXZWlr65kFVVT3TWwKKiWN.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl border-2 border-[#004aad]">
          <h3 className="text-3xl font-black text-[#004aad] mb-6 text-center">VEJA O QUE NOSSOS ALUNOS DIZEM:</h3>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-[#004aad]">
              <div className="flex items-center mb-3">
                <div className="flex text-orange-500 text-xl">★★★★★</div>
              </div>
              <p className="text-[#004aad] mb-2 font-bold text-lg">
                Jéssica L. - Curitiba, PR
              </p>
              <p className="text-gray-700 text-lg italic">
                "Assinei ano passado e já recebi acesso a 3 cursos novos sem custo. Vale MUITO a pena! Melhor investimento da minha carreira."
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-[#004aad]">
              <div className="flex items-center mb-3">
                <div className="flex text-orange-500 text-xl">★★★★★</div>
              </div>
              <p className="text-[#004aad] mb-2 font-bold text-lg">
                Fábio S. - Rio de Janeiro, RJ
              </p>
              <p className="text-gray-700 text-lg italic">
                "Certificados técnicos reconhecidos. O combo mais completo da área! Consegui promoção depois de fazer 5 cursos."
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg border-l-4 border-[#004aad]">
              <div className="flex items-center mb-3">
                <div className="flex text-orange-500 text-xl">★★★★★</div>
              </div>
              <p className="text-[#004aad] mb-2 font-bold text-lg">
                Rodrigo M. - São Paulo, SP
              </p>
              <p className="text-gray-700 text-lg italic">
                "Paguei uma vez e já tenho acesso há 2 anos! Vieram 6 cursos novos e não paguei nada. Simplesmente perfeito!"
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 border-4 border-orange-500 rounded-2xl p-8 mb-8 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <Shield className="w-20 h-20 text-white mr-6 flex-shrink-0 mb-4 md:mb-0" />
            <div className="text-white">
              <h3 className="text-3xl font-black mb-3">
                GARANTIA BLINDADA DE 7 DIAS
              </h3>
              <p className="text-xl font-semibold">
                Se não ficar satisfeito, devolvemos 100% do seu dinheiro. Zero risco! Compra 100% segura via Hotmart.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <a
            href={linkPagamento}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-black text-xl sm:text-2xl px-12 py-6 rounded-2xl shadow-2xl animate-pulse-cta uppercase border-4 border-white cursor-pointer"
          >
            GARANTIR ACESSO VITALÍCIO AGORA
          </a>
          <p className="text-white text-lg mt-4 font-bold drop-shadow-lg">Pagamento único - Sem mensalidades - Acesso para sempre!</p>
        </div>

        <div className="bg-white rounded-2xl p-8 text-center shadow-2xl border-2 border-[#004aad]">
          <h3 className="text-2xl font-bold text-[#004aad] mb-4">Mecânica Total®</h3>
          <p className="text-gray-600 mb-4 font-semibold">CNPJ: 29.705.491/0001-58</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-700">
            <a href="mailto:suporte@mecanicatotalbrasil.com.br" className="flex items-center hover:text-[#004aad] transition font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              suporte@mecanicatotalbrasil.com.br
            </a>
            <a href="tel:+5527993222442" className="flex items-center hover:text-[#004aad] transition font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              +55 27 99322-2442
            </a>
          </div>
        </div>
      </div>

      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="fixed bottom-5 left-5 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-2xl z-50 max-w-[90vw] text-base font-bold border-2 border-white animate-bounce"
        >
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            {notification.text}
          </div>
        </div>
      ))}

      {showExitPopup && (
        <div className="fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full text-center shadow-2xl">
            <h2 className="text-3xl font-black text-red-600 mb-4">🚨 Ei! Não vá embora!</h2>
            <p className="text-gray-700 text-lg mb-6">
              Fale agora com um especialista da nossa equipe no WhatsApp e tire todas as dúvidas!
            </p>

            <a
              href="https://wa.me/message/WCJ7UXSCWWVVH1?text=Quero%20acesso%20vital%C3%ADcio%20a%20todos%20os%20cursos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#25d366] hover:bg-[#1fb855] text-white font-bold text-lg px-8 py-4 rounded-lg mb-4 transition w-full"
            >
              👉 Falar no WhatsApp
            </a>

            <button
              onClick={() => setShowExitPopup(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-lg transition w-full"
            >
              Continuar navegando
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
