import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
