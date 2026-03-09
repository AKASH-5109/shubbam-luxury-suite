import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const posts = [
  "/images/traditional.png",
  "/images/gallery-1.png",
  "/images/indowestern.png",
  "/images/gallery-3.png",
  "/images/gallery-5.png",
  "/images/western.png",
];

const InstagramGallery = () => {
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
        <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-5">
          <Instagram className="w-4 h-4 text-gold" />
        </div>
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
          Follow Our Journey
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
          @shubbamcbe
        </h2>
        <div className="divider-gold w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
        {posts.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/shubbamcbe"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative overflow-hidden aspect-square"
          >
            <img
              src={src}
              alt={`Shubbam Instagram post ${i + 1}`}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-chocolate-dark/0 group-hover:bg-chocolate-dark/50 transition-colors duration-400 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 scale-90 group-hover:scale-100 flex flex-col items-center gap-2">
                <Instagram className="w-6 h-6 text-cream" />
                <span className="text-[8px] tracking-[0.3em] uppercase text-cream/80 font-sans-body">View Post</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-12"
      >
        <a
          href="https://www.instagram.com/shubbamcbe"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-foreground text-[10px] tracking-[0.25em] uppercase font-sans-body hover:bg-foreground hover:text-background transition-all duration-500"
        >
          <Instagram className="w-3.5 h-3.5" />
          Follow on Instagram
        </a>
      </motion.div>
    </section>
  );
};

export default InstagramGallery;
