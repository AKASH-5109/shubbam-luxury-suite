import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Priya Sharma",
    text: "Absolutely stunning collection! The saree I bought was exquisite — the fabric quality and design are beyond what I expected. Shubbam truly understands elegance.",
    rating: 5,
  },
  {
    name: "Anjali Krishnan",
    text: "My go-to boutique for every occasion. The indo-western pieces are unique and beautifully crafted. The staff is incredibly helpful and styling advice is spot-on.",
    rating: 5,
  },
  {
    name: "Meera Rajendran",
    text: "I drove from Chennai just to visit Shubbam, and it was worth every mile. The boutique has a curated feel — every piece tells a story. Will definitely be back!",
    rating: 5,
  },
  {
    name: "Deepa Venkatesh",
    text: "The attention to detail in their designs is remarkable. I ordered online and the delivery was prompt. Pan-India shipping is a game-changer!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-secondary/30">
      <div ref={ref} className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="relative min-h-[200px]">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: i === current ? 1 : 0,
                y: i === current ? 0 : 20,
              }}
              transition={{ duration: 0.6 }}
              className={`text-center ${i === current ? "block" : "hidden"}`}
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground/80 font-sans-body leading-relaxed italic max-w-2xl mx-auto mb-8">
                "{review.text}"
              </p>
              <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground font-sans-body">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-accent w-6" : "bg-border"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % reviews.length)}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
