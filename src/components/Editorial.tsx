import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Editorial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/editorial.png"
          alt="Shubbam editorial fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/50 via-chocolate-dark/60 to-chocolate-dark/70" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2 }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-gold mb-10"
        />
        <p className="text-[10px] tracking-[0.5em] uppercase text-gold-light/80 font-sans-body mb-6">
          Our Philosophy
        </p>
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-[1.2] max-w-3xl"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          Timeless Tradition Meets<br />
          <em className="text-gold">Contemporary Elegance</em>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 60 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-gold mt-10"
        />
      </motion.div>
    </section>
  );
};

export default Editorial;
