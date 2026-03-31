import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Process from './components/Process';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import StyleQuiz from './components/StyleQuiz';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TrustBar />
      <Process />
      <Services />
      <Portfolio />
      <StyleQuiz />
      <About />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
