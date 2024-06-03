import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Banner from './Banner';
import About from './About';
import ImageCarousel from './ImageCarousel';
import Carousel from './Carousel';
import Contact from './Contact';
import Footer from './Footer';
import Works from './Works';
import Skills from './Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init({
  duration: 1200, // Customize animation duration
});


function App() {
  return (
    <div className="App">
          <Router>
            <Header />
            <Routes>
                <Route path="#about" element={<About />} />
                <Route path="#skills" element={<Carousel />} />
                {/* <Route path="#experience" element={} /> */}
                <Route path="#works" element={<Works />} />
                <Route path="#contact" element={<Contact />} />
                {/* Define other routes if needed */}
            </Routes>
        </Router>

      <Banner />
      <About />
      {/* <ImageCarousel /> */}
      <div className='common-padding skills' id="skills">
        <div className='container'>
          <h2 data-aos="fade-up">My skills</h2>
          <Carousel />
        </div>
      </div>
      <div className='experience common-padding' id="experience">
        <div className='container'>
          <h2 data-aos="fade-up">My Experience</h2>
          <div className='row'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6' data-aos="fade-right" data-aos-delay="500">
              <div className='exp'>
                <div class="resume-item">
                  <span class="date"><span class="icon-calendar"><img src='./calender.svg' width={20}></img></span> March 2021 - Present (3 years & 3 months)</span>
                  <h3>Web Development Strategist at Pink Lemonade Communications Pvt Ltd.</h3>
                  <ul>
                    <li>Managed and executed various web development projects, ensuring timely delivery and high-quality results.</li>
                    <li>Integrated AI solutions into campaign projects to enhance user engagement and campaign effectiveness.
                    </li>
                    <li>Actively pursuing skill development by currently learning and implementing React.js in ongoing web development projects, aiming to remain abreast of industry trends and elevate project outcomes.</li>
                  </ul>
                  
                </div>
              </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-6' data-aos="fade-left" data-aos-delay="700">
              <div className='exp'>
                <div class="resume-item">
                  <span class="date"><span class="icon-calendar"><img src='./calender.svg' width={20}></img></span> October 2019 - March 2021 (2 years & 6 months)</span>
                  <h3>Software Engineer L1 at FirstPrinciples</h3>
                  <ul>
                    <li>Actively involved in managing and executing various software projects, ensuring adherence to project timelines and delivering high-quality solutions.</li>
                    <li>Provided mentorship and guidance to junior team members, facilitating their training and skill development to enhance team productivity and efficiency.</li>
                  </ul>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
