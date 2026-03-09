import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutBrand = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 md:py-36 px-6 lg:px-16 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-10 leading-[1.1]">
            About<br />
            <span className="text-gradient-gold">Shubbam</span>
          </h2>
          <div className="space-y-6 text-muted-foreground font-sans-body leading-[1.8] text-sm">
            <p>
              Shubbam blends timeless tradition with modern elegance, offering curated
              designs for women who appreciate heritage and style. Every piece in our
              collection tells a story of craftsmanship and contemporary vision.
            </p>
            <p>
              From luxurious traditional sarees to chic indo-western ensembles, our
              boutique brings together the finest fabrics and designs to create fashion
              that transcends seasons and celebrates the beauty of Indian artistry.
            </p>
            <p>
              Located in the heart of Coimbatore, Shubbam is more than a boutique — it's a
              destination for women who seek fashion with meaning, heritage with modernity.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-6">
            <div className="w-16 h-px bg-gold" />
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-sans-body italic"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px" }}
            >
              Traditionally Modern
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative overflow-hidden">
            <img
              src="/images/about-interior.png"
              alt="Shubbam boutique interior with designer collections"
              loading="lazy"
              className="w-full aspect-[4/5] object-cover"
            />
            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-gold/40" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-gold/40" />
          </div>
          {/* Side accent block */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border border-gold/15 -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrand;
