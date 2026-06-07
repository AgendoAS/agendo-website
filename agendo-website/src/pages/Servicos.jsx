import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const servicos = [
  {
    id: 1,
    title: 'Regularização, Governança e Estruturação Jurídica',
    shortDesc: 'Garante a conformidade legal necessária para a fundação e funcionamento de instituições.',
    icon: '📋'
  },
  {
    id: 2,
    title: 'Compliance, Diagnóstico e Análise Documental',
    shortDesc: 'Realiza o mapeamento de riscos e validação jurídica das condições da OSC.',
    icon: '🔍'
  },
  {
    id: 3,
    title: 'Captação de Recursos e Relações Governamentais',
    shortDesc: 'Diversifica e amplia as fontes de receita da organização através de recursos públicos e privados.',
    icon: '💰'
  },
  {
    id: 4,
    title: 'Engenharia de Projetos e Planejamento',
    shortDesc: 'Traduz as metas da organização em propostas técnicas rigorosas.',
    icon: '🎯'
  }
];

export default function Servicos() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Mensagem:', mensagem);
    setEnviado(true);
    setTimeout(() => {
      setEmail('');
      setMensagem('');
      setEnviado(false);
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Nossos Serviços</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Soluções completas para o desenvolvimento e fortalecimento de Organizações da Sociedade Civil
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {servicos.map((servico) => (
          <div
            key={servico.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-blue-800"
          >
            <div className="text-4xl mb-4">{servico.icon}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{servico.title}</h3>
            <p className="text-gray-600 mb-6">{servico.shortDesc}</p>
            
            <Link
              to={`/servicos/${servico.id}`}
              className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold transition-colors"
            >
              Saiba mais
              <ArrowRight size={20} />
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Como Podemos Ajudar?</h2>
        <p className="mb-6 text-blue-100">Envie seu email e nos conte como podemos ajudar sua OSC. Entraremos em contato em breve para discutir soluções personalizadas.</p>

        <form onSubmit={handleSubmit} className="max-w-xl">
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="w-full px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          
          <div className="mb-4">
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Conte-nos como podemos ajudar sua organização..."
              required
              rows="5"
              className="w-full px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded font-semibold transition-colors"
          >
            Enviar Solicitação
          </button>
          
          {enviado && (
            <p className="mt-4 text-green-200 font-semibold">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
          )}
        </form>
      </div>
    </div>
  );
}
