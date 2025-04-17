import { Row, Col } from 'react-bootstrap';

const NavButton = () => {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="nav-button-container my-1">
      <Row className="g-2 justify-content-between">
        <Col md className="d-none d-md-flex">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('https://www.carfax.com')}>
            <span>Vehicle History</span>
          </button>
        </Col>
        <Col md className="d-none d-md-flex">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/about-us')}>
            <span>Original MSRP/ Options Info</span>
          </button>
        </Col>
        <Col md className="d-none d-md-flex">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/apply-credit')}>
            <span>Carfax</span>
          </button>
        </Col>
        <Col md className="d-none d-md-flex">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/vehicle-history')}>
            <span>Schedule test drive</span>
          </button>
        </Col>
        <Col md className="d-none d-md-flex">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/msrp-options')}>
            <span>Apply for Credit</span>
          </button>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <div className="d-md-none">
        <Row className="g-1 mb-1">
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('https://www.carfax.com')}>
              <span className="mobile-text">History</span>
            </button>
          </Col>
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/about-us')}>
              <span className="mobile-text">MSRP Info</span>
            </button>
          </Col>
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/apply-credit')}>
              <span className="mobile-text">Carfax</span>
            </button>
          </Col>
        </Row>
        <Row className="g-1">
          <Col xs={6} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/vehicle-history')}>
              <span className="mobile-text">Schedule test drive</span>
            </button>
          </Col>
          <Col xs={6} className='d-flex'>
            <button className="nav-button orginal" onClick={() => handleButtonClick('/msrp-options')}>
              <span className="mobile-text">Apply for Credit</span>
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NavButton;
