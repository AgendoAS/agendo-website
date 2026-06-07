import React, { useState } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

export default function Ebooks() {
  const [selectedEbook, setSelectedEbook] = useState(null);
  const [loadingPayment, setLoadingPayment] = useState(false);

  const ebooks = [
    {
      id: 1,
      title: 'Gestão de OSC na Prática: Guia de Boas Práticas e Conformidade com o MROSC',
      description: 'Guia completo com os 12 erros mais comuns na execução de parcerias com o setor público, boas práticas de gestão financeira, documentação e conformidade. Inclui questionário interativo de diagnóstico.',
      author: 'AGENDO Consultoria',
      price: 89.90,
      pages: 22,
      category: 'Organizações da Sociedade Civil',
      highlights: [
        'Lei 13.019/2014 (MROSC) na prática',
        '3 fundamentos de gestão eficaz',
        '12 erros comuns com exemplos reais',
        'Questionário de autoavaliação + diagnóstico'
      ],
      coverColor: 'from-green-600 to-green-400',
      icon: '📋'
    },
    {
      id: 2,
      title: 'Guia Completo de Emendas Parlamentares 2026',
      description: 'Entenda como funciona o processo de captação, aprovação e execução de emendas parlamentares. Legislação atualizada, casos práticos e checklist de conformidade para OSCs.',
      author: 'AGENDO Consultoria',
      price: 79.90,
      pages: 48,
      category: 'Emendas Parlamentares',
      highlights: [
        'Legislação atualizada 2026',
        'Passo a passo de captação',
        'Modelos de documentação',
        'Casos de sucesso reais'
      ],
      coverColor: 'from-blue-600 to-blue-400',
      icon: '💼'
    }
  ];

  const handleComprarAgora = (ebook) => {
    setSelectedEbook(ebook);
    setLoadingPayment(true);

    setTimeout(() => {
      const msg = `Ebook: ${ebook.title}\nPreço: R$ ${ebook.price.toFixed(2)}\n\nSistema de pagamento em breve!\nEnvie um email para contato@agendoas.com para receber acesso.`;
      alert(msg);
      setLoadingPayment(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            E-books AGENDO
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Conteúdo profissional e atualizado sobre gestão de OSCs e emendas parlamentares. 
            Acesso imediato após o pagamento.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {ebooks.map((ebook) => (
            <div
              key={ebook.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className={`bg-gradient-to-br ${ebook.coverColor} h-48 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-7xl opacity-20">{ebook.icon}</div>
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-slate-700">
                  PDF
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-sm text-slate-500 font-medium mb-2">{ebook.category}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{ebook.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{ebook.description}</p>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 mb-2">O que está incluído:</p>
                  <ul className="space-y-2">
                    {ebook.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-green-600 font-bold mt-0.5">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">{ebook.pages}</span>
                    <span>páginas</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold">PDF</span>
                    <span>digital</span>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Preço</p>
                    <p className="text-4xl font-bold text-slate-900">
                      R$ {ebook.price.toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => handleComprarAgora(ebook)}
                    disabled={loadingPayment && selectedEbook?.id === ebook.id}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {loadingPayment && selectedEbook?.id === ebook.id ? (
                      <>
                        <span className="animate-spin">⏳</span>
                        Processando...
                      </>
                    ) : (
                      <>
                        <Download size={20} />
                        Comprar Agora
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-slate-200 rounded-lg p-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ShieldCheck className="text-green-600" size={24} />
            <h3 className="text-xl font-bold text-slate-900">Compra 100% Segura</h3>
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Seus dados serão protegidos pelo Mercado Pago. Acesso imediato ao PDF por email após confirmação do pagamento.
            Garantia de satisfação ou devolução em 7 dias.
          </p>
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900">Como recebo meu ebook?</summary>
              <p className="text-slate-600 mt-4 ml-6">
                Você receberá um email de confirmação com o link de download do PDF imediatamente após o pagamento ser aprovado.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900">Posso compartilhar o ebook?</summary>
              <p className="text-slate-600 mt-4 ml-6">
                O ebook é para uso pessoal. Compartilhamento não autorizado viola os termos de licença. Grupos e equipes podem adquirir múltiplas cópias com desconto.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900">Existe garantia de reembolso?</summary>
              <p className="text-slate-600 mt-4 ml-6">
                Sim! Se não estiver satisfeito, oferecemos reembolso total em até 7 dias após a compra. Sem perguntas.
              </p>
            </details>

            <details className="bg-white p-4 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
              <summary className="font-semibold text-slate-900">O conteúdo é atualizado regularmente?</summary>
              <p className="text-slate-600 mt-4 ml-6">
                Sim! Legislação, casos práticos e exemplos são atualizados anualmente. Compradores anteriores recebem notificação de atualizações.
              </p>
            </details>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Precisa de Consultoria Especializada?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Nossos especialistas estão prontos para orientar sua organização em gestão de OSCs e emendas parlamentares.
          </p>
          
            href="/contato"
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          >
            Solicitar Consultoria Gratuita
          </a>
        </div>
      </div>
    </div>
  );
}
