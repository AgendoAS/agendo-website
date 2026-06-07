import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-lg p-12 mb-12">
        <h1 className="text-5xl font-bold mb-4">Transformando Intenção em Resultado Social</h1>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl">
          Inteligência Analítica, Tecnologia e Segurança Jurídica para o Terceiro Setor. Conectamos o propósito da sua OSC a captações sustentáveis sob rigor regulatório.
        </p>
        <Link
          to="/servicos"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Conheça Nossos Serviços
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
          <div className="text-3xl font-bold text-green-500 mb-2">+500 OSCs</div>
          <p className="text-gray-600">Confiando em nós</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-800">
          <div className="text-3xl font-bold text-blue-800 mb-2">100% MROSC</div>
          <p className="text-gray-600">Conformidade Legal</p>
        </div>
      </div>
    </div>
  );
}
