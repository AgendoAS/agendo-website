import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

const servicosDetalhados = {
  1: {
    title: 'Regularização, Governança e Estruturação Jurídica',
    icon: '📋',
    fullText: 'Garanta a conformidade legal necessária para a fundação e o funcionamento de instituições de acordo com as exigências do Terceiro Setor. Entrega a constituição completa de Organizações da Sociedade Civil (OSC) com a elaboração do Estatuto Social, redação de Regimentos Internos personalizados para governança administrativa, e a revisão ou atualização de estatutos vigentes para o estrito cumprimento das regras de transparência exigidas pela Lei nº 13.019/2014 (MROSC).'
  },
  2: {
    title: 'Compliance, Diagnóstico e Análise Documental',
    icon: '🔍',
    fullText: 'Realiza o mapeamento de riscos e a validação jurídica das condições da OSC antes de estabelecer parcerias com o poder público. Entrega um diagnóstico detalhado de toda a habilitação jurídica e fiscal da entidade com base no Art. 34 da Lei nº 13.019/2014, além de emitir um parecer técnico de aptidão para certificar se a instituição cumpre o tempo mínimo de existência e a capacidade operacional para receber emendas e participar de editais com segurança.'
  },
  3: {
    title: 'Captação de Recursos e Relações Governamentais',
    icon: '💰',
    fullText: 'Atua na diversificação e ampliação das fontes de receita da organização por meio do acesso a recursos públicos e privados. Entrega orientação estratégica completa para a articulação, cadastro e defesa de propostas voltadas à conquista de Emendas Parlamentares (federais, estaduais ou municipais), além do monitoramento e triagem técnica para o ingresso seguro em Editais de Chamamento Público.'
  },
  4: {
    title: 'Engenharia de Projetos e Planejamento',
    icon: '🎯',
    fullText: 'Traduz as metas da organização em propostas técnicas rigorosas que atendem aos critérios de aprovação dos órgãos avaliadores. Entrega a formulação completa de Planos de Trabalho com objetivos, metas e indicadores de resultados (conforme o Art. 22 do MROSC), o desenho metodológico de Projetos Sociais de impacto e a estruturação de planilhas orçamentárias integradas a um Cronograma físico-financeiro de Desembolso.'
  }
};

export default function ServicoDetail() {
  const { id } = useParams();
  const servico = servicosDetalhados[id];
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);

  if (!servico) {
    return <div className="text-center py-12">Serviço não encontrado</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com Formspree ou outro serviço de email
    console.log('Email enviado:', email);
    setEnviado(true);
    setTimeout(() => {
      setEmail('');
      setEnviado(false);
    }, 3000);
  };

  return (
    <div>
      <Link
        to="/servicos"
        className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-900 font-semibold mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        Voltar aos Serviços
      </Link>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="text-5xl mb-4">{servico.icon}</div>
        <h1 className="text-4xl font-bold text-blue-800 mb-6">{servico.title}</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed text-lg">{servico.fullText}</p>
        </div>
      </div>

      {/* Formulário de Email */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg shadow-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Solicitar Orçamento</h2>
        <p className="mb-6 text-blue-100">Envie seu email para que nossa equipe entre em contato com você</p>

        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              className="flex-1 px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded font-semibold transition-colors"
            >
              Enviar
            </button>
          </div>
          {enviado && (
            <p className="mt-4 text-green-200 font-semibold">✓ Email enviado com sucesso!</p>
          )}
        </form>
      </div>
    </div>
  );
}
