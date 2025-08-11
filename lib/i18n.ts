export type Locale = 'en' | 'es'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'es']

export function getLocaleFromAcceptLanguage(acceptLanguage: string): Locale {
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
  
  // Check for Spanish variants
  const spanishVariants = ['es', 'es-es', 'es-mx', 'es-ar', 'es-cl', 'es-co', 'es-pe', 'es-ve', 'es-gt', 'es-cr', 'es-pa', 'es-cu', 'es-bo', 'es-ec', 'es-gq', 'es-py', 'es-sv', 'es-hn', 'es-ni', 'es-pr', 'es-do', 'es-uy', 'es-gy', 'es-sr', 'es-bz', 'es-bw', 'es-zw', 'es-na', 'es-ao', 'es-mz', 'es-cv', 'es-gw', 'es-mo', 'es-st', 'es-tl', 'es-ph', 'es-eh', 'es-ma', 'es-dz', 'es-tn', 'es-ly', 'es-td', 'es-cm', 'es-cf', 'es-cg', 'es-cd', 'es-gab', 'es-cg', 'es-ga', 'es-gq', 'es-cm', 'es-cf', 'es-cg', 'es-cd', 'es-ao', 'es-mz', 'es-cv', 'es-gw', 'es-mo', 'es-st', 'es-tl', 'es-ph', 'es-eh', 'es-ma', 'es-dz', 'es-tn', 'es-ly', 'es-td', 'es-cm', 'es-cf', 'es-cg', 'es-cd', 'es-ao', 'es-mz', 'es-cv', 'es-gw', 'es-mo', 'es-st', 'es-tl', 'es-ph', 'es-eh', 'es-ma', 'es-dz', 'es-tn', 'es-ly', 'es-td', 'es-cm', 'es-cf', 'es-cg', 'es-cd']
  
  for (const lang of languages) {
    if (spanishVariants.includes(lang)) {
      return 'es'
    }
  }
  
  return defaultLocale
}

export const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      skills: 'SKILLS',
      projects: 'PROJECTS',
      contact: 'CONTACT'
    },
    hero: {
      title: 'JORGE EDUARDO TIRADO SANDOVAL',
      subtitle: 'Full-Stack Laravel Developer',
      description: 'Connecting the wired world through elegant code. Specialized in Laravel ecosystem and modern web architectures. Reality is just another layer of abstraction.',
      connect: 'CONNECT',
      viewCode: 'VIEW CODE'
    },
    about: {
      title: 'ABOUT',
      description: 'In the interconnected web of digital existence, I craft solutions that bridge the gap between human needs and machine logic. With deep expertise in the Laravel ecosystem, I architect scalable applications that handle the complexity of modern web development while maintaining elegant simplicity.',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Deployed',
        uptime: 'System Uptime',
        code: 'Lines of Code'
      }
    },
    skills: {
      title: 'TECHNICAL STACK',
      laravelEcosystem: 'Laravel Ecosystem',
      backendTechnologies: 'Backend Technologies',
      frontendTechnologies: 'Frontend Technologies',
      devopsTools: 'DevOps & Tools'
    },
    contact: {
      title: 'ESTABLISH CONNECTION',
      description: 'Ready to connect to the network? Let\'s build something that transcends the boundaries between the digital and physical worlds.',
      available: 'Available for freelance projects and collaborations'
    },
    footer: {
      copyright: '© 2025 Jorge Eduardo Tirado Sandoval.',
      tagline: 'Present day, present time.',
      quote: '"No matter where you go, everyone\'s connected." - Serial Experiments Lain'
    }
  },
  es: {
    nav: {
      about: 'ACERCA DE',
      skills: 'HABILIDADES',
      projects: 'PROYECTOS',
      contact: 'CONTACTO'
    },
    hero: {
      title: 'JORGE EDUARDO TIRADO SANDOVAL',
      subtitle: 'Desarrollador Full-Stack Laravel',
      description: 'Conectando el mundo cableado a través de código elegante. Especializado en el ecosistema Laravel y arquitecturas web modernas. La realidad es solo otra capa de abstracción.',
      connect: 'CONECTAR',
      viewCode: 'VER CÓDIGO'
    },
    about: {
      title: 'ACERCA DE',
      description: 'En la red interconectada de la existencia digital, creo soluciones que unen las necesidades humanas con la lógica de las máquinas. Con profunda experiencia en el ecosistema Laravel, diseño aplicaciones escalables que manejan la complejidad del desarrollo web moderno mientras mantienen una simplicidad elegante.',
      stats: {
        experience: 'Años de Experiencia',
        projects: 'Proyectos Desplegados',
        uptime: 'Tiempo Activo del Sistema',
        code: 'Líneas de Código'
      }
    },
    skills: {
      title: 'STACK TÉCNICO',
      laravelEcosystem: 'Ecosistema Laravel',
      backendTechnologies: 'Tecnologías Backend',
      frontendTechnologies: 'Tecnologías Frontend',
      devopsTools: 'DevOps y Herramientas'
    },
    contact: {
      title: 'ESTABLECER CONEXIÓN',
      description: '¿Listo para conectarte a la red? Construyamos algo que trascienda los límites entre los mundos digital y físico.',
      available: 'Disponible para proyectos freelance y colaboraciones'
    },
    footer: {
      copyright: '© 2024 Jorge Eduardo Tirado Sandoval.',
      tagline: 'Día presente, tiempo presente.',
      quote: '"No importa a dónde vayas, todos están conectados." - Serial Experiments Lain'
    }
  }
} as const

export type TranslationKey = keyof typeof translations.en
export type TranslationKeys = keyof typeof translations.en.nav | keyof typeof translations.en.hero | keyof typeof translations.en.about | keyof typeof translations.en.skills | keyof typeof translations.en.contact | keyof typeof translations.en.footer

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.')
  let value: any = translations[locale]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}
