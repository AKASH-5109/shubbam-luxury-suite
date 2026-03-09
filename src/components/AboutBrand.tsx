import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutBrand = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
            Our Story
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-8">
            About Shubbam
          </h2>
          <div className="space-y-6 text-muted-foreground font-sans-body leading-relaxed">
            <p>
              Shubbam blends timeless tradition with modern elegance, offering curated
              designs for women who appreciate heritage and style. Every piece in our
              collection tells a story of craftsmanship and contemporary vision.
            </p>
            <p>
              From luxurious traditional sarees to chic indo-western ensembles, our
              boutique brings together the finest fabrics and designs to create fashion
              that transcends seasons.
            </p>
            <p>
              Located in the heart of Coimbatore, Shubbam is more than a boutique — it's a
              destination for women who seek fashion with meaning.
            </p>
          </div>
          <div className="mt-8 w-16 h-px bg-accent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <img
            src="/images/store-exterior-2.png"
            alt="Shubbam boutique interior"
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-accent/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBrand;
