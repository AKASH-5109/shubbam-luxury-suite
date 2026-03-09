import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const images = [
  { src: "/images/gallery-1.png", alt: "Bridal lehenga in red and gold", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-2.png", alt: "Silk dupatta in teal and gold", span: "col-span-1" },
  { src: "/images/gallery-3.png", alt: "Pink anarkali suit with embroidery", span: "col-span-1" },
  { src: "/images/gallery-4.png", alt: "Gold jewelry and silk accessories", span: "col-span-1" },
  { src: "/images/gallery-5.png", alt: "Navy Banarasi silk saree", span: "col-span-1 row-span-2" },
  { src: "/images/gallery-6.png", alt: "Mint green churidar with chikankari", span: "col-span-1" },
];

const FeaturedGallery = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-28 md:py-36 px-6 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
          Handpicked Designs
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
          Featured Collection
        </h2>
        <div className="divider-gold w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 auto-rows-[220px] md:auto-rows-[280px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
            className={`group relative overflow-hidden ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            {/* Hover caption */}
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <p className="text-[10px] tracking-[0.15em] text-cream/90 font-sans-body uppercase">
                {img.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGallery;
