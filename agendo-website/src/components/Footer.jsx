export default function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 bg-slate-50">
      <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <div className="flex items-center gap-3">
          <img src="/AGENDO%20LOGO.png" alt="" className="h-8 w-auto" />
          <span>© {ano} AGENDO · Brasília/DF</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:contato@agendoas.com" className="hover:text-[#006B8E] transition-colors">
            contato@agendoas.com
          </a>
          <a
            href="https://www.linkedin.com/company/agendoas"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#006B8E] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
