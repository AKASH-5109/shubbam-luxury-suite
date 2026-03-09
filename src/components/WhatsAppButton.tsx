import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919994417129"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 2, duration: 0.5, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Chat on WhatsApp"
  >
    <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 group-hover:shadow-[#25D366]/40 group-hover:scale-110 transition-all duration-300">
      <MessageCircle className="w-6 h-6 text-white" />
    </div>
    {/* Tooltip */}
    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-chocolate-dark text-cream text-[10px] tracking-wide font-sans-body px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
      Chat with us
    </div>
    {/* Pulse ring */}
    <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" style={{ animationDuration: "3s" }} />
  </motion.a>
);

export default WhatsAppButton;
