import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'E-books', path: '/ebooks' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' }
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen bg-blue-800 text-white w-64 z-40 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          {/* Close Button Mobile */}
          <button
            onClick={onClose}
            className="lg:hidden mb-6 p-2 hover:bg-blue-700 rounded"
          >
            <X size={24} />
          </button>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="block px-4 py-3 rounded hover:bg-blue-700 transition-colors text-lg font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-blue-700">
            <a
              href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded font-semibold transition-colors text-center"
            >
              Acessar Buscador
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
