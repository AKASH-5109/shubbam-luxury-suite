import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=600&q=80", alt: "Designer outfit 1", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80", alt: "Designer outfit 2", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&q=80", alt: "Designer outfit 3", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80", alt: "Designer outfit 4", span: "col-span-1" },
  { src: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80", alt: "Designer outfit 5", span: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=600&q=80", alt: "Designer outfit 6", span: "col-span-1" },
];

const FeaturedGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
          Handpicked
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
          Featured Designs
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative overflow-hidden ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGallery;
