import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/AGENDO.png" alt="AGENDO Logo" className="h-16 w-auto" />
        </Link>

        {/* Menu Button */}
        <button
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} className="text-slate-900" />
        </button>
      </div>
    </header>
  );
}
