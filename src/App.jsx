import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import Services from './components/Services/Services';
import Packages from './components/Packages/Packages';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <Services />
      <Packages />
      <Testimonials />
      <About />
    </div>
  );
}

export default App;