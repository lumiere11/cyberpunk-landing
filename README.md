# Cyberpunk Portfolio - Jorge Eduardo Tirado Sandoval

A cyberpunk-themed portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features automatic language detection and manual language switching between English and Spanish.

## 🌐 Internationalization Features

### Automatic Language Detection
The website automatically detects the user's preferred language from their browser settings:
- **English (en)**: Default language
- **Spanish (es)**: Automatically detected when browser is set to Spanish

### Manual Language Switching
Users can manually switch between languages using the language switcher button in the header.

### Supported Languages
- **English (en)**: Full translation
- **Spanish (es)**: Complete translation with cyberpunk terminology adapted

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cyberpunk-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Cloudflare Pages (Recommended)

#### Option 1: GitHub Integration (Recommended)

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to "Pages" → "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository
   - Configure build settings:
     - **Framework preset**: None
     - **Build command**: `pnpm run build`
     - **Build output directory**: `out`
     - **Root directory**: `/` (leave empty)
     - **Deploy command**: `npx wrangler pages deploy out`
   - Click "Save and Deploy"

#### Option 2: Manual Deployment

1. **Install Wrangler CLI globally:**
```bash
pnpm add -g wrangler
```

2. **Login to Cloudflare:**
```bash
wrangler login
```

3. **Deploy to Cloudflare Pages:**
```bash
pnpm deploy
```

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Use `pnpm build` and deploy the `out` directory
- **GitHub Pages**: Configure GitHub Actions for automatic deployment

## 🛠️ Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Internationalization**: Custom implementation with React Context

## 📁 Project Structure

```
cyberpunk-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with LanguageProvider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── language-switcher.tsx  # Language toggle component
│   └── ui/                   # shadcn/ui components
├── hooks/
│   └── use-language.tsx      # Language context and hook
├── lib/
│   ├── i18n.ts              # Internationalization configuration
│   └── utils.ts             # Utility functions
└── public/                   # Static assets
```

## 🌍 How Internationalization Works

### Language Detection
1. **Browser Detection**: Uses `navigator.language` to detect user's preferred language
2. **Local Storage**: Saves user's language preference for future visits
3. **Fallback**: Defaults to English if no preference is detected

### Translation System
- **Translation Keys**: Organized by section (nav, hero, about, skills, contact, footer)
- **Dynamic Content**: All text content is dynamically translated based on current locale
- **Context Provider**: React Context manages language state across the application

### Adding New Languages
To add a new language:

1. Update `lib/i18n.ts`:
   - Add new locale to `Locale` type
   - Add to `locales` array
   - Add translations to `translations` object

2. Update language detection in `getLocaleFromAcceptLanguage()` function

## 🎨 Features

- **Cyberpunk Aesthetic**: Matrix-style background effects and neon colors
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: CSS animations and transitions
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized with Next.js features

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm pages:build` - Build for Cloudflare Pages
- `pnpm preview` - Preview Cloudflare Pages build locally
- `pnpm deploy` - Build and deploy to Cloudflare Pages
- `pnpm deploy:pages` - Deploy only to Cloudflare Pages (requires build first)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the internationalization features
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*"No matter where you go, everyone's connected." - Serial Experiments Lain*
