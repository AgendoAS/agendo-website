import { useState } from 'react';

export default function Produtos() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setErro(false);

    try {
      const response = await fetch('https://formspree.io/f/mwvjljpl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          message: mensagem,
          _subject: 'Interesse em conhecer os produtos - AGENDO',
          _replyto: email
        })
      });

      if (response.ok) {
        setEnviado(true);
        setEmail('');
        setMensagem('');
        setTimeout(() => setEnviado(false), 5000);
      } else {
        setErro(true);
      }
    } catch (err) {
      setErro(true);
      console.error('Erro ao enviar:', err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Nossos Produtos</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Soluções digitais que transformam a gestão e a captação de recursos para OSCs
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="text-5xl">🖥️</div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Agendo Integra – Sistema de Gestão Integrada para OSCs</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O Agendo Integra é uma plataforma SaaS (software como serviço) desenvolvida especificamente para automatizar processos, garantir a transparência e trazer eficiência total no monitoramento de parcerias públicas e privadas. Desenhado sob os rigorosos pilares de fiscalização exigidos pelo MROSC, o sistema mitiga erros humanos e blinda a instituição contra o risco de rejeição de contas.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Formato Básico (Foco em Gestão)</h3>
                <p className="text-gray-700">
                  Ideal para a centralização da administração interna da OSC. Centraliza o controle de certidões negativas, o gerenciamento de documentação institucional e as rotinas preventivas de prestação de contas, garantindo que a entidade permaneça sempre regularizada perante os órgãos de controle.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Formato Pleno (Gestão Total + Projetos)</h3>
                <p className="text-gray-700">
                  Uma solução de ponta a ponta que une todas as ferramentas do formato básico a módulos avançados de execução. Permite o gerenciamento dinâmico de metas, o monitoramento de indicadores de impacto social, o controle estrito de cronogramas físico-financeiros de desembolso e o acompanhamento de dados em tempo real para auditorias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <div className="flex items-start gap-6">
          <div className="text-5xl">🔍</div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Buscador de Editais Agendo</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O Buscador de Editais Agendo é um ecossistema inteligente de inteligência de mercado voltado para o mapeamento preditivo e proativo de fontes de fomento financeiro. Criado para acabar com o trabalho manual de buscar oportunidades em dezenas de portais diferentes, ele centraliza a captação de recursos em uma única interface.
            </p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Captação Proativa</h3>
                <p className="text-gray-700">
                  Monitoramento automatizado e em tempo real que reúne editais de chamamento público das esferas federal, estadual e municipal, além de oportunidades em institutos privados e fundações internacionais.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-bold text-slate-900 mb-2">Filtros Avançados</h3>
                <p className="text-gray-700">
                  Segmentação precisa cruzando as oportunidades com o objeto social exato da sua OSC, a localização geográfica de atuação e o volume orçamentário necessário. Isso otimiza o tempo da sua equipe, permitindo focar os esforços apenas nas propostas com real chance de aprovação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Conhecer Mais Sobre Nossos Produtos</h2>
        <p className="mb-6 text-blue-100">Envie seus dados para que nossa equipe entre em contato e apresente como esses produtos podem transformar sua OSC.</p>

        <form onSubmit={handleSubmit} className="max-w-xl">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              disabled={enviando}
              className="w-full px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
            />
          </div>
          
          <div className="mb-4">
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Qual produto você tem interesse em conhecer melhor?"
              required
              rows="5"
              disabled={enviando}
              className="w-full px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 rounded font-semibold transition-colors"
          >
            {enviando ? 'Enviando...' : 'Enviar Solicitação'}
          </button>
          
          {enviado && (
            <p className="mt-4 text-green-200 font-semibold">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
          )}
          {erro && (
            <p className="mt-4 text-red-200 font-semibold">✗ Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </div>
    </div>
  );
}
