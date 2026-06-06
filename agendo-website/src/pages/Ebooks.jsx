import { Section } from '../components/index';
import { BookOpen, Download, Users, Globe } from 'lucide-react';

export default function Ebooks() {
  const ebooks = [
    {
      icon: BookOpen,
      title: 'Guia Completo MROSC para OSCs',
      description: 'Entenda as regulamentações da Lei 13.019 e como implementar em sua organização.',
      author: 'AGENDO',
      pages: '48 páginas'
    },
    {
      icon: Users,
      title: 'Governança e Compliance',
      description: 'Estruture processos robustos de gestão e transparência em sua OSC.',
      author: 'AGENDO',
      pages: '36 páginas'
    },
    {
      icon: Globe,
      title: 'Captação de Recursos Sustentável',
      description: 'Estratégias práticas para diversificar receitas e ampliar impacto.',
      author: 'AGENDO',
      pages: '42 páginas'
    },
    {
      icon: BookOpen,
      title: 'Manual de Engenharia de Projetos',
      description: 'Passo a passo para formular projetos vencedores e bem estruturados.',
      author: 'AGENDO',
      pages: '52 páginas'
    },
    {
      icon: Users,
      title: 'Prestação de Contas Efetiva',
      description: 'Como prestar contas com excelência e demonstrar resultados.',
      author: 'AGENDO',
      pages: '38 páginas'
    },
    {
      icon: Globe,
      title: 'OSCs e Tecnologia',
      description: 'Aproveite ferramentas digitais para potencializar sua gestão.',
      author: 'AGENDO',
      pages: '40 páginas'
    }
  ];

  return (
    <div>
      {/* Hero E-books */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">E-books e Conteúdos</h1>
          <p className="text-xl text-purple-100 max-w-2xl">
            Biblioteca de recursos educacionais para fortalecer sua organização.
          </p>
        </div>
      </section>

      {/* Grid de E-books */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ebooks.map((ebook, idx) => {
            const Icon = ebook.icon;
            return (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Cover */}
                <div className="bg-gradient-to-br from-purple-600 to-purple-800 h-40 flex items-center justify-center group-hover:from-purple-700 group-hover:to-purple-900 transition-colors">
                  <Icon size={48} className="text-white opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{ebook.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{ebook.description}</p>

                  <div className="flex justify-between items-center mb-6 text-xs text-slate-500">
                    <span>{ebook.author}</span>
                    <span>{ebook.pages}</span>
                  </div>

                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                    <Download size={16} />
                    Baixar Grátis
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section dark className="bg-slate-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Receba Conteúdos Exclusivos</h2>
          <p className="text-slate-300 mb-8">
            Inscreva-se para receber novos guias, webinars e dicas especializadas para OSCs.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap"
            >
              Inscrever
            </button>
          </form>

          <p className="text-slate-400 text-sm mt-4">
            Privacidade garantida. Não enviamos spam.
          </p>
        </div>
      </Section>

      {/* Conteúdo do Blog */}
      <Section title="Blog e Artigos" subtitle="Atualizações regulares sobre terceiro setor">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((idx) => (
            <article key={idx} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-slate-300 to-slate-400"></div>
              <div className="p-6">
                <p className="text-purple-600 text-sm font-semibold mb-2">Categoria</p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Título do Artigo Lorem Ipsum Dolor Sit Amet
                </h3>
                <p className="text-slate-600 mb-4">
                  Breve resumo do artigo com informações relevantes sobre o tema abordado...
                </p>
                <div className="flex justify-between items-center text-sm text-slate-500">
                  <span>João Silva</span>
                  <span>5 min de leitura</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CTA Contato */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Dúvidas sobre Nosso Conteúdo?</h2>
          <p className="text-lg text-purple-100 mb-8">
            Converse com nossos especialistas e personalize sua experiência
          </p>
          <a
            href="/contato"
            className="inline-block bg-white text-purple-900 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </Section>
    </div>
  );
}
