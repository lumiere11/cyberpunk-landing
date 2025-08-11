'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Terminal, Server, Code, Zap, Shield, Layers } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { getTranslation } from "@/lib/i18n"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function Home() {
  const { locale } = useLanguage()
  
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="fixed inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/20 to-black"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </div>
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-green-400/30 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Terminal className="h-6 w-6 text-green-400" />
              <span className="text-xl font-bold text-green-400">JETS://SYSTEM</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#about" className="hover:text-green-300 transition-colors">
                {getTranslation(locale, 'nav.about')}
              </a>
              <a href="#skills" className="hover:text-green-300 transition-colors">
                {getTranslation(locale, 'nav.skills')}
              </a>
              <a href="#projects" className="hover:text-green-300 transition-colors">
                {getTranslation(locale, 'nav.projects')}
              </a>
              <a href="#contact" className="hover:text-green-300 transition-colors">
                {getTranslation(locale, 'nav.contact')}
              </a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-400">
              <span className="text-red-400">&gt;</span> {getTranslation(locale, 'hero.title')}
            </h1>
            <div className="text-xl md:text-2xl text-green-300 mb-6">
              <span className="text-cyan-400">$</span> {getTranslation(locale, 'hero.subtitle')}
            </div>
            <p className="text-lg text-green-400/80 max-w-2xl mx-auto leading-relaxed">
              {getTranslation(locale, 'hero.description')}
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-8">
            <Button
              variant="outline"
              className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
            >
                <Mail className="mr-2 h-4 w-4" />
              <a href="mailto:jets@posteo.ie">
                {getTranslation(locale, 'hero.connect')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16 bg-green-900/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-400">
            <span className="text-red-400">[</span>{getTranslation(locale, 'about.title')}<span className="text-red-400">]</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black/50 border-green-400/30 backdrop-blur-sm">
              <CardContent className="p-8 ">
                <p className="text-green-400/90 leading-relaxed text-lg">
                  {getTranslation(locale, 'about.description')}
                </p>
                  <div className="mt-6 flex flex-row justify-between gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">5+</div>
                      <div className="text-sm text-green-400/70">{getTranslation(locale, 'about.stats.experience')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">24/7</div>
                      <div className="text-sm text-green-400/70">{getTranslation(locale, 'about.stats.uptime')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">∞</div>
                      <div className="text-sm text-green-400/70">{getTranslation(locale, 'about.stats.code')}</div>
                    </div>
                  </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-green-400">
            <span className="text-red-400">[</span>{getTranslation(locale, 'skills.title')}<span className="text-red-400">]</span>
          </h2>

          {/* Laravel Ecosystem */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
              <Zap className="mr-2 h-6 w-6" />
              {getTranslation(locale, 'skills.laravelEcosystem')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Laravel Framework",
                "Eloquent ORM",
                "Artisan CLI",
                "Laravel Mix/Vite",
                "Laravel Sanctum",
                "Laravel Horizon",
                "Laravel Nova",
                "Laravel Forge",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="border-green-400 text-green-400 p-2 justify-center">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Backend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
              <Server className="mr-2 h-6 w-6" />
              {getTranslation(locale, 'skills.backendTechnologies')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["PHP 8.x", "MySQL/PostgreSQL", "Redis", "Docker", "Nginx", "Apache", "REST APIs", "GraphQL"].map(
                (skill) => (
                  <Badge key={skill} variant="outline" className="border-cyan-400 text-cyan-400 p-2 justify-center">
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </div>

          {/* Frontend Technologies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
              <Layers className="mr-2 h-6 w-6" />
              {getTranslation(locale, 'skills.frontendTechnologies')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Vue.js",
                "React",
                "Alpine.js",
                "Tailwind CSS",
                "JavaScript ES6+",
                "TypeScript",
                "Livewire",
                "Inertia.js",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="border-red-400 text-red-400 p-2 justify-center">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center">
              <Shield className="mr-2 h-6 w-6" />
              {getTranslation(locale, 'skills.devopsTools')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Git/GitHub",
                "CI/CD Pipelines",
                "AWS/DigitalOcean",
                "Linux Administration",
                "PHPUnit Testing",
                "Pest Testing",
                "Composer",
                "NPM/Yarn",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="border-yellow-400 text-yellow-400 p-2 justify-center">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-400">
            <span className="text-red-400">[</span>{getTranslation(locale, 'contact.title')}<span className="text-red-400">]</span>
          </h2>
          <p className="text-lg text-green-400/80 mb-8 max-w-2xl mx-auto">
            {getTranslation(locale, 'contact.description')}
          </p>

          <Card className="bg-black/50 border-green-400/30 backdrop-blur-sm max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <a href="mailto:jets@posteo.ie" className="text-green-400 hover:text-green-300 transition-colors">
                    jets@posteo.ie
                  </a>
                </div>
                <div className="text-sm text-green-400/60">
                  <span className="text-red-400">$</span> echo "{getTranslation(locale, 'contact.available')}"
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-green-400/30 bg-black/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-400/60">
            <span className="text-red-400">&copy;</span> {getTranslation(locale, 'footer.copyright')}
            <span className="text-cyan-400 ml-2">{getTranslation(locale, 'footer.tagline')}</span>
          </p>
          <div className="mt-4 text-xs text-green-400/40">
            {getTranslation(locale, 'footer.quote')}
          </div>
        </div>
      </footer>
    </div>
  )
}
