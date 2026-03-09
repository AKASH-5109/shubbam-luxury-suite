import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Enter a valid phone number").max(15),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const ContactSection = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check your input",
        description: result.error.errors[0]?.message,
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 md:py-36 px-6 lg:px-16 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <p className="text-[10px] tracking-[0.4em] uppercase text-gold font-sans-body mb-5">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6">
          Contact Us
        </h2>
        <div className="divider-gold w-24 mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-8"
        >
          <div>
            <label htmlFor="name" className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body block mb-3">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/40"
              maxLength={100}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body block mb-3">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-gold transition-colors duration-300 placeholder:text-muted-foreground/40"
              maxLength={15}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body block mb-3">
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none placeholder:text-muted-foreground/40"
              maxLength={1000}
              placeholder="How can we help you?"
            />
          </div>
          <button
            type="submit"
            className="group flex items-center gap-3 px-10 py-4 border border-chocolate text-chocolate text-[10px] tracking-[0.25em] uppercase font-sans-body hover:bg-chocolate hover:text-cream transition-all duration-500"
          >
            Send Message
            <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center space-y-10"
        >
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body mb-4">
              Call or WhatsApp
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <a
                href="tel:+919994417129"
                className="text-xl font-serif text-foreground hover:text-gold transition-colors"
              >
                +91 99944 17129
              </a>
            </div>
          </div>

          <div className="w-full h-px bg-border" />

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body mb-4">
              About Your Visit
            </p>
            <p className="text-muted-foreground font-sans-body leading-[1.8] text-sm">
              Reach out to us for orders, styling consultations, or to schedule a
              visit to our boutique. We're here to help you find the perfect outfit
              for every occasion. Walk-ins are welcome!
            </p>
          </div>

          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-sans-body mb-4">
              Shipping
            </p>
            <p className="text-muted-foreground font-sans-body leading-[1.8] text-sm">
              We ship across India. Contact us for orders and we'll deliver your
              favorite pieces right to your doorstep.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
