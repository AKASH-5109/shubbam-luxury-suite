import { Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-chocolate-dark relative overflow-hidden">
    {/* Subtle pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--cream)) 1px, transparent 0)",
      backgroundSize: "40px 40px"
    }} />

    <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
      {/* Top divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/images/store-exterior.png"
                alt="Shubbam"
                className="w-10 h-10 rounded-full object-cover border border-gold/20"
              />
              <div>
                <h3 className="font-serif text-xl tracking-[0.15em] text-cream">
                  Shubbam
                </h3>
                <p
                  className="text-gold text-xs italic"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Traditionally Modern
                </p>
              </div>
            </div>
            <p className="text-cream/40 font-sans-body text-xs leading-relaxed max-w-[260px]">
              Curated traditional & contemporary fashion for women who seek elegance with meaning.
            </p>
          </div>

          {/* Contact info */}
          <div className="space-y-5 font-sans-body text-xs">
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-6">Contact Details</p>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-3 h-3 text-gold" />
              </div>
              <span className="text-cream/50">NSR Road, Saibaba Colony, Coimbatore</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3 h-3 text-gold" />
              </div>
              <a href="tel:+919994417129" className="text-cream/50 hover:text-gold transition-colors">
                +91 99944 17129
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col items-start md:items-end">
            <p className="text-[9px] tracking-[0.3em] uppercase text-gold mb-6">Follow Us</p>
            <a
              href="https://www.instagram.com/shubbamcbe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-xs font-sans-body text-cream/50 hover:text-gold transition-colors"
              aria-label="Follow Shubbam on Instagram"
            >
              <div className="w-8 h-8 rounded-full border border-gold/20 group-hover:border-gold/50 flex items-center justify-center transition-colors duration-300">
                <Instagram className="w-3 h-3" />
              </div>
              @shubbamcbe
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[9px] tracking-[0.15em] font-sans-body text-cream/20">
            © {new Date().getFullYear()} Shubbam. All rights reserved.
          </p>
          <p className="text-[9px] tracking-[0.15em] font-sans-body text-cream/20">
            Premium Women's Boutique · Coimbatore, India
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
