import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const posts = [
  "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80",
  "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&q=80",
  "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&q=80",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=400&q=80",
];

const InstagramGallery = () => {
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
        <Instagram className="w-6 h-6 mx-auto mb-4 text-accent" />
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
          Follow Us
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
          @shubbamcbe
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {posts.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/shubbamcbe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden aspect-square"
          >
            <img
              src={src}
              alt={`Shubbam Instagram post ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default InstagramGallery;
