import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contato() {
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setErro(false);

    try {
      const response = await fetch('https://formspree.io/f/mwvjljpl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          name: nome,
          message: mensagem,
          _subject: 'Nova mensagem de contato - AGENDO',
          _replyto: email
        })
      });

      if (response.ok) {
        setEnviado(true);
        setEmail('');
        setNome('');
        setMensagem('');
        setTimeout(() => setEnviado(false), 5000);
      } else {
        setErro(true);
      }
    } catch (err) {
      setErro(true);
      console.error('Erro ao enviar:', err);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-800 mb-4">Entre em Contato</h1>
      <p className="text-gray-600 mb-12 text-lg">
        Estamos prontos para ajudar sua OSC a crescer. Entre em contato conosco!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-8">Informações de Contato</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-blue-800 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                  <a href="mailto:contato@agendo.com.br" className="text-blue-800 hover:text-blue-900 transition-colors">
                    contato@agendo.com.br
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-slate-900 mb-3">Sobre a AGENDO</h3>
                <p className="text-gray-700 leading-relaxed">
                  Somos especializados em consultoria e soluções digitais para Organizações da Sociedade Civil (OSCs). 
                  Nossa missão é transformar intenção em resultado social, blindando sua instituição contra riscos operacionais e garantindo sustentabilidade financeira.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">Envie uma Mensagem</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Nome</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                required
                disabled={enviando}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:opacity-50"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                disabled={enviando}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:opacity-50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">Mensagem</label>
              <textarea
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Sua mensagem..."
                required
                rows="6"
                disabled={enviando}
                className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-800 disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full px-6 py-3 bg-blue-800 hover:bg-blue-900 disabled:bg-gray-400 text-white rounded font-semibold transition-colors"
            >
              {enviando ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            
            {enviado && (
              <p className="text-green-600 font-semibold text-center">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
            )}
            {erro && (
              <p className="text-red-600 font-semibold text-center">✗ Erro ao enviar. Tente novamente.</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
