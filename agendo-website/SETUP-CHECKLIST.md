# ✅ AGENDO Website - Setup & Personalization Checklist

Use este checklist para garantir que seu site está 100% pronto para produção.

---

## 🔧 Setup Técnico

### Repositório GitHub
- [ ] Repositório criado no GitHub
- [ ] README.md preenchido
- [ ] .gitignore configurado
- [ ] Primeiras mudanças commitadas
- [ ] Branch main protegida (require PR review)

### Dependências & Build
- [ ] `npm install` executado com sucesso
- [ ] `npm run dev` funciona localmente
- [ ] `npm run build` gera pasta `dist` sem erros
- [ ] `npm run preview` exibe site corretamente
- [ ] Sem warnings no console

### Configuração de Ambiente
- [ ] `.env.example` preenchido com variáveis
- [ ] `.env.local` criado localmente com seus valores
- [ ] **NUNCA** commitar `.env` real no GitHub
- [ ] Variáveis de ambiente no Render.com configuradas

---

## 📝 Conteúdo & Copywriting

### Textos Principais
- [ ] Home → Hero → Headline
- [ ] Home → Hero → Subheadline
- [ ] Home → Jornada → 3 passos revisados
- [ ] Home → Serviços → 4 serviços descrisção
- [ ] Home → Produtos → Descrições
- [ ] Footer → Sobre AGENDO

### Textos de Contato
- [ ] Email corporativo atualizado (`contato@agendoas.com`)
- [ ] Telefone atualizado
- [ ] Endereço atualizado (Brasília, DF)
- [ ] Horário de funcionamento
- [ ] Links para redes sociais (LinkedIn, Twitter, etc)

### E-books & Conteúdo
- [ ] 6 e-books descritos (ou ajustar quantidade)
- [ ] Blog articles titles revisados
- [ ] Links para downloads configurados
- [ ] Newsletter signup integrado

### SEO & Meta Tags
- [ ] Meta description de cada página preenchida
- [ ] Open Graph tags revisadas
- [ ] Title tags otimizados (incluir "AGENDO")
- [ ] Favicon definido

---

## 🎨 Design & Identidade Visual

### Logo & Branding
- [ ] Logo da AGENDO colocado em `/public`
- [ ] Cores atualizadas no `tailwind.config.js` se necessário
- [ ] Tipografia (DM Sans) carregando corretamente
- [ ] Favicon criado e linkado

### Responsividade
- [ ] Home testada em mobile (< 640px)
- [ ] Home testada em tablet (640-1024px)
- [ ] Home testada em desktop (> 1024px)
- [ ] Menu mobile funciona e fecha corretamente
- [ ] Todos os botões são clicáveis em touch

### Performance
- [ ] Imagens otimizadas (WebP ou comprimidas)
- [ ] Lighthouse score > 80
- [ ] Core Web Vitals: Good
- [ ] Lazy loading implementado (se necessário)

---

## 🔗 Links & Integração

### Links Internos
- [ ] Menu principal navega corretamente
- [ ] Footer links funcionam
- [ ] Breadcrumbs (se aplicável)
- [ ] CTAs apontam para páginas corretas

### Links Externos
- [ ] Buscador de Editais link correto: `https://buscador-de-editais-para-oscs-agendo.onrender.com`
- [ ] LinkedIn profile link
- [ ] Twitter/outras redes sociais
- [ ] Email links funcionando (mailto:)
- [ ] Phone links funcionando (tel:)

### Formulários
- [ ] Formspree ID configurado em `.env`
- [ ] Campos do formulário: Nome, Email, Telefone, Assunto, Interesse, Mensagem
- [ ] Validação básica implementada
- [ ] Mensagem de sucesso exibida
- [ ] Mensagem de erro tratada
- [ ] Email de confirmação recebido (teste)

### Integrações
- [ ] Google Analytics configurado (ID)
- [ ] Facebook Pixel (se aplicável)
- [ ] Google Search Console verificado
- [ ] Sitemap.xml gerado
- [ ] robots.txt configurado

---

## 🚀 Deploy & Hosting

### Render.com Setup
- [ ] Conta Render criada
- [ ] Repositório GitHub conectado
- [ ] Web Service criado
- [ ] Build command: `npm install && npm run build`
- [ ] Start command: `npm run preview`
- [ ] Publish directory: `dist`
- [ ] Environment variables configuradas
- [ ] Deploy executado com sucesso

### Domínio Customizado
- [ ] Domínio `agendoas.com` comprado
- [ ] DNS apontando para Render
- [ ] HTTPS ativo (automático pelo Render)
- [ ] Redirecionamento www → não-www (ou vice-versa)
- [ ] Email setup (se usar seu domínio)

### Monitoramento
- [ ] Render.com → Settings → Notifications configurado
- [ ] Email de notificação setado
- [ ] Logs acessíveis
- [ ] Backup automático ativo (se aplicável)

---

## 🧪 QA & Testing

### Navegação
- [ ] Todas as páginas carregam
- [ ] Links internos funcionam
- [ ] Volta ao topo funciona
- [ ] Menu sticky no topo funciona
- [ ] Footer está no final de cada página

### Formulários
- [ ] Enviar formulário vazio mostra erro
- [ ] Email inválido mostra erro
- [ ] Envio bem-sucedido mostra confirmação
- [ ] Dados chegam no seu email
- [ ] Rate limiting não bloqueia

### Performance
- [ ] Página carrega em < 3 segundos
- [ ] Nenhum erro no console (F12)
- [ ] Nenhum warning desnecessário
- [ ] Network tab limpa (sem requisições falhadas)
- [ ] Sem memory leaks

### Compatibilidade de Navegadores
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers (iOS Safari, Chrome Android)

### Acessibilidade
- [ ] Todos os botões possuem labels
- [ ] Imagens possuem alt text
- [ ] Contraste de cores > 4.5:1
- [ ] Keyboard navigation funciona (Tab)
- [ ] Screen reader compatível (WAVE test)

---

## 📊 Analytics & SEO

### Tracking
- [ ] Google Analytics rastreando páginas
- [ ] Goal de formulário enviado setado
- [ ] Event tracking de CTAs
- [ ] UTM parameters para campanhas
- [ ] Conversion funnel configurado

### SEO Técnico
- [ ] robots.txt permite crawling
- [ ] Sitemap XML gerado e enviado ao GSC
- [ ] Canonical tags presentes
- [ ] Open Graph tags corretas
- [ ] Schema.org markup implementado

### Conteúdo SEO
- [ ] Keywords primários em cada página
- [ ] Headlines otimizadas (H1, H2, H3)
- [ ] Meta descriptions únicos e < 160 caracteres
- [ ] Internal linking estratégico
- [ ] Velocidade de página otimizada

---

## 📱 Mobile & Cross-Platform

### Responsividade
- [ ] iPhone 12/13 (390px)
- [ ] iPad (768px)
- [ ] Galaxy S21 (360px)
- [ ] Desktop 1920px
- [ ] Touch targets > 44px

### Orientações
- [ ] Portrait orientation
- [ ] Landscape orientation
- [ ] Transição entre orientações suave

---

## 🔐 Segurança

### Dados Sensíveis
- [ ] Nenhuma API key no frontend
- [ ] `.env` não commitado
- [ ] Secrets no Render.com ocultos
- [ ] Formspree ID protegido
- [ ] Sem dados pessoais em logs públicos

### HTTPS
- [ ] SSL/TLS ativo
- [ ] Certificado válido
- [ ] Sem mixed content (HTTP + HTTPS)
- [ ] Security headers presentes
- [ ] CORS configurado corretamente

---

## 🚨 Pré-Produção Final

### Antes de Ativar
- [ ] Teste completo em staging
- [ ] Backup de DB (se aplicável)
- [ ] Plano de rollback pronto
- [ ] Monitoramento ativo
- [ ] Suporte em standby

### Comunicação
- [ ] Email de lançamento pronto
- [ ] Redes sociais prontas
- [ ] Press release (se aplicável)
- [ ] Equipe notificada
- [ ] Documentação atualizada

---

## 📚 Documentação

### README
- [ ] README completo e atualizado
- [ ] Setup instructions claras
- [ ] Deploy guide presente
- [ ] Troubleshooting section
- [ ] Contact/support info

### Code Comments
- [ ] Componentes documentados
- [ ] Functions com JSDoc
- [ ] Complex logic explicado
- [ ] TODO comments removidos

### Git
- [ ] Commits com mensagens claras
- [ ] Branch naming conventions
- [ ] Pull request template
- [ ] Contributing guidelines

---

## 🎯 Post-Launch

### Monitoramento 7 Dias
- [ ] Sem erros críticos em produção
- [ ] Performance stable
- [ ] Users navegando corretamente
- [ ] Formulários convertendo
- [ ] Analytics rastreando

### Melhorias Contínuas
- [ ] Feedback dos users coletado
- [ ] Bugs identificados e priorizados
- [ ] Features roadmap atualizado
- [ ] A/B tests planejados
- [ ] CRO iniciado

---

## 📞 Recursos Úteis

- Render Docs: https://render.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Docs: https://react.dev
- Formspree: https://formspree.io
- Google PageSpeed: https://pagespeed.web.dev

---

**Checklist completo = Site pronto para sucesso! ✨**

Marque cada item conforme completa. Quando todos estiverem ✅, seu site está pronto para produção!
