import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Grid 4 colunas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Coluna 1: Sobre */}
          <div>
            <h4 className="font-bold text-lg mb-4">AGENDO</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Consultoria, assessoria, gestão e planejamento para organizações da sociedade civil.
            </p>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Regularização Jurídica</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Compliance e Governança</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Captação de Recursos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Engenharia de Projetos</a></li>
            </ul>
          </div>

          {/* Coluna 3: Produtos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Produtos</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition">Agendo Integra</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Buscador de Editais</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">E-books e Conteúdos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Consultoria</a></li>
            </ul>
          </div>

          {/* Coluna 4: Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex gap-2 items-start">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:contato@agendoas.com" className="hover:text-blue-400 transition">
                  contato@agendoas.com
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <a href="tel:+5561987654321" className="hover:text-blue-400 transition">
                  (61) 98765-4321
                </a>
              </li>
              <li className="flex gap-2 items-start">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Brasília, DF</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-slate-400 text-sm">
            © 2024 AGENDO. Todos os direitos reservados.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
