# 🧘‍♀️ Shanty Yoga - Website Institucional

Um site moderno e responsivo para o estúdio de yoga **Shanty**, desenvolvido com Next.js e Tailwind CSS. O projeto apresenta uma interface elegante e minimalista focada em conversão e apresentação de serviços de yoga e meditação.

![Shanty Yoga](https://img.shields.io/badge/Next.js-15.4.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Características

- 🎨 **Design Moderno**: Interface clean e minimalista com foco em UX
- 📱 **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- ⚡ **Performance Otimizada**: Utilizando Next.js Image e Turbopack
- 🔗 **Integração WhatsApp**: Call-to-actions direcionados para WhatsApp Business
- 🎯 **Foco em Conversão**: Layout estratégico para capturar leads
- 🌿 **Tema Yoga**: Paleta de cores inspirada na natureza e bem-estar

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.4.5** - Framework React com App Router
- **React 19.1.0** - Biblioteca JavaScript para interfaces
- **Tailwind CSS 4.0** - Framework CSS utility-first
- **Plus Jakarta Sans** - Tipografia moderna via Google Fonts

### Ferramentas de Desenvolvimento
- **Turbopack** - Bundler rápido para desenvolvimento
- **ESLint** - Linting de código JavaScript
- **PostCSS** - Processamento de CSS

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/LucasSantos96/lpyoga.git
cd lpyoga
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. **Acesse o projeto**
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linter
```

## 📁 Estrutura do Projeto

```
lpyoga/
├── public/                 # Assets estáticos
│   ├── logo-shanty.png    # Logo principal
│   ├── yoga1.jpg - yoga10.png  # Imagens de yoga
│   ├── *.svg              # Ícones e elementos visuais
│   └── *.webp             # Imagens otimizadas
├── src/
│   ├── app/               # App Router (Next.js 13+)
│   │   ├── layout.js      # Layout principal
│   │   ├── page.js        # Página inicial
│   │   ├── classes/       # Página de classes
│   │   └── globals.css    # Estilos globais
│   └── components/        # Componentes React
│       ├── Header.jsx     # Navegação principal
│       ├── Hero.jsx       # Seção hero
│       ├── Services.jsx   # Seção de serviços
│       ├── AboutUs.jsx    # Seção sobre nós
│       ├── WhyChoose.jsx  # Seção diferenciais
│       ├── SummerSale.jsx # Seção promoção
│       ├── Footer.jsx     # Rodapé
│       ├── Button.jsx     # Componente botão
│       ├── Card.jsx       # Componente card
│       └── NavLinks.jsx   # Links de navegação
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração Tailwind
├── next.config.mjs        # Configuração Next.js
└── README.md             # Este arquivo
```

## 🎨 Paleta de Cores

| Cor | Código | Uso |
|-----|--------|-----|
| Verde Principal | `#62826B` | Botões, elementos principais |
| Dourado | `#FFEFC4` | Texto em botões, destaques |
| Cinza | `#A5A5A7` | Texto secundário |
| Preto | `#11141B` | Seções escuras |
| Branco | `#FCFBF9` | Fundo claro |

## 📱 Páginas e Seções

### Página Principal (`/`)
1. **Hero Section** - Banner principal com call-to-action
2. **Services** - Classes de yoga em destaque
3. **About Us** - Informações institucionais
4. **Why Choose Us** - Diferenciais do estúdio
5. **Summer Sale** - Promoção especial

### Página de Classes (`/classes`)
- Grid responsivo com todas as classes disponíveis
- Filtros por nível e duração
- Informações detalhadas de cada aula

## 🔗 Integrações

### WhatsApp Business
- **Número:** +55 22 98107-3895
- **Mensagem padrão:** "vim pelo portifólio"
- **Implementação:** Todos os botões de ação direcionam para WhatsApp

## 🎯 Funcionalidades Principais

### Navegação
- Menu responsivo (desktop/mobile)
- Navegação suave entre seções
- Links de âncora funcionais

### Interatividade
- Efeitos hover em cards e botões
- Transições suaves
- Menu mobile com animação

### Performance
- Imagens otimizadas com Next.js Image
- Lazy loading automático
- Bundle otimizado

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px  
- **Desktop:** > 1024px

## 🚀 Deploy

### Vercel (Recomendado)
```bash
npm run build
# Conecte seu repositório ao Vercel para deploy automático
```

### Outras Plataformas
- **Netlify**
- **Railway**
- **Heroku**

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Contato

- **WhatsApp:** +55 22 98107-3895
- **Email:** [homeoficelucas@gmail.com]
- **Website:** [https://portifolio-black-two-51.vercel.app/]

---

Desenvolvido com ❤️ para o estúdio Shanty Yoga
