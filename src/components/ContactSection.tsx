import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone } from "lucide-react";
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
    <section id="contact" className="py-24 md:py-32 px-6 lg:px-12 max-w-4xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-sans-body mb-4">
          Get In Touch
        </p>
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">
          Contact Us
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.form
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans-body block mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body focus:outline-none focus:border-accent transition-colors"
              maxLength={100}
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans-body block mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body focus:outline-none focus:border-accent transition-colors"
              maxLength={15}
            />
          </div>
          <div>
            <label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-sans-body block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full border-b border-border bg-transparent py-3 text-foreground font-sans-body focus:outline-none focus:border-accent transition-colors resize-none"
              maxLength={1000}
            />
          </div>
          <button
            type="submit"
            className="px-10 py-4 border border-foreground text-foreground text-xs tracking-[0.25em] uppercase font-sans-body hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 text-accent" />
            <a
              href="tel:+919994417129"
              className="text-lg font-sans-body text-foreground hover:text-accent transition-colors"
            >
              +91 99944 17129
            </a>
          </div>
          <p className="text-muted-foreground font-sans-body leading-relaxed">
            Reach out to us for orders, styling consultations, or to schedule a
            visit to our boutique. We're here to help you find the perfect outfit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
