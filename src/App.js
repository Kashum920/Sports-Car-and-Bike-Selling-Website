
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Brand from './Components/Brand/Brand';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Price from './Components/Price/Price';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Home />
        <Brand />
        <About />
        <Services />
        <Team />
        <Price />
        <Testimonials />
        <Blogs />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
