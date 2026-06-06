import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Nossos Serviços</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Soluções completas para o desenvolvimento e fortalecimento de Organizações da Sociedade Civil
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    </div>
  );
}
