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
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm tracking-[0.4em] uppercase text-warm-beige/80 font-sans-body mb-6"
        >
          Women&apos;s Boutique
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-[0.15em] text-cream mb-4"
        >
          Shubbam
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-xl md:text-2xl font-serif italic text-gold mb-6"
        >
          Traditionally Modern
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-sm md:text-base tracking-[0.1em] text-warm-beige/70 font-sans-body max-w-lg mx-auto mb-12"
        >
          Elegant traditional and contemporary fashion for modern women.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("#collections")}
            className="px-10 py-4 border border-cream/60 text-cream text-xs tracking-[0.25em] uppercase font-sans-body hover:bg-cream hover:text-charcoal transition-all duration-500"
          >
            Explore Collection
          </button>
          <button
            onClick={() => scrollTo("#location")}
            className="px-10 py-4 bg-cream/10 backdrop-blur-sm border border-cream/30 text-cream/80 text-xs tracking-[0.25em] uppercase font-sans-body hover:bg-cream/20 transition-all duration-500"
          >
            Visit Store
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-cream/40" />
      </motion.div>
    </section>
  );
};

export default Hero;
