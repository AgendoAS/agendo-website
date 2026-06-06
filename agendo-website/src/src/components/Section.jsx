export default function Section({ 
  children, 
  title, 
  subtitle, 
  dark = false, 
  className = '' 
}) {
  return (
    <section className={`py-20 ${dark ? 'bg-slate-900 text-white' : 'bg-white'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className={`text-4xl sm:text-5xl font-bold mb-4 ${
                dark ? 'text-white' : 'text-slate-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-xl max-w-2xl mx-auto ${
                dark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
