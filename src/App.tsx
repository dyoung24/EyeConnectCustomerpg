import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import CarCarousel from './components/CarCarousel';
import CarDetails from './components/CarDetails';
import CallToAction from './components/CallToAction';
import NavButton from './components/NavButton';
import FooterButton from './components/FooterButton';
import Footer from './components/Footer';
import { useState } from 'react';
import carData from './data/carData.json';

function App() {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);

  return (
    <div className="app">
      <Container>
        <Header />
        <hr className="section-divider" />
        <CarCarousel
          cars={carData.cars}
          currentCarIndex={currentCarIndex}
          setCurrentCarIndex={setCurrentCarIndex}
        />
        <hr className="section-divider" />
        <CallToAction car={carData.cars[currentCarIndex]} />
        <hr className="section-divider" />
        <NavButton />
        <Row className="align-items-start">
          <CarDetails car={carData.cars[currentCarIndex]} />
        </Row>
        <hr className="section-divider" />
        <FooterButton />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
