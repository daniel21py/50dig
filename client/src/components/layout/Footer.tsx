import { SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white/60 py-8 border-t border-[#7FFF00]/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* LinkedIn Link */}
          <div>
            <a 
              href="https://www.linkedin.com/in/danielmaz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#7FFF00] hover:text-[#7FFF00]/80 transition-colors"
            >
              <SiLinkedin className="h-5 w-5" />
              <span>Seguimi su LinkedIn</span>
            </a>
          </div>

          {/* Company Info */}
          <div className="text-sm text-right">
            <p className="font-semibold text-white/80">5.0 Digital & Investment Srls</p>
            <p>Via Eurialo 72</p>
            <p>00181 - Roma (RM) - Italy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
