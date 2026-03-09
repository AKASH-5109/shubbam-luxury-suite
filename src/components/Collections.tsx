import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const collections = [
  {
    title: "Traditional",
    subtitle: "Timeless heritage weaves",
    description: "Handpicked sarees, lehengas & ethnic ensembles",
    image: "/images/traditional.png",
  },
  {
    title: "Indo-Western",
    subtitle: "Where tradition meets trend",
    description: "Contemporary fusion designs for the modern woman",
    image: "/images/indowestern.png",
  },
  {
    title: "Western",
    subtitle: "Contemporary elegance",
    description: "Chic silhouettes for every occasion",
    image: "/images/western.png",
  },
];

const CollectionCard = ({ item, index }: { item: typeof collections[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: index * 0.15, ease: "easeOut" }}
      className="group relative overflow-hidden cursor-pointer aspect-[3/4]"
    >
      <img
        src={item.image}
        alt={`${item.title} collection at Shubbam boutique`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/80 via-chocolate-dark/20 to-transparent group-hover:from-chocolate-dark/90 transition-all duration-700" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-14 px-8">
        <motion.div className="text-center">
          <span className="block text-[9px] tracking-[0.4em] uppercase text-gold-light/80 font-sans-body mb-3 group-hover:text-gold transition-colors duration-500">
            {item.subtitle}
          </span>
          <h3 className="text-3xl md:text-4xl font-serif text-cream tracking-[0.06em] mb-3 group-hover:text-white transition-colors duration-500">
            {item.title}
          </h3>
          <p className="text-[10px] tracking-[0.1em] text-cream/50 font-sans-body max-w-[200px] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            {item.description}
          </p>
          <div className="mt-5 w-8 h-px bg-gold mx-auto group-hover:w-16 transition-all duration-700" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Collections = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="collections" className="py-28 md:py-36 px-6 lg:px-16 max-w-7xl mx-auto">
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
          Curated For You
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
          Our Collections
        </h2>
        <div className="divider-gold w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
        {collections.map((item, i) => (
          <CollectionCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
