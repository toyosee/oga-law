import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Marketplace from './components/MarketPlace';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HowItWorksPage from './pages/HowItWorksPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Marketplace />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-ogalaw-darker">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;