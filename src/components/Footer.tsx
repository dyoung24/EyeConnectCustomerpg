import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faX, faPrint, faShare } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Car Details',
          url: window.location.href,
        });
      } else {
        // Fallback to copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  return (
    <footer className="py-3">
     <Container>
        <div className="social-links d-flex justify-content-center gap-4 mb-3">
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faX} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-link">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <div className="separator"></div>
          <a href="#" className="social-link utility-link">
            <FontAwesomeIcon icon={faPrint} />
          </a>
          <a href="#" className="social-link utility-link" onClick={handleShare}>
              <FontAwesomeIcon icon={faShare} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
