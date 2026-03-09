import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";

const StoreLocation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="py-24 md:py-32 bg-secondary/50">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
            Visit Us
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground">
            Our Boutique
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/images/store-exterior.png"
              alt="Shubbam boutique exterior at NSR Road, Saibaba Colony, Coimbatore"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground font-sans-body">
                  NSR Road, Saibaba Colony, Coimbatore
                </p>
                <p className="text-sm text-accent font-sans-body mt-1 italic">
                  Only branch — No other locations
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl text-foreground mb-1">Pan-India Shipping</h3>
                <p className="text-muted-foreground font-sans-body">
                  We deliver across India. Contact us for orders.
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6 overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2649!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSaibaba+Colony%2C+Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="250"
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
