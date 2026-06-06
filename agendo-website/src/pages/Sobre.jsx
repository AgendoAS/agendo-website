import { Section } from '../components/index';
import { Heart, Target, Users, Globe, Award } from 'lucide-react';

export default function Sobre() {
  const team = [
    {
      name: 'Cissa Neves',
      role: 'Fundadora e Diretora',
      bio: 'Especialista em gestão de OSCs com mais de 15 anos de experiência',
      avatar: 'CN'
    },
    {
      name: 'Rangel Pinheiro',
      role: 'Sócio e Diretor de Inovação',
      bio: 'Desenvolvedor e inovador em soluções tecnológicas para terceiro setor',
      avatar: 'RP'
    },
    {
      name: 'Consultores Especializados',
      role: 'Equipe Dedicada',
      bio: 'Profissionais com expertise em direito, gestão e financiamento social',
      avatar: 'ES'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Impacto Social',
      description: 'Acreditamos na transformação positiva gerada pelas OSCs'
    },
    {
      icon: Target,
      title: 'Precisão',
      description: 'Atenção aos detalhes e rigor técnico em cada projeto'
    },
    {
      icon: Users,
      title: 'Colaboração',
      description: 'Trabalhamos em parceria genuína com nossas organizações clientes'
    },
    {
      icon: Globe,
      title: 'Inovação',
      description: 'Tecnologia aliada ao conhecimento profundo do setor'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Compromisso com a qualidade em tudo que fazemos'
    },
    {
      icon: Handshake,
      title: 'Confiança',
      description: 'Relacionamentos duradouros baseados em transparência'
    }
  ];

  return (
    <div>
      {/* Hero Sobre */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sobre a AGENDO</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Transformando intenção em resultado social há mais de uma década.
          </p>
        </div>
      </section>

      {/* Missão e Visão */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Missão</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Empoderar organizações da sociedade civil através de inteligência analítica, tecnologia robusta e segurança jurídica, conectando suas intenções sociais a captações sustentáveis e resultados comprovados.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Oferecemos consultoria especializada e plataformas inovadoras que transformam a forma como as OSCs se estruturam, captam recursos e geram impacto social.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Visão</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Um Brasil onde toda organização de impacto social possui os recursos, conhecimento e ferramentas necessários para executar sua missão com excelência e transparência.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Somos catalisadores do fortalecimento do terceiro setor, conectando oportunidades a capacidades e resultados a responsabilidade.
            </p>
          </div>
        </div>
      </Section>

      {/* Valores */}
      <Section dark className="bg-slate-900" title="Nossos Valores">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div key={idx} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Timeline/Histórico */}
      <Section title="Nossa Jornada" className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2010</div>
                <div className="w-1 h-24 bg-blue-600 mt-4"></div>
              </div>
              <div className="pt-2 pb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Fundação da AGENDO</h3>
                <p className="text-slate-600">Início das operações com foco em consultoria jurídica para OSCs</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2015</div>
                <div className="w-1 h-24 bg-blue-600 mt-4"></div>
              </div>
              <div className="pt-2 pb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expansão de Serviços</h3>
                <p className="text-slate-600">Incorporamos consultoria em captação de recursos e gestão de projetos</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2022</div>
                <div className="w-1 h-24 bg-blue-600 mt-4"></div>
              </div>
              <div className="pt-2 pb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Lançamento Buscador de Editais</h3>
                <p className="text-slate-600">Transformamos a forma como OSCs buscam oportunidades de financiamento</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2024</div>
              </div>
              <div className="pt-2">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Hoje</h3>
                <p className="text-slate-600">Mais de 500 OSCs transformadas e em desenvolvimento Agendo Integra</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Time */}
      <Section title="Nosso Time" subtitle="Profissionais apaixonados por impacto social">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
                {member.avatar}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-slate-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Parcerias */}
      <Section dark className="bg-slate-900" title="Parcerias" subtitle="Confiados por instituições líderes">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="h-24 bg-slate-800 rounded-lg flex items-center justify-center text-slate-600 border border-slate-700">
              <span className="text-center">Logo Parceiro {idx}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Números */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
            <p className="text-slate-700 font-semibold">OSCs Apoiadas</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600 mb-2">R$ 2.5B</p>
            <p className="text-slate-700 font-semibold">Em Oportunidades</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-600 mb-2">15+</p>
            <p className="text-slate-700 font-semibold">Anos de Experiência</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-600 mb-2">100%</p>
            <p className="text-slate-700 font-semibold">MROSC Compliant</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa Comunidade</h2>
          <p className="text-lg text-blue-100 mb-8">
            Transforme sua organização com a AGENDO
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
          >
            Agendar Reunião
          </a>
        </div>
      </Section>
    </div>
  );
}
