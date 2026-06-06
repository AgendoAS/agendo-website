import { Hero, Section, Card } from '../components/index';
import { 
  Zap, 
  Shield, 
  Target, 
  Users, 
  TrendingUp, 
  Briefcase,
  BarChart3,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Regularização Jurídica',
      description: 'Estruturação legal completa e conformidade regulatória conforme MROSC.',
      badge: 'Essencial'
    },
    {
      icon: Zap,
      title: 'Compliance e Governança',
      description: 'Implementação de processos de transparência e boas práticas de gestão.',
      badge: 'Avançado'
    },
    {
      icon: TrendingUp,
      title: 'Captação de Recursos',
      description: 'Estratégias de diversificação de receitas e fundraising especializado.',
      badge: 'Estratégico'
    },
    {
      icon: Target,
      title: 'Engenharia de Projetos',
      description: 'Desenho, execução e prestação de contas de projetos sociais complexos.',
      badge: 'Especializado'
    }
  ];

  const products = [
    {
      icon: Search,
      title: 'Buscador de Editais',
      description: 'Plataforma SaaS com monitoramento semanal de oportunidades, emendas parlamentares e busca avançada.',
      featured: true,
      href: 'https://buscador-de-editais-para-oscs-agendo.onrender.com'
    },
    {
      icon: BarChart3,
      title: 'Agendo Integra',
      description: 'Suite de ferramentas para gestão integrada, compliance e engenharia de projetos.',
      href: '#'
    }
  ];

  const journey = [
    {
      step: '01',
      title: 'Encontre Oportunidades',
      description: 'Acesse nosso buscador proativo e identifique editais alinhados com sua missão.'
    },
    {
      step: '02',
      title: 'Habilite-se e Conquiste',
      description: 'Estruture sua OSC com compliance total e prepare-se para vencer editais.'
    },
    {
      step: '03',
      title: 'Execute e Preste Contas',
      description: 'Implemente com transparência, gestão eficiente e resultados comprovados.'
    }
  ];

  return (
    <div>
      {/* Hero */}
      <Hero />

      {/* Jornada de Sucesso */}
      <Section
        title="Sua Jornada de Sucesso"
        subtitle="Como ajudamos OSCs a atingir seus objetivos"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {journey.map((item, idx) => (
            <div key={idx} className="relative">
              {/* Line connector (hidden on mobile) */}
              {idx < journey.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[40%] h-1 bg-gradient-to-r from-blue-400 to-transparent"></div>
              )}
              
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-700 mb-4">{item.step}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Serviços */}
      <Section
        title="Nossos Serviços"
        subtitle="Soluções completas para fortalecer sua OSC"
        className="bg-slate-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <Card
              key={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              badge={service.badge}
              href="/servicos"
              variant={idx === 0 ? 'featured' : 'default'}
            />
          ))}
        </div>
      </Section>

      {/* Produtos */}
      <Section
        title="Nossos Produtos"
        subtitle="Tecnologia que potencializa seu impacto social"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, idx) => (
            <Card
              key={idx}
              icon={product.icon}
              title={product.title}
              description={product.description}
              href={product.href}
              variant={product.featured ? 'featured' : 'default'}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section dark className="text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Pronto para transformar sua OSC?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Conecte-se conosco e descubra como podemos ajudar sua organização a atingir novos patamares de impacto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Acessar Buscador
            </a>
            <Link
              to="/contato"
              className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Falar com Especialista
            </Link>
          </div>
        </div>
      </Section>

      {/* Trust Section */}
      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Confiado por Líderes do Terceiro Setor</h2>
          <p className="text-slate-600">Organizações que transformaram seus resultados com a AGENDO</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-lg flex items-center justify-center">
              <span className="text-slate-700 font-semibold">Logo {idx}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
