import { ArrowRight } from 'lucide-react';

export default function Card({ 
  icon: Icon, 
  title, 
  description, 
  badge, 
  href, 
  variant = 'default' 
}) {
  const baseStyles = "rounded-lg transition-all duration-300";
  
  const variants = {
    default: "bg-white border border-gray-200 hover:shadow-lg hover:border-blue-200",
    dark: "bg-slate-50 border border-gray-200 hover:shadow-lg",
    featured: "bg-gradient-to-br from-blue-700 to-blue-900 text-white border border-blue-600"
  };

  return (
    <div className={`p-6 sm:p-8 ${baseStyles} ${variants[variant]}`}>
      {/* Icon */}
      {Icon && (
        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg mb-4 ${
          variant === 'featured' 
            ? 'bg-blue-500' 
            : 'bg-blue-100 text-blue-700'
        }`}>
          <Icon size={28} />
        </div>
      )}

      {/* Badge */}
      {badge && (
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
          variant === 'featured'
            ? 'bg-blue-500 text-white'
            : 'bg-blue-100 text-blue-700'
        }`}>
          {badge}
        </div>
      )}

      {/* Title */}
      <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${
        variant === 'featured' ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`mb-6 leading-relaxed ${
        variant === 'featured' 
          ? 'text-blue-100' 
          : 'text-slate-600'
      }`}>
        {description}
      </p>

      {/* CTA Link */}
      {href && (
        <a
          href={href}
          className={`inline-flex items-center gap-2 font-semibold transition-colors group ${
            variant === 'featured'
              ? 'text-white hover:text-blue-100'
              : 'text-blue-700 hover:text-blue-900'
          }`}
        >
          Saiba mais
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
}
