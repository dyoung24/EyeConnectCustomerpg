import { Navbar, Container } from 'react-bootstrap';
const Header = () => {
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Navbar
      variant="light"
      expand="lg"
      className="custom-header"
      style={{
        backgroundColor: '#f5f5f5 !important',
      }}
    >
      <Container className="position-relative">
        <img src="/images/chevy.jpg" alt="Chevrolet" className="chevy-logo" />
        <Navbar.Brand href="#home" onClick={handleLogoClick}>
          <img src="//img1.wsimg.com/isteam/ip/bb558ae0-e9ba-4f4d-b326-298856a88892/EyeConnect%20logo.tif/:/rs=h:70,cg:true,m/qt=q:95" srcSet="//img1.wsimg.com/isteam/ip/bb558ae0-e9ba-4f4d-b326-298856a88892/EyeConnect%20logo.tif/:/rs=w:205,h:70,cg:true,m/cr=w:205,h:70/qt=q:95, //img1.wsimg.com/isteam/ip/bb558ae0-e9ba-4f4d-b326-298856a88892/EyeConnect%20logo.tif/:/rs=w:411,h:140,cg:true,m/cr=w:411,h:140/qt=q:95 2x, //img1.wsimg.com/isteam/ip/bb558ae0-e9ba-4f4d-b326-298856a88892/EyeConnect%20logo.tif/:/rs=w:616,h:210,cg:true,m/cr=w:616,h:210/qt=q:95 3x" alt="Eye Connect Digital" className="logo-img" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
