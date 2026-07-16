import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import WhyUs from './components/WhyUs/WhyUs';
import Services from './components/Services/Services';
import Packages from './components/Packages/Packages';
import Testimonials from './components/Testimonials/Testimonials';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Areas from './components/Areas/Areas';
import Book from './components/Book/Book';
import Sendoff from './components/Sendoff/Sendoff';

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
      <Gallery />
      <Areas />
      <Book />
      <Sendoff />
    </div>
  );
}

export default App;