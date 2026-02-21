import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Search, 
  Zap, 
  CheckCircle2, 
  MessageCircle, 
  Mail,
  ArrowRight,
  ArrowUp,
  Menu,
  X
} from "lucide-react";
import heroImage from "@assets/generated_images/dark_tech_workspace_hero.png";
import logoImage from "@assets/3f8056a9-1bc4-499f-aaf6-703a3d27b814_1768005490289.png";

const WHATSAPP_LINK = "https://wa.me/542236663939";
const EMAIL = "contacto.amdigital@gmail.com";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50" data-testid="header">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2 hover:opacity-80 transition-opacity" data-testid="logo-brand">
          <img src={logoImage} alt="AM Digital" className="w-10 h-10 rounded-full object-cover" />
          <span className="font-semibold text-foreground tracking-tight">AM Web Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6" data-testid="nav-main">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid={`link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={handleNavClick}
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-base text-primary hover:text-primary/80 transition-colors py-2"
                onClick={handleNavClick}
                data-testid="link-mobile-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" data-testid="section-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8"
          variants={fadeInUp}
          data-testid="badge-hero"
        >
          <span className="text-base text-foreground/90">✦ Desarrollo y diseño web profesional</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.1] drop-shadow-lg"
          variants={fadeInUp}
          data-testid="text-hero-title"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="font-semibold tracking-normal" style={{ fontFamily: "'Lora', serif" }}>Potenciamos</span>
          <br />
          <span className="text-primary font-light italic tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>tu negocio digital</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 drop-shadow-md"
          variants={fadeInUp}
          data-testid="text-hero-subtitle"
        >
          Diseño, SEO y automatización para hacer crecer tu negocio
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <Button asChild size="lg" className="text-base px-8" data-testid="button-hero-whatsapp">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Consultá por WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-base backdrop-blur-sm bg-background/20" data-testid="button-hero-servicios">
            <a href="#servicios">
              Ver servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    title: "Sitios Web",
    description: "Desarrollamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes. Diseño responsive y experiencia de usuario excepcional."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Posicionamos tu negocio en los primeros resultados de Google. Estrategias de SEO que aumentan tu visibilidad y atraen clientes potenciales."
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatizamos procesos repetitivos para que tu negocio funcione de manera más eficiente. Ahorrá tiempo y recursos con soluciones inteligentes."
  }
];

function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 relative" data-testid="section-servicios">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-servicios-title">
            Nuestros servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-servicios-subtitle">
            Soluciones digitales integrales para impulsar tu presencia online
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="p-8 h-full bg-card border-card-border hover:-translate-y-1 transition-transform duration-300"
                data-testid={`card-service-${index}`}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const benefits = [
  {
    title: "Soluciones a medida",
    description: "Cada proyecto es único. Diseñamos estrategias personalizadas según tus objetivos."
  },
  {
    title: "Enfoque en resultados",
    description: "Nos enfocamos en métricas reales que impactan en el crecimiento de tu negocio."
  },
  {
    title: "Comunicación directa",
    description: "Atención personalizada y respuestas rápidas. Sin intermediarios ni demoras."
  },
  {
    title: "Soporte continuo",
    description: "Te acompañamos después del lanzamiento con mantenimiento y actualizaciones."
  }
];

function WhyChooseUsSection() {
  return (
    <section id="nosotros" className="py-20 md:py-32 bg-card/50 relative" data-testid="section-nosotros">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-nosotros-title">
            Por qué elegirnos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-nosotros-subtitle">
            Comprometidos con el éxito de tu negocio
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="flex gap-4 p-6 rounded-xl bg-background border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              data-testid={`benefit-${index}`}
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contacto" className="py-20 md:py-32 relative" data-testid="section-contacto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-contacto-title">
            ¿Listo para empezar?
          </h2>
          <p className="text-muted-foreground text-lg mb-8" data-testid="text-contacto-subtitle">
            Contanos sobre tu proyecto y te ayudamos a encontrar la mejor solución para tu negocio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button asChild size="lg" className="text-base px-8 w-full sm:w-auto" data-testid="button-contact-whatsapp">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultá por WhatsApp
              </a>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <a 
              href={`mailto:${EMAIL}`} 
              className="hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              {EMAIL}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2" data-testid="footer-brand">
              <img src={logoImage} alt="AM Digital" className="w-10 h-10 rounded-full object-cover" />
              <span className="font-semibold text-foreground tracking-tight">AM Web Studio</span>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-footer-tagline">Desarrollo de Sitios Web</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-2">
            <a 
              href={`mailto:${EMAIL}`} 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-email"
            >
              {EMAIL}
            </a>
            <p className="text-xs text-muted-foreground" data-testid="text-footer-copyright">
              © {new Date().getFullYear()} AM Web Studio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3" data-testid="floating-buttons">
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="icon"
              variant="secondary"
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full shadow-lg"
              aria-label="Ir al inicio"
              data-testid="button-scroll-top"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5C] transition-colors flex items-center justify-center shadow-lg"
        aria-label="Contactar por WhatsApp"
        data-testid="button-floating-whatsapp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
