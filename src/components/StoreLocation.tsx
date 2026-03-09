import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Truck, Phone } from "lucide-react";

const StoreLocation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="location" className="py-28 md:py-36 bg-chocolate-dark relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-gold-light font-sans-body mb-5">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-6">
            Our Boutique
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/images/store-exterior-2.png"
              alt="Shubbam boutique exterior at NSR Road, Saibaba Colony, Coimbatore"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute top-3 left-3 w-10 h-10 border-t border-l border-gold/30" />
            <div className="absolute bottom-3 right-3 w-10 h-10 border-b border-r border-gold/30" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-10"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream mb-2">Location</h3>
                <p className="text-cream/60 font-sans-body text-sm leading-relaxed">
                  NSR Road, Saibaba Colony, Coimbatore
                </p>
                <p className="text-[10px] tracking-[0.15em] text-gold font-sans-body mt-2 uppercase">
                  Only branch — No other locations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Truck className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream mb-2">Pan-India Shipping</h3>
                <p className="text-cream/60 font-sans-body text-sm leading-relaxed">
                  We deliver across India. Contact us to place your order.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center flex-shrink-0 mt-1">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl text-cream mb-2">Call Us</h3>
                <a
                  href="tel:+919994417129"
                  className="text-gold hover:text-gold-light font-sans-body text-sm transition-colors"
                >
                  +91 99944 17129
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8 overflow-hidden border border-gold/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2649!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaibaba+Colony%2C+Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubbam boutique location on Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocation;
