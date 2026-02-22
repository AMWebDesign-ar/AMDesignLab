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
  Plus,
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
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6" data-testid="nav-main">
          <a 
            href="#servicios"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-servicios"
          >
            Servicios
          </a>
          <span className="w-px h-4 bg-foreground/30" />
          <a 
            href="#nosotros"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-nosotros"
          >
            Nosotros
          </a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="#contacto"
            className="relative inline-flex items-center px-7 py-2.5 text-xs font-semibold text-white rounded-full overflow-hidden group shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            data-testid="link-hablemos"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
            <span className="absolute inset-[2px] rounded-full bg-background/90 group-hover:bg-background/70 transition-colors" />
            <span className="relative">HABLEMOS</span>
          </a>
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
                href="#contacto"
                className="relative inline-flex items-center justify-center px-7 py-2.5 text-xs font-semibold text-white rounded-full overflow-hidden group mt-2"
                onClick={handleNavClick}
                data-testid="link-mobile-hablemos"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
                <span className="absolute inset-[2px] rounded-full bg-background/90 group-hover:bg-background/70 transition-colors" />
                <span className="relative">HABLEMOS</span>
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
      <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/55 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/65 via-transparent to-background/65" />
      
      <motion.div 
        className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        <motion.div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/25 backdrop-blur-sm overflow-hidden relative mb-3"
          variants={fadeInUp}
          data-testid="badge-hero"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          <span className="text-[1.05rem] text-foreground/90 relative z-10">✦ Proyectos para marcas y emprendedores en Argentina</span>
        </motion.div>
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-[1.1] drop-shadow-lg [text-shadow:0_0_30px_rgba(59,130,246,0.15)] max-w-4xl mx-auto"
          variants={fadeInUp}
          data-testid="text-hero-title"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span className="text-primary font-extrabold tracking-[-0.02em]">Tu</span> web lista para vender
          <br />
          y posicionar
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mt-3 mb-10 drop-shadow-md"
          variants={fadeInUp}
          data-testid="text-hero-subtitle"
        >
          Diseño web, SEO y automatización para crecer
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeInUp}
        >
          <a 
            href="#servicios"
            className="relative inline-flex items-center px-7 py-2.5 text-xs font-semibold text-white rounded-full overflow-hidden group shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            data-testid="button-hero-servicios"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite]" />
            <span className="absolute inset-[2px] rounded-full bg-background/90 group-hover:bg-background/70 transition-colors" />
            <span className="relative flex items-center gap-2">
              EMPEZAR PROYECTO
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    title: "Sitios Web",
    description: "Desarrollamos sitios web modernos, rápidos y optimizados para convertir visitantes en clientes.",
    details: "Diseño responsive, velocidad de carga optimizada, integración con herramientas de analítica y experiencia de usuario excepcional. Tu sitio listo para vender desde el primer día."
  },
  {
    icon: Search,
    title: "SEO",
    description: "Posicionamos tu negocio en los primeros resultados de Google.",
    details: "Auditoría técnica, optimización on-page, estrategia de keywords y link building. Aumentamos tu visibilidad orgánica y atraemos clientes potenciales de forma sostenible."
  },
  {
    icon: Zap,
    title: "Automatización",
    description: "Automatizamos procesos repetitivos para que tu negocio sea más eficiente.",
    details: "Flujos de trabajo automáticos, integración entre plataformas, respuestas automáticas y reportes. Ahorrá tiempo y recursos con soluciones inteligentes."
  },
  {
    icon: Share2,
    title: "Contenido para Redes",
    description: "Creamos contenido atractivo y estratégico para tus redes sociales.",
    details: "Diseño de posts, calendario editorial, estrategia de contenido y análisis de métricas. Publicaciones que conectan con tu audiencia y potencian tu marca."
  }
];

function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="servicios" className="py-20 md:py-32 relative bg-[hsl(220,8%,14%)]" data-testid="section-servicios">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-end">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            const isDimmed = openIndex !== null && openIndex !== index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ opacity: isDimmed ? 0.93 : 1, transition: 'opacity 0.25s ease-in-out', alignSelf: 'flex-end' }}
              >
                <Card 
                  className={`group p-8 min-h-[280px] bg-card cursor-pointer hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)] transition-all duration-[250ms] ease-in-out relative overflow-hidden ${isOpen ? 'border-primary/40 shadow-[0_0_15px_rgba(59,130,246,0.06)] bg-[hsl(220,8%,16%)]' : ''} ${isDimmed ? 'border-card-border/40' : 'border-card-border'}`}
                  data-testid={`card-service-${index}`}
                  onClick={() => toggleCard(index)}
                >
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: 'radial-gradient(circle at 50% 40%, rgba(59,130,246,0.06) 0%, transparent 70%)' }}
                      />
                    )}
                  </AnimatePresence>
                  <div className="flex items-start justify-between mb-6 relative">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-[250ms] ease-in-out group-hover:bg-primary/15 group-hover:scale-105">
                      <service.icon className="w-6 h-6 text-primary transition-colors duration-[250ms] ease-in-out" />
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-muted-foreground group-hover:text-primary transition-colors duration-[250ms] ease-in-out mt-1"
                    >
                      <Plus className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-[250ms] ease-in-out group-hover:text-primary">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed transition-colors duration-[250ms] ease-in-out">{service.description}</p>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.p
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                          className="text-muted-foreground/80 leading-relaxed mt-4 pt-4 border-t border-border/50 text-sm"
                        >
                          {service.details}
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
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
    <section id="nosotros" className="py-20 md:py-32 bg-[hsl(220,6%,11%)] relative" data-testid="section-nosotros">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight" data-testid="text-nosotros-title">
              Por qué elegirnos
            </h2>
            <p className="text-muted-foreground text-lg mb-2" data-testid="text-nosotros-subtitle">
              Comprometidos con tu éxito
            </p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-sm">
              Trabajamos codo a codo con cada cliente para entregar soluciones digitales que realmente generan resultados.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5 items-end">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex gap-4 p-5 rounded-xl bg-background/50 border-2 border-border/50 hover:border-primary/30 hover:translate-y-[-2px] hover:bg-background/70 transition-all duration-[250ms] ease-in-out w-full cursor-default"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
    <section id="contacto" className="py-20 md:py-32 relative bg-[hsl(220,8%,15%)]" data-testid="section-contacto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 tracking-tight" data-testid="text-contacto-title">
              Hablemos de tu proyecto
            </h2>
            <p className="text-muted-foreground/70 text-sm leading-relaxed max-w-sm">
              Respondemos rápido y te orientamos.
            </p>
            <div className="flex flex-col gap-4 mt-7">
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
              <>
              <p className="text-muted-foreground/40 text-xs mb-3 tracking-wide">Te responderemos en menos de 24 hs.</p>
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
                  className="w-full h-14 text-base font-semibold tracking-wide py-6" 
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 mr-2" />
                  )}
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                </Button>
              </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-[hsl(220,6%,9%)]" data-testid="footer">
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
