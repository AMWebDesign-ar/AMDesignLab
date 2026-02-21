import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Search, 
  Zap, 
  Share2,
  CheckCircle2, 
  MessageCircle, 
  Mail,
  Phone,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  Send,
  Loader2
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { SiWhatsapp } from "react-icons/si";
import heroImage from "@assets/generated_images/dark_tech_workspace_hero.png";
import logoImage from "@assets/3f8056a9-1bc4-499f-aaf6-703a3d27b814_1768005490289.png";

const WHATSAPP_LINK = "https://wa.me/542236663939";
const EMAIL = "contacto.amdigital@gmail.com";
const PHONE = "5492236663939";

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
          <motion.img 
            src={logoImage} 
            alt="AM Digital" 
            className="w-10 h-10 rounded-full object-cover"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm mb-8 overflow-hidden relative"
          variants={fadeInUp}
          data-testid="badge-hero"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <span className="text-base text-foreground/90 relative z-10">✦ Desarrollo y diseño web profesional</span>
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.1] drop-shadow-lg"
          variants={fadeInUp}
          data-testid="text-hero-title"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-primary font-extrabold tracking-[-0.02em]">Tu</span> web lista para vender y posicionar
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 drop-shadow-md"
          variants={fadeInUp}
          data-testid="text-hero-subtitle"
        >
          Diseño web, SEO y automatización para crecer
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <Button asChild variant="outline" size="sm" className="text-xs px-4 backdrop-blur-sm bg-background/20" data-testid="button-hero-servicios">
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
  },
  {
    icon: Share2,
    title: "Contenido para Redes",
    description: "Creamos contenido atractivo y estratégico para tus redes sociales. Publicaciones que conectan con tu audiencia y potencian tu marca."
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
    title: "Proyectos 100% a medida",
    description: "Nos reunimos con vos para entender lo que buscás y necesitás. Cada proyecto se construye desde cero, adaptado a tus objetivos."
  },
  {
    title: "Comunicación excepcional",
    description: "Estamos siempre disponibles. Respuestas claras, rápidas y directas en cada etapa del proyecto."
  },
  {
    title: "Resultados que se notan",
    description: "No prometemos, cumplimos. Cada proyecto se mide por el impacto real que genera en tu negocio."
  },
  {
    title: "Acompañamiento continuo",
    description: "No te dejamos solo después del lanzamiento. Soporte, mejoras y seguimiento constante."
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
  const { toast } = useToast();
  const [formData, setFormData] = useState({ nombreApellido: "", telefono: "", consulta: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nombreApellido || !formData.telefono || !formData.consulta) {
      toast({ title: "Completá todos los campos", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", formData);
      setSubmitted(true);
      setFormData({ nombreApellido: "", telefono: "", consulta: "" });
      toast({ title: "¡Mensaje enviado!", description: "Nos pondremos en contacto pronto." });
    } catch {
      toast({ title: "Error al enviar", description: "Intentá de nuevo más tarde.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 md:py-32 relative" data-testid="section-contacto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight" data-testid="text-contacto-title">
              Hagamos crecer tu marca
            </h2>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href={`tel:${PHONE.replace(/[\s-]/g, "")}`}
                  className="hover:text-foreground transition-colors"
                  data-testid="link-contact-phone"
                >
                  Teléfono
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MessageCircle className="w-5 h-5 text-primary" />
                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                  data-testid="link-contact-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="hover:text-foreground transition-colors"
                  data-testid="link-email"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-12" data-testid="contact-success">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">¡Gracias por tu consulta!</h3>
                <p className="text-muted-foreground">Nos pondremos en contacto a la brevedad.</p>
                <Button 
                  variant="outline" 
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                  data-testid="button-new-message"
                >
                  Enviar otra consulta
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-contact">
                <div>
                  <Input
                    placeholder="Nombre y apellido"
                    value={formData.nombreApellido}
                    onChange={(e) => setFormData({ ...formData, nombreApellido: e.target.value })}
                    data-testid="input-nombre"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Teléfono de contacto"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    data-testid="input-telefono"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Tu consulta"
                    value={formData.consulta}
                    onChange={(e) => setFormData({ ...formData, consulta: e.target.value })}
                    rows={4}
                    data-testid="input-consulta"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4 mr-2" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar consulta"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
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
              <motion.img 
                src={logoImage} 
                alt="AM Digital" 
                className="w-10 h-10 rounded-full object-cover"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
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
    <>
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-28 right-7 z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0, y: 10 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-muted/60 backdrop-blur-sm border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ir al inicio"
              data-testid="button-scroll-top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-6 right-6 z-50" data-testid="floating-buttons">
        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20BA5C] transition-colors flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.7)]"
          aria-label="Contactar por WhatsApp"
          data-testid="button-floating-whatsapp"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiWhatsapp className="w-8 h-8 text-white" />
        </motion.a>
      </div>
    </>
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
