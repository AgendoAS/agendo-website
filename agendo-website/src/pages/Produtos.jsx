import { Section, Card } from '../components/index';
import { Search, BarChart3, Eye, Zap, TrendingUp } from 'lucide-react';

export default function Produtos() {
  return (
    <div>
      {/* Hero Produtos */}
      <section className="bg-gradient-to-r from-green-700 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nossos Produtos</h1>
          <p className="text-xl text-green-100 max-w-2xl">
            Tecnologia que potencializa o impacto social de sua organização.
          </p>
        </div>
      </section>

      {/* Buscador de Editais */}
      <Section className="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-green-100 text-green-700 mb-4">
                <Search size={40} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Buscador de Editais</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Plataforma SaaS que monitora continuamente oportunidades de financiamento, emendas parlamentares e editais públicos alinhados com sua missão.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <Eye size={24} className="text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Monitoramento Semanal</h3>
                  <p className="text-slate-600">Atualizações contínuas de novas oportunidades</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Busca Avançada</h3>
                  <p className="text-slate-600">Filtros por tema, valor, deadline e instituição</p>
                </div>
              </div>
              <div className="flex gap-4">
                <TrendingUp size={24} className="text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900">Emendas Parlamentares</h3>
                  <p className="text-slate-600">Add-on especializado para monitorar emendas</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <h3 className="font-bold text-slate-900">Planos:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="border border-green-200 rounded-lg p-4">
                  <p className="font-bold text-slate-900">Bronze</p>
                  <p className="text-2xl font-bold text-green-600">R$ 9,90</p>
                  <p className="text-sm text-slate-600">/mês</p>
                </div>
                <div className="border border-green-200 rounded-lg p-4">
                  <p className="font-bold text-slate-900">Prata</p>
                  <p className="text-2xl font-bold text-green-600">R$ 19,90</p>
                  <p className="text-sm text-slate-600">/mês</p>
                </div>
                <div className="border border-green-200 rounded-lg p-4">
                  <p className="font-bold text-slate-900">Ouro</p>
                  <p className="text-2xl font-bold text-green-600">R$ 34,90</p>
                  <p className="text-sm text-slate-600">/mês</p>
                </div>
              </div>
              <p className="text-sm text-slate-600">Add-on Emendas: R$ 9,90/mês</p>
            </div>

            <a
              href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Acessar Agora
            </a>
          </div>

          {/* Visual Produto */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-lg p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="bg-white rounded p-4 space-y-3">
                  <div className="h-4 bg-green-200 rounded-full w-3/4"></div>
                  <div className="h-4 bg-green-200 rounded-full w-2/3"></div>
                  <div className="h-4 bg-green-200 rounded-full w-1/2"></div>
                </div>
                <div className="bg-green-600 bg-opacity-50 rounded p-4 space-y-2">
                  <div className="h-3 bg-green-300 rounded-full w-full"></div>
                  <div className="h-3 bg-green-300 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Agendo Integra */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual Produto */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded p-3 space-y-2">
                    <div className="h-3 bg-blue-200 rounded-full w-full"></div>
                    <div className="h-3 bg-blue-200 rounded-full w-3/4"></div>
                  </div>
                  <div className="bg-blue-600 bg-opacity-50 rounded p-3 space-y-2">
                    <div className="h-3 bg-blue-300 rounded-full w-full"></div>
                    <div className="h-3 bg-blue-300 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-white rounded p-4 h-20"></div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-lg bg-blue-100 text-blue-700 mb-4">
                <BarChart3 size={40} />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Agendo Integra</h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Suite completa de ferramentas para gestão integrada, compliance contínuo e engenharia avançada de projetos. Tudo em um único lugar.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-slate-900">Gestão Integrada</h3>
                  <p className="text-slate-600">Centralize informações e workflows</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-slate-900">Compliance Contínuo</h3>
                  <p className="text-slate-600">Monitore conformidade em tempo real</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-slate-900">Engenharia de Projetos</h3>
                  <p className="text-slate-600">Desenhe e execute com excelência</p>
                </div>
              </div>
            </div>

            <a
              href="/contato"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Solicitar Demonstração
            </a>
          </div>
        </div>
      </Section>

      {/* Comparação */}
      <Section dark className="bg-slate-900">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Qual é o Ideal para Você?</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="py-4 px-4 text-white font-bold">Funcionalidade</th>
                <th className="py-4 px-4 text-white font-bold text-center">Buscador</th>
                <th className="py-4 px-4 text-white font-bold text-center">Integra</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700">
                <td className="py-4 px-4 text-slate-300">Monitoramento de Editais</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-4 px-4 text-slate-300">Gestão de Projetos</td>
                <td className="py-4 px-4 text-center text-red-400">—</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-4 px-4 text-slate-300">Compliance Integrado</td>
                <td className="py-4 px-4 text-center text-red-400">—</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="py-4 px-4 text-slate-300">Emendas Parlamentares</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓ (add-on)</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-slate-300">Suporte Especializado</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓</td>
                <td className="py-4 px-4 text-center text-green-400 font-bold">✓ Premium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA Final */}
      <Section className="text-center">
        <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-lg p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Comece Agora</h2>
          <p className="text-lg text-slate-100 mb-8">
            Escolha o produto ideal para potencializar sua organização
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition-colors"
            >
              Acessar Buscador
            </a>
            <a
              href="/contato"
              className="inline-block bg-slate-700 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Conhecer Integra
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
