import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="w-full pt-20 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-8 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Transformando Intenção em Resultado Social
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed max-w-xl">
                Inteligência Analítica, Tecnologia e Segurança Jurídica para o Terceiro Setor. Conectamos o propósito da sua OSC a captações sustentáveis sob rigor regulatório.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                Acessar Buscador de Editais
                <ArrowRight size={20} />
              </a>
              <Link
                to="/contato"
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
              >
                Falar com Consultor
              </Link>
            </div>

            {/* Trust badges */}
            <div className="pt-8 flex flex-col sm:flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-lg">✓</div>
                <div>
                  <p className="font-semibold">+500 OSCs</p>
                  <p className="text-slate-300">Confiando em nós</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-lg">→</div>
                <div>
                  <p className="font-semibold">100% MROSC</p>
                  <p className="text-slate-300">Segurança Jurídica</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl transform rotate-1 opacity-75"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="h-3 bg-blue-500 rounded-full w-3/4"></div>
                  <div className="h-3 bg-green-500 rounded-full w-2/3"></div>
                  <div className="h-3 bg-orange-500 rounded-full w-1/2"></div>
                  <div className="space-y-2 mt-6">
                    <div className="h-2 bg-slate-700 rounded-full w-full"></div>
                    <div className="h-2 bg-slate-700 rounded-full w-5/6"></div>
                    <div className="h-2 bg-slate-700 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-16 border-t border-slate-700 grid grid-cols-2 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-3xl font-bold text-blue-400">1000+</p>
            <p className="text-slate-300 text-sm">Editais Monitorados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">R$2.5B</p>
            <p className="text-slate-300 text-sm">Oportunidades Ativas</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-3xl font-bold text-orange-400">24/7</p>
            <p className="text-slate-300 text-sm">Suporte Especializado</p>
          </div>
        </div>
      </div>
    </section>
  );
}
