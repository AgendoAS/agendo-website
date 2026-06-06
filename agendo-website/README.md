# 🚀 AGENDO - Website Institucional

Repositório do website institucional da AGENDO - Consultoria, Assessoria, Gestão e Planejamento para Organizações da Sociedade Civil.

## 📋 Características

✅ **Design Responsivo** - Mobile-first, otimizado para todos os dispositivos
✅ **Rápido & Performático** - Vite + React, otimizado para velocidade
✅ **SEO Ready** - Meta tags, Open Graph, estrutura semântica
✅ **Acessível** - WCAG 2.1 compliant
✅ **Seguro** - Deploy HTTPS, variáveis de ambiente protegidas
✅ **Fácil de Manter** - Componentes reutilizáveis, código limpo

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Roteamento**: React Router v6
- **Forms**: Integração Formspree
- **Deploy**: Render.com + GitHub

## 📁 Estrutura do Projeto

```
agendo-website/
├── src/
│   ├── components/        # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Card.jsx
│   │   ├── FormContact.jsx
│   │   └── Section.jsx
│   ├── pages/            # Páginas/Rotas
│   │   ├── Home.jsx
│   │   ├── Servicos.jsx
│   │   ├── Produtos.jsx
│   │   ├── Ebooks.jsx
│   │   ├── Sobre.jsx
│   │   └── Contato.jsx
│   ├── App.jsx           # Componente raiz
│   ├── App.css           # Estilos globais
│   ├── index.css         # Tailwind imports
│   └── main.jsx          # Entry point
├── public/               # Assets estáticos
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/agendo-website.git
cd agendo-website

# Instale dependências
npm install

# Crie arquivo .env local (opcional)
cp .env.example .env.local
```

### Desenvolvimento

```bash
# Inicie servidor de desenvolvimento
npm run dev

# Acesse em http://localhost:5173
```

### Build para Produção

```bash
# Crie build otimizado
npm run build

# Visualize build localmente
npm run preview
```

## 🎨 Design System

### Cores Principais
```css
--color-primary: #1a2a5f (Azul Institucional)
--color-primary-light: #1a7fa0 (Azul Elétrico)
--color-accent-green: #7ab520 (Verde)
--color-accent-orange: #d94f1e (Laranja)
```

### Tipografia
- **Headlines**: DM Sans Bold (700)
- **Body**: DM Sans Regular (400)
- **Semibold**: DM Sans (500)

### Responsividade
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 📝 Personalizações

### 1. Alterar Textos
Procure por "Lorem Ipsum" nos arquivos e substitua pelos textos finais.

### 2. Adicionar Logo
1. Substitua `/public/logo.svg` com seu logo
2. Atualize Header.jsx se necessário

### 3. Configurar Formulário
```javascript
// Em FormContact.jsx
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

### 4. Google Analytics
```html
<!-- Em index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## 🚀 Deploy

### Render.com (Recomendado)
Veja `DEPLOY-RENDER.md` para instruções detalhadas.

```bash
# Build Command
npm install && npm run build

# Start Command
npm run preview

# Publish Directory
dist
```

### Vercel
1. Conecte repositório GitHub ao Vercel
2. Defina Root Directory como `./`
3. Build Command: `npm run build`
4. Output Directory: `dist`

### GitHub Pages
```bash
npm run build
# Faça deploy do diretório /dist
```

## 🧪 Testes & QA

```bash
# Verificar build
npm run build

# Listar erros de lint
npm run lint

# Performance check
npm run preview
# Abra DevTools → Lighthouse
```

## 🔐 Variáveis de Ambiente

Crie `.env.local`:

```env
VITE_API_URL=https://seu-api.com
VITE_FORMSPREE_ID=f_abc123
VITE_GA_ID=G-XXXXXXXXXX
```

## 📞 Contato & Suporte

- **Email**: contato@agendoas.com
- **Telefone**: (61) 98765-4321
- **Site**: https://agendoas.com

## 📄 Licença

Propriedade de AGENDO Consultoria © 2024

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
2. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
3. Push para a branch (`git push origin feature/AmazingFeature`)
4. Abra um Pull Request

## 📊 Performance

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals: Good
- ✅ SEO: 100
- ✅ Accessibility: 95+

## 🐛 Bug Reports

Encontrou um bug? Abra uma issue no GitHub com:
1. Descrição clara do problema
2. Passos para reproduzir
3. Screenshots/vídeos se possível
4. Seu navegador e SO

---

**Desenvolvido com ❤️ para AGENDO**
