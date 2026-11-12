import { useState } from 'react'

const FORMSPREE_URL = 'https://formspree.io/f/mwvjljpl'

const servicos = [
  {
    titulo: 'Emendas Parlamentares',
    cor: '#006B8E',
    texto:
      'Orientação técnica para captar, executar e prestar contas de recursos de emendas parlamentares, com atenção às exigências legais de cada etapa.',
  },
  {
    titulo: 'Assessoria a OSCs',
    cor: '#A4C639',
    texto:
      'Apoio à constituição, regularização e gestão de organizações da sociedade civil, com estatutos e rotinas preparados para a captação de recursos e para parcerias com o poder público.',
  },
  {
    titulo: 'Cursos e Capacitações',
    cor: '#EF4423',
    texto:
      'Formações sobre o Marco Regulatório das Organizações da Sociedade Civil (MROSC), prestação de contas e criação de OSCs com estatuto adequado à captação de recursos, entre outros temas.',
  },
]

function Contato() {
  const [status, setStatus] = useState('idle') // idle | enviando | ok | erro

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('enviando')
    const form = e.target
    try {
      const resp = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (resp.ok) {
        form.reset()
        setStatus('ok')
      } else {
        setStatus('erro')
      }
    } catch {
      setStatus('erro')
    }
  }

  const campo =
    'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#006B8E] transition'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="nome" required placeholder="Nome *" className={campo} />
        <input name="email" type="email" required placeholder="E-mail *" className={campo} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="telefone" type="tel" placeholder="Telefone / WhatsApp" className={campo} />
        <select name="interesse" defaultValue="" className={campo}>
          <option value="" disabled>Assunto</option>
          <option>Emendas parlamentares</option>
          <option>Assessoria a OSCs</option>
          <option>Cursos e capacitações</option>
          <option>Outro assunto</option>
        </select>
      </div>
      <textarea name="mensagem" required rows="5" placeholder="Mensagem *" className={`${campo} resize-none`} />
      <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />

      <button
        type="submit"
        disabled={status === 'enviando'}
        className="w-full sm:w-auto bg-[#006B8E] hover:bg-[#00566f] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
      >
        {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
      </button>

      {status === 'ok' && (
        <p className="text-green-700">Mensagem enviada. Retornaremos em breve.</p>
      )}
      {status === 'erro' && (
        <p className="text-red-700">
          Não foi possível enviar agora. Escreva para contato@agendoas.com ou chame no WhatsApp.
        </p>
      )}
    </form>
  )
}

export default function Home() {
  return (
    <>
      {/* Início */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 py-16 md:py-24 grid md:grid-cols-[1fr_auto] gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Transformando Intenção em Resultado Social
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Consultoria, assessoria, gestão e planejamento para organizações da sociedade civil e para a
            execução de emendas parlamentares, com rigor técnico e segurança jurídica.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contato"
              className="bg-[#006B8E] hover:bg-[#00566f] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Fale conosco
            </a>
            <a
              href="#servicos"
              className="border-2 border-[#006B8E] text-[#006B8E] hover:bg-[#006B8E]/5 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              O que fazemos
            </a>
          </div>
        </div>
        <img src="/AGENDO%20LOGO.png" alt="" className="hidden md:block w-64 h-auto" />
      </section>

      {/* O que fazemos */}
      <section id="servicos" className="bg-slate-50 py-16 md:py-20 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-slate-900">O que fazemos</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {servicos.map((s) => (
              <article
                key={s.titulo}
                className="bg-white rounded-xl p-7 shadow-sm border-t-4"
                style={{ borderTopColor: s.cor }}
              >
                <h3 className="text-xl font-bold text-slate-900">{s.titulo}</h3>
                <p className="mt-3 text-slate-600">{s.texto}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-slate-500 text-sm">E-books e ferramentas digitais para OSCs em breve.</p>
        </div>
      </section>

      {/* Quem somos */}
      <section id="sobre" className="py-16 md:py-20 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-slate-900">Quem somos</h2>
          <p className="mt-6 text-lg text-slate-600">
            A AGENDO foi fundada por Cissa Neves e Rangel Pinheiro para apoiar organizações da sociedade civil e
            agentes públicos na transformação de recursos em políticas efetivas. A equipe combina formação em
            políticas públicas, atuação jurídica e experiência prática na assistência social, o que permite
            tratar cada demanda com rigor técnico e conhecimento da realidade dos territórios.
          </p>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-slate-50 py-16 md:py-20 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-3xl font-bold text-slate-900">Fale conosco</h2>
          <p className="mt-4 text-slate-600">
            Conte um pouco sobre a sua demanda. Também atendemos pelo e-mail{' '}
            <a href="mailto:contato@agendoas.com" className="text-[#006B8E] font-medium">
              contato@agendoas.com
            </a>{' '}
            e pelo WhatsApp.
          </p>
          <div className="mt-8">
            <Contato />
          </div>
        </div>
      </section>
    </>
  )
}
