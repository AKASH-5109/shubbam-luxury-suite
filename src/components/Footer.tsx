import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-charcoal text-cream/70 py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="font-serif text-2xl tracking-[0.15em] text-cream mb-4">
            Shubbam
          </h3>
          <p className="font-serif italic text-gold text-sm">Traditionally Modern</p>
        </div>

        <div className="space-y-3 font-sans-body text-sm">
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
            <span>NSR Road, Saibaba Colony, Coimbatore</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-gold flex-shrink-0" />
            <a href="tel:+919994417129" className="hover:text-cream transition-colors">
              +91 99944 17129
            </a>
          </div>
        </div>

        <div className="flex items-start md:justify-end">
          <a
            href="https://www.instagram.com/shubbamcbe"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-sans-body hover:text-cream transition-colors"
            aria-label="Follow Shubbam on Instagram"
          >
            <Instagram className="w-5 h-5" />
            @shubbamcbe
          </a>
        </div>
      </div>

      <div className="border-t border-cream/10 pt-8 text-center">
        <p className="text-xs tracking-[0.1em] font-sans-body text-cream/40">
          © {new Date().getFullYear()} Shubbam. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
