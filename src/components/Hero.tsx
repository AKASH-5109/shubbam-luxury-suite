import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Shubbam luxury fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/70 via-chocolate-dark/50 to-chocolate-dark/80" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Decorative top line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="h-px bg-gold/60 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-light font-sans-body mb-8"
        >
          Premium Women&apos;s Boutique
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-serif tracking-[0.08em] text-cream leading-[0.9] mb-6"
        >
          Shubbam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg md:text-2xl font-serif italic text-gold mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Traditionally Modern
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="h-px bg-gold/40 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-xs md:text-sm tracking-[0.12em] text-cream/60 font-sans-body max-w-md mx-auto mb-14 leading-relaxed"
        >
          Elegant traditional and contemporary fashion for women who appreciate heritage, craftsmanship & modern style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button
            onClick={() => scrollTo("#collections")}
            className="group px-12 py-4 border border-gold/50 text-cream text-[10px] tracking-[0.3em] uppercase font-sans-body hover:bg-gold hover:text-chocolate-dark hover:border-gold transition-all duration-600 relative overflow-hidden"
          >
            <span className="relative z-10">Explore Collection</span>
          </button>
          <button
            onClick={() => scrollTo("#location")}
            className="px-12 py-4 bg-cream/5 backdrop-blur-sm border border-cream/20 text-cream/70 text-[10px] tracking-[0.3em] uppercase font-sans-body hover:bg-cream/15 hover:text-cream hover:border-cream/40 transition-all duration-500"
          >
            Visit Store
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] tracking-[0.4em] uppercase text-cream/30 font-sans-body">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
