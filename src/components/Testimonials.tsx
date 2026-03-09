import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    location: "Coimbatore",
    text: "Absolutely stunning collection! The saree I bought was exquisite — the fabric quality and design are beyond what I expected. Shubbam truly understands elegance.",
    rating: 5,
  },
  {
    name: "Anjali Krishnan",
    location: "Chennai",
    text: "My go-to boutique for every occasion. The indo-western pieces are unique and beautifully crafted. The staff is incredibly helpful and their styling advice is always spot-on.",
    rating: 5,
  },
  {
    name: "Meera Rajendran",
    location: "Chennai",
    text: "I drove from Chennai just to visit Shubbam, and it was worth every mile. The boutique has a curated feel — every piece tells a story. Will definitely be back!",
    rating: 5,
  },
  {
    name: "Deepa Venkatesh",
    location: "Bangalore",
    text: "The attention to detail in their designs is remarkable. I ordered online and the delivery was prompt and beautifully packaged. Pan-India shipping is a game-changer!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-28 md:py-36 bg-warm-beige/50 relative overflow-hidden">
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 opacity-[0.04]">
        <Quote className="w-40 h-40 text-chocolate" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-[0.04] rotate-180">
        <Quote className="w-40 h-40 text-chocolate" />
      </div>

      <div ref={ref} className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
            Client Stories
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
            Testimonials
          </h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        <div className="relative min-h-[280px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center w-full"
            >
              <div className="flex justify-center gap-1.5 mb-8">
                {Array.from({ length: reviews[current].rating }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p
                className="text-lg md:text-xl text-foreground/70 leading-[1.9] italic max-w-2xl mx-auto mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 24px)" }}
              >
                "{reviews[current].text}"
              </p>
              <div className="w-8 h-px bg-gold mx-auto mb-5" />
              <p className="text-[11px] tracking-[0.25em] uppercase text-foreground font-sans-body font-medium">
                {reviews[current].name}
              </p>
              <p className="text-[10px] tracking-[0.15em] text-muted-foreground font-sans-body mt-1">
                {reviews[current].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 rounded-full border border-border hover:border-gold flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-3">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? "bg-gold w-8" : "bg-border w-1.5 hover:bg-gold/40"
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
            className="w-10 h-10 rounded-full border border-border hover:border-gold flex items-center justify-center text-muted-foreground hover:text-gold transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
