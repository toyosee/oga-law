import { Shield} from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import SubscribeSection from './Subscribe';

const footerLinks = {
  Product: ['Features', 'Pricing', 'For Voices', 'Download'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Disclaimer'],
  Support: ['Help Center', 'Contact', 'FAQ', 'Report Issue'],
};

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-ogalaw-green" />
              <span className="text-xl font-bold">OgaLaw</span>
            </div>
            <p className="text-gray-500 text-sm mb-4">
              Know Law. No Shaking.
            <SubscribeSection />
            </p>
            <div className="flex items-center gap-3">
              {[FaTwitter, FaLinkedin, FaInstagram, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 bg-ogalaw-gray rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-ogalaw-green transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4 text-white">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Barterverse Technologies Ltd. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made in 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;