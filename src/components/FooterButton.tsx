import { Row, Col } from 'react-bootstrap';

const FooterButton = () => {
  const handleButtonClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (
    <div className="nav-button-container my-1">
      <Row className="justify-content-between">
        <Col md={4} className="d-none d-md-flex justify-content-center">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/contact-us')}>
            <span>Contact Us</span>
          </button>
        </Col>
        <Col md={4} className="d-none d-md-flex justify-content-center">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/about-us')}>
            <span>About Us</span>
          </button>
        </Col>
        <Col md={4} className="d-none d-md-flex justify-content-center">
          <button className="nav-button schedule-test" onClick={() => handleButtonClick('/share')}>
            <span>Share</span>
          </button>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <div className="d-md-none">
        <Row className="g-1 mb-1">
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/contact-us')}>
              <span className="mobile-text">Contact Us</span>
            </button>
          </Col>
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/about-us')}>
              <span className="mobile-text">About Us</span>
            </button>
          </Col>
          <Col xs={4} className='d-flex'>
            <button className="nav-button schedule-test" onClick={() => handleButtonClick('/share')}>
              <span className="mobile-text">Share</span>
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FooterButton;
