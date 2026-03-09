import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Visit Store", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
          ? "bg-ivory/95 backdrop-blur-xl shadow-[0_1px_0_0_hsl(var(--border))]"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-20 lg:h-24">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleClick("#home"); }}
          className="flex items-center gap-3 group"
        >
          <img
            src="/images/store-exterior.png"
            alt="Shubbam Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-gold/30 group-hover:border-gold transition-colors duration-300"
          />
          <div className="flex flex-col">
            <span className={`font-serif text-xl tracking-[0.2em] uppercase transition-colors duration-500 ${scrolled ? "text-chocolate" : "text-cream"
              }`}>
              Shubbam
            </span>
            <span className={`text-[9px] tracking-[0.35em] uppercase font-sans-body transition-colors duration-500 ${scrolled ? "text-gold" : "text-gold-light"
              }`}>
              Traditionally Modern
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
              className={`relative text-[11px] tracking-[0.2em] uppercase font-sans-body transition-colors duration-300 group ${scrolled
                  ? "text-chocolate-light hover:text-chocolate"
                  : "text-cream/70 hover:text-cream"
                }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-chocolate" : "text-cream"
            }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-ivory/98 backdrop-blur-xl border-t border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-12">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="text-[11px] tracking-[0.25em] uppercase font-sans-body text-chocolate-light hover:text-chocolate transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="w-12 h-px bg-gold/40 mt-2" />
              <a
                href="tel:+919994417129"
                className="text-[11px] tracking-[0.15em] font-sans-body text-gold hover:text-chocolate transition-colors"
              >
                +91 99944 17129
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
