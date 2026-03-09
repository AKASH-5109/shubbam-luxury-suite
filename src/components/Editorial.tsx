import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Editorial = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="w-16 h-px bg-gold mb-8" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-cream leading-tight max-w-3xl">
          Timeless Tradition Meets Contemporary Elegance
        </h2>
        <div className="w-16 h-px bg-gold mt-8" />
      </motion.div>
    </section>
  );
};

export default Editorial;
