export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3" aria-label="AGENDO, início">
          <img src="/AGENDO%20LOGO.png" alt="" className="h-10 w-auto" />
          <img src="/AGENDO%20TEXTO.png" alt="AGENDO" className="h-7 w-auto hidden sm:block" />
        </a>

        <nav className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <a href="#servicos" className="hidden md:inline hover:text-[#006B8E] transition-colors">O que fazemos</a>
          <a href="#sobre" className="hidden md:inline hover:text-[#006B8E] transition-colors">Quem somos</a>
          <a
            href="#contato"
            className="bg-[#006B8E] hover:bg-[#00566f] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Fale conosco
          </a>
        </nav>
      </div>
    </header>
  )
}
