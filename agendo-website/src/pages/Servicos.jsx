import { Section, Card } from '../components/index';
import { Shield, Zap, TrendingUp, Target, CheckCircle } from 'lucide-react';

export default function Servicos() {
  const services = [
    {
      icon: Shield,
      title: 'Regularização Jurídica',
      description: 'Estruturação legal completa de sua organização',
      details: [
        'Constituição e Registros',
        'Certificação de Utilidade Pública',
        'Conformidade MROSC',
        'Estatutos e Regulamentos'
      ]
    },
    {
      icon: Zap,
      title: 'Compliance e Governança',
      description: 'Implementação de processos robustos e transparentes',
      details: [
        'Estrutura de Governança',
        'Políticas e Procedimentos',
        'Transparência de Dados',
        'Auditoria e Monitoramento'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Captação de Recursos',
      description: 'Diversificar fontes e ampliar receitas sustentáveis',
      details: [
        'Diagnóstico de Receitas',
        'Planejamento Estratégico',
        'Relacionamento com Doadores',
        'Campanha de Fundraising'
      ]
    },
    {
      icon: Target,
      title: 'Engenharia de Projetos',
      description: 'Desenho, execução e prestação de contas profissional',
      details: [
        'Formulação de Projetos',
        'Planos de Trabalho',
        'Gestão de Execução',
        'Prestação de Contas'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Serviços */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Soluções especializadas para fortalecer sua organização da sociedade civil em todas as dimensões.
          </p>
        </div>
      </section>

      {/* Grid de Serviços */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-blue-100 text-blue-700">
                    <service.icon size={32} />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mt-2">{service.description}</p>
                </div>
              </div>

              {/* Checklist */}
              <ul className="space-y-3">
                {service.details.map((detail, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                    <span className="text-slate-700">{detail}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="/contato"
                className="mt-8 inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Solicitar Orçamento
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Metodologia */}
      <Section dark title="Nossa Metodologia" className="bg-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">Abordagem Comprovada</h3>
            <p className="text-slate-300 leading-relaxed">
              Nossa metodologia é resultado de mais de uma década de experiência com centenas de organizações da sociedade civil. Combinamos rigor técnico com compreensão profunda do contexto do terceiro setor.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-white mb-2">1. Diagnóstico</h4>
                <p className="text-slate-300">Análise detalhada da situação atual da sua organização</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">2. Planejamento</h4>
                <p className="text-slate-300">Desenvolvimento de plano customizado com objetivos claros</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">3. Implementação</h4>
                <p className="text-slate-300">Execução com suporte contínuo e ajustes conforme necessário</p>
              </div>
              <div>
                <h4 className="font-bold text-white mb-2">4. Resultados</h4>
                <p className="text-slate-300">Medição de impacto e consolidação de ganhos</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-900 rounded-lg p-8 flex items-center justify-center min-h-96">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-4">500+</div>
              <p className="text-xl text-blue-100">OSCs já transformadas com nossa metodologia</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Agende uma consulta gratuita com nossos especialistas
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </Section>
    </div>
  );
}
