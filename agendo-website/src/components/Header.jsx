import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'E-books', path: '/ebooks' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
      <Link to="/" className="flex items-center">
<img src="/public/AGENDO.png" alt="AGENDO Logo" className="h-16 w-auto" />        </Link>        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-slate-700 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button Desktop */}
        <div className="hidden md:block">
          <a
            href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Acessar Buscador
          </a>
        </div>

        {/* Menu Button Mobile */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={24} className="text-slate-900" />
          ) : (
            <Menu size={24} className="text-slate-900" />
          )}
        </button>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-in fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-slate-700 hover:text-blue-600 py-2 font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://buscador-de-editais-para-oscs-agendo.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-center mt-4"
            >
              Acessar Buscador
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
