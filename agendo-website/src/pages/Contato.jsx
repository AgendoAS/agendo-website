import { Section, FormContact } from '../components/index';

export default function Contato() {
  return (
    <div>
      {/* Hero Contato */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Estamos prontos para ajudar sua organização a crescer e impactar.
          </p>
        </div>
      </section>

      {/* Formulário */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <FormContact />
        </div>
      </Section>

      {/* Informações Adicionais */}
      <Section dark className="bg-slate-900" title="Informações de Contato">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Escritório Principal</h3>
            <p className="text-slate-300 mb-4">
              <strong>Brasília, Distrito Federal</strong><br />
              Brasil
            </p>
            <p className="text-slate-400 text-sm">
              Horário de funcionamento:<br />
              Segunda a Sexta: 8h às 18h<br />
              Sábado e Domingo: Fechado
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Formas de Contato</h3>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a
                  href="mailto:contato@agendoas.com"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  contato@agendoas.com
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Telefone / WhatsApp</p>
                <a
                  href="tel:+5561987654321"
                  className="text-blue-400 hover:text-blue-300 font-semibold transition"
                >
                  (61) 98765-4321
                </a>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Atendimento</p>
                <p className="text-slate-300">
                  De segunda a sexta, das 8h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resposta Time */}
        <div className="bg-blue-900 rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-2">Tempo de Resposta</h3>
          <p className="text-blue-100">
            Respondemos a todas as mensagens em até <strong>24 horas</strong> úteis
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Perguntas Frequentes" className="bg-slate-50">
        <div className="max-w-3xl mx-auto space-y-6">
          <details className="border border-gray-300 rounded-lg">
            <summary className="p-6 font-bold text-slate-900 cursor-pointer hover:bg-slate-100">
              Qual é a melhor forma de entrar em contato?
            </summary>
            <div className="px-6 pb-6 text-slate-600 border-t border-gray-300">
              Qualquer uma das formas funciona! Mas recomendamos WhatsApp para resposta mais rápida ou email para assuntos mais formais.
            </div>
          </details>

          <details className="border border-gray-300 rounded-lg">
            <summary className="p-6 font-bold text-slate-900 cursor-pointer hover:bg-slate-100">
              Oferecemos consultoria gratuita?
            </summary>
            <div className="px-6 pb-6 text-slate-600 border-t border-gray-300">
              Sim! Oferecemos uma consulta inicial gratuita de 30 minutos para avaliar as necessidades da sua organização.
            </div>
          </details>

          <details className="border border-gray-300 rounded-lg">
            <summary className="p-6 font-bold text-slate-900 cursor-pointer hover:bg-slate-100">
              Qual é o valor mínimo para um projeto de consultoria?
            </summary>
            <div className="px-6 pb-6 text-slate-600 border-t border-gray-300">
              Não temos valor mínimo. Trabalhamos com organizações de qualquer tamanho e desenvolvemos soluções customizadas aos seus recursos.
            </div>
          </details>

          <details className="border border-gray-300 rounded-lg">
            <summary className="p-6 font-bold text-slate-900 cursor-pointer hover:bg-slate-100">
              Como os dados do meu formulário são protegidos?
            </summary>
            <div className="px-6 pb-6 text-slate-600 border-t border-gray-300">
              Todos os dados são armazenados de forma segura e confidencial. Nunca compartilhamos informações com terceiros sem autorização.
            </div>
          </details>
        </div>
      </Section>

      {/* Mapa (opcional - implementar com embed real depois) */}
      <section className="w-full h-96 bg-slate-300 flex items-center justify-center">
        <p className="text-slate-700 font-semibold">
          Mapa com localização será exibido aqui
        </p>
      </section>
    </div>
  );
}
