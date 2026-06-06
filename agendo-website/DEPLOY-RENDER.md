# 🚀 Guia de Deploy no Render.com

## Pré-requisitos
- Conta no Render.com
- Repositório GitHub configurado
- Git instalado localmente

---

## 📋 Passo a Passo

### 1️⃣ **Preparar o Repositório**

```bash
# Inicializar git (se ainda não fez)
git init

# Adicionar remote
git remote add origin https://github.com/seu-usuario/agendo-website.git

# Fazer commit inicial
git add .
git commit -m "Initial commit: AGENDO website"

# Push para GitHub
git push -u origin main
```

### 2️⃣ **Conectar ao Render**

1. Acesse [Render.com](https://render.com)
2. Faça login ou crie uma conta
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório GitHub
5. Selecione o repositório `agendo-website`

### 3️⃣ **Configurar Build**

Na página de criação do serviço:

| Campo | Valor |
|-------|-------|
| **Name** | `agendo-website` |
| **Region** | `São Paulo` (or closest to you) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run preview` |
| **Publish Directory** | `dist` |

### 4️⃣ **Configurar Variáveis de Ambiente**

Na seção "Environment":

```
VITE_API_URL=https://api.seu-backend.com
VITE_FORMSPREE_ID=seu_id_formspree
VITE_GA_ID=seu_google_analytics_id
```

### 5️⃣ **Deploy**

Clique em "Create Web Service"

O Render iniciará o build automaticamente. Você pode acompanhar em tempo real.

---

## ✅ Verificação Pós-Deploy

- [ ] Site acessível em `seu-site.onrender.com`
- [ ] Todas as páginas carregam
- [ ] Menu responsivo funciona
- [ ] Formulário de contato funciona
- [ ] Links externos abrem corretamente
- [ ] Performance > 80 (PageSpeed Insights)

---

## 🔄 Atualizar Domínio Customizado

1. **Compre domínio** em seu registrador (GoDaddy, Namecheap, etc)
2. **No Render:** Vá para Settings → Domains
3. **Adicione domínio customizado** (`agendoas.com`)
4. **Configure DNS** no registrador:
   - CNAME: `agendoas.com` → `seu-site.onrender.com`
5. **Espere 24-48h** pela propagação DNS

---

## 🔐 HTTPS Automático

Render fornece certificado SSL automático. Você não precisa fazer nada!

---

## 📊 Monitoramento

- **Logs**: Acesse em Settings → Logs
- **Métricas**: Histórico de deploys em Deployments
- **Alertas**: Configure em Settings → Notifications

---

## 🚨 Troubleshooting

**"Build failed"**
```bash
# Teste localmente
npm install
npm run build
npm run preview
```

**"Página branca no carregamento"**
- Verifique console (F12 → Console)
- Confira variáveis de ambiente
- Limpe cache do navegador (Ctrl+Shift+Del)

**"Formulário não envia"**
- Verif que `VITE_FORMSPREE_ID` está correto
- Teste em http://localhost:5173 antes de fazer deploy

---

## 💡 Dicas

- Faça commit frequente no GitHub para evitar perder alterações
- Use branches para testar antes de fazer merge em `main`
- Mantenha `.env` local com suas variáveis de desenvolvimento
- Nunca commite `.env` real (use `.env.example`)

---

## 🆘 Suporte

- Docs Render: https://render.com/docs
- Discord Render: https://discord.gg/render
- Email: support@render.com

---

**Desenvolvido com ❤️ para AGENDO**
