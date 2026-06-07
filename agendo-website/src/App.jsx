import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import ServicoDetail from './pages/ServicoDetail'
import Produtos from './pages/Produtos'
import Ebooks from './pages/Ebooks'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import './App.css'

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/servicos/:id" element={<ServicoDetail />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/ebooks" element={<Ebooks />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        <Footer />
      </div>

      <div className="hidden lg:block w-64 bg-blue-800 text-white fixed left-0 top-0 h-screen overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <a href="/" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">Home</a>
            <a href="/servicos" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">Serviços</a>
            <a href="/produtos" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">Produtos</a>
            <a href="/ebooks" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">E-books</a>
            <a href="/sobre" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">Sobre</a>
            <a href="/contato" className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors font-medium">Contato</a>
          </div>
          <div className="pt-8 border-t border-blue-700">
            <a href="https://buscador-de-editais-para-oscs-agendo.onrender.com" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded font-semibold transition-colors text-center">
              Acessar Buscador
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
