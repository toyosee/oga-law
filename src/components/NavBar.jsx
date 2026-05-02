import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prevPathname = useRef(location.pathname);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change (using ref to avoid setState in effect)
  useEffect(() => {
    const currentPath = location.pathname;
    if (prevPathname.current !== currentPath) {
      prevPathname.current = currentPath;
      // Use requestAnimationFrame to defer the state update
      requestAnimationFrame(() => {
        setIsOpen(false);
      });
    }
  }, [location.pathname]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-ogalaw-darker/95 backdrop-blur-lg border-b border-ogalaw-green/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div className="w-10 h-10 bg-ogalaw-green rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">
              Oga<span className="text-ogalaw-green">Law</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            
            {location.pathname === '/' && (
              <>
                <button onClick={() => scrollToSection('features')} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  Features
                </button>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white text-sm font-medium transition-colors" onClick={() => setIsOpen(false)}>
                  How It Works
                </Link>
                <button onClick={() => scrollToSection('marketplace')} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  For Lawyers
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white text-sm font-medium transition-colors">
                  About
                </button>
              </>
            )}

            {location.pathname === '/how-it-works' && (
              <Link to="/" className="text-gray-400 hover:text-white text-sm font-semibold transition-colors">
                Home
              </Link>
            )}

            <button className="bg-ogalaw-green hover:bg-ogalaw-green-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-ogalaw-green/20">
              Get Early Access
            </button>
          </div>

          <button 
            onClick={() => setIsOpen(prev => !prev)} 
            className="md:hidden text-white p-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-ogalaw-darker/98 backdrop-blur-lg border-b border-ogalaw-green/10">
          <div className="px-4 py-4 space-y-3">
            
            {location.pathname === '/' && (
              <>
                <button onClick={() => scrollToSection('features')} className="block w-full text-left text-gray-400 hover:text-white py-2 text-sm transition-colors">
                  Features
                </button>
                <Link to="/how-it-works" onClick={() => setIsOpen(false)} className="block w-full text-left text-gray-400 hover:text-white py-2 text-sm transition-colors">
                  How It Works
                </Link>
                <button onClick={() => scrollToSection('voices')} className="block w-full text-left text-gray-400 hover:text-white py-2 text-sm transition-colors">
                  For Voices
                </button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left text-gray-400 hover:text-white py-2 text-sm transition-colors">
                  About
                </button>
              </>
            )}

            {location.pathname === '/how-it-works' && (
              <Link to="/" onClick={() => setIsOpen(false)} className="block w-full text-left text-ogalaw-green font-semibold py-2 text-sm transition-colors">
                ← Back to Home
              </Link>
            )}

            <button className="w-full bg-ogalaw-green hover:bg-ogalaw-green-dark text-white px-5 py-3 rounded-lg text-sm font-semibold transition-all">
              Get Early Access
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;