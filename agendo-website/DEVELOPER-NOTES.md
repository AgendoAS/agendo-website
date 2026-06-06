# 💻 Developer Notes - AGENDO Website

Anotações úteis para manutenção e evolução do projeto.

---

## 🎯 Arquitetura de Decisões

### Por que React + Vite?
- **Vite**: Build rápido (< 2s), hot reload instant, bundle otimizado
- **React**: Componentes reutilizáveis, fácil manutenção, grande comunidade
- **React Router**: Roteamento SPA sem overhead, SSR optional

### Por que Tailwind CSS?
- Utility-first: desenvolvimento rápido
- Customizável: cores AGENDO em `tailwind.config.js`
- Performance: apenas CSS usado é incluído
- Responsive: mobile-first built-in

### Por que Formspree?
- Sem backend necessário
- GDPR compliant
- Free tier: 50 submissions/month
- Fácil integração (apenas HTTPS)

---

## 🔧 Customizações Comuns

### 1. Alterar Cores Globais

**Arquivo: `tailwind.config.js`**
```javascript
colors: {
  blue: {
    700: '#SUA_COR',      // Primary
    800: '#SUA_COR_DARK',
    900: '#SUA_COR_DARKER'
  }
}
```

**Arquivo: `src/App.css`**
```css
:root {
  --color-primary: #SUA_COR;
  --color-primary-light: #SUA_COR_LIGHT;
}
```

### 2. Adicionar Nova Página

```jsx
// 1. Criar em src/pages/NewPage.jsx
import { Section } from '../components';

export default function NewPage() {
  return (
    <div>
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1>Página Nova</h1>
        </div>
      </section>
    </div>
  );
}

// 2. Adicionar rota em App.jsx
import NewPage from './pages/NewPage';

<Route path="/nova-pagina" element={<NewPage />} />

// 3. Adicionar no menu Header.jsx
{ label: 'Nova Página', path: '/nova-pagina' }
```

### 3. Criar Novo Componente

```jsx
// src/components/MyComponent.jsx
import { SomeIcon } from 'lucide-react';

export default function MyComponent({ title, children }) {
  return (
    <div className="rounded-lg p-6 bg-white shadow">
      <h3 className="font-bold text-lg">{title}</h3>
      {children}
    </div>
  );
}

// Exportar em src/components/index.js
export { default as MyComponent } from './MyComponent';

// Usar em qualquer página
import { MyComponent } from '../components';
```

### 4. Integrar API Externa

```jsx
// Em uma página
import { useEffect, useState } from 'react';

export default function MyPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/endpoint`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Carregando...</p>;
  return <div>{/* usar data */}</div>;
}
```

### 5. Criar Seção Reutilizável

```jsx
// src/components/PricingTable.jsx
export default function PricingTable({ plans }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map(plan => (
        <div key={plan.id} className="border rounded-lg p-6">
          <h3>{plan.name}</h3>
          <p className="text-2xl font-bold">{plan.price}</p>
          {/* ... */}
        </div>
      ))}
    </div>
  );
}
```

---

## 🎨 Padrões de Design Implementados

### Section Component Pattern
```jsx
<Section 
  title="Título"
  subtitle="Subtítulo"
  dark={false}
  className="custom-class"
>
  {/* Conteúdo aqui */}
</Section>
```

### Card Component Pattern
```jsx
<Card
  icon={IconComponent}
  title="Título"
  description="Descrição"
  badge="Badge"
  href="/link"
  variant="default" | "dark" | "featured"
/>
```

### Form Pattern
```jsx
const [formData, setFormData] = useState({ /* fields */ });
const [status, setStatus] = useState({ type: '', message: '' });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  // Validação, submissão, tratamento de erro
};
```

---

## 📱 Breakpoints Tailwind

```javascript
// Em tailwind.config.js (padrão)
screens: {
  sm: '640px',   // md:
  md: '768px',   // lg:
  lg: '1024px',  // xl:
  xl: '1280px',  // 2xl:
  '2xl': '1536px'
}

// Uso:
<div className="sm:px-4 md:px-6 lg:px-8">
```

---

## 🔄 Estado Global (se necessário)

Para compartilhar estado entre páginas:

```javascript
// src/context/AppContext.jsx
import { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

// Em App.jsx
<AppProvider>
  <Router>
    {/* ... */}
  </Router>
</AppProvider>

// Em componentes
import { useContext } from 'react';
import { AppContext } from './context/AppContext';

const { user } = useContext(AppContext);
```

---

## 🐛 Debugging

### Ferramentas
```javascript
// Console logging
console.log('Debug:', { data, error });
console.table(arrayOfObjects);

// React DevTools
// Chrome: React Developer Tools extension

// Debugger
debugger; // Abre DevTools

// Network inspection
// DevTools → Network → veja requisições
```

### Erros Comuns
| Erro | Causa | Solução |
|------|-------|--------|
| `Cannot find module` | Importação errada | Verificar path exato |
| `Tailwind não aplica` | Classe não existe | Usar classes documentadas |
| `Formulário não envia | Formspree ID errado | Verificar .env |
| `CORS error` | API em domínio diferente | Configurar CORS na API |
| `White screen` | Erro em React | Abrir DevTools → Console |

---

## 📦 Dependências Principais

```json
{
  "react": "18.2.0",                  // Framework
  "react-dom": "18.2.0",              // Rendering
  "react-router-dom": "6.20.0",       // Routing
  "lucide-react": "0.294.0",          // Icons
  "tailwindcss": "3.4.0",             // Styling
  "vite": "5.0.0"                     // Bundler
}
```

Para adicionar novo pacote:
```bash
npm install nome-do-pacote
```

---

## 🚀 Performance Tips

### 1. Lazy Load Componentes
```javascript
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### 2. Otimizar Imagens
```html
<!-- WebP com fallback -->
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Descrição" />
</picture>

<!-- Lazy load -->
<img src="image.jpg" loading="lazy" alt="Descrição" />
```

### 3. Memoizar Componentes
```javascript
import { memo } from 'react';

const MyComponent = memo(function MyComponent({ prop }) {
  return <div>{prop}</div>;
});
```

---

## 🔐 Boas Práticas de Segurança

### ✅ DO
- Proteger API keys em `.env`
- Validar input de formulários
- Usar HTTPS em produção
- Sanitizar conteúdo dinâmico
- Manter dependências atualizadas

### ❌ DON'T
- Expor secrets no código
- Confiar só em validação frontend
- Fazer requisições para domínios desconhecidos
- Usar `eval()` ou `innerHTML` inseguramente
- Ignorar warnings de segurança

---

## 📊 Métricas de Performance

Alvo mínimo:
- **Lighthouse**: 80+
- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **Bundle**: < 150KB (gzipped)

Teste com:
```bash
npm run build
npm run preview
# Abra DevTools → Lighthouse → Analyze
```

---

## 🔄 Git Workflow

```bash
# Feature branch
git checkout -b feature/nome-feature

# Commit frequente
git add .
git commit -m "feat: descrição clara"

# Push
git push origin feature/nome-feature

# Pull Request no GitHub
# → Code review
# → Merge para main

# Deploy automático via Render
```

Convenção de commits:
- `feat:` nova feature
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração

---

## 📞 Contato para Suporte

Problemas técnicos?
1. Consulte este arquivo
2. Abra issue no GitHub
3. Contate time AGENDO

---

**Desenvolvido com ❤️ para AGENDO**
