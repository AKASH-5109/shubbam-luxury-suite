import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const collections = [
  {
    title: "Traditional",
    subtitle: "Timeless heritage weaves",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
  },
  {
    title: "Indo-Western",
    subtitle: "Where tradition meets trend",
    image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=800&q=80",
  },
  {
    title: "Western",
    subtitle: "Contemporary elegance",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
  },
];

const CollectionCard = ({ item, index }: { item: typeof collections[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/50 transition-colors duration-500" />
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6">
        <h3 className="text-3xl md:text-4xl font-serif text-cream tracking-[0.1em] mb-2">
          {item.title}
        </h3>
        <p className="text-xs tracking-[0.2em] uppercase text-cream/70 font-sans-body">
          {item.subtitle}
        </p>
        <div className="mt-6 w-12 h-px bg-gold group-hover:w-24 transition-all duration-500" />
      </div>
    </motion.div>
  );
};

const Collections = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
          Curated For You
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
          Our Collections
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {collections.map((item, i) => (
          <CollectionCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
