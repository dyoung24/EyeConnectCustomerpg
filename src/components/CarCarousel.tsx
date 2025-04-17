import { Carousel, Modal } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
interface CarCarouselProps {
  cars: {
    id: number;
    Photos: string[];
    subphotos: string[];
  }[];
  currentCarIndex: number;
  setCurrentCarIndex: (index: number) => void;
}

const CarCarousel = ({ cars, currentCarIndex, setCurrentCarIndex }: CarCarouselProps) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [currentSubPhotoIndex, setCurrentSubPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastClickTime, setLastClickTime] = useState(0);
  const [modalPhotoIndex, setModalPhotoIndex] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const currentCar = cars[currentCarIndex];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      handleCarSelect(currentCarIndex < cars.length - 1 ? currentCarIndex + 1 : 0);
    },
    onSwipedRight: () => {
      handleCarSelect(currentCarIndex > 0 ? currentCarIndex - 1 : cars.length - 1);
    },
    swipeDuration: 500,
    touchEventOptions: { passive: false },
    trackMouse: false,
    delta: 50,
    rotationAngle: 0
  });

  const handleModalNavigation = (direction: 'prev' | 'next') => {
    const allPhotos = [...currentCar.Photos, ...currentCar.subphotos];
    if (direction === 'prev') {
      setModalPhotoIndex((prev) => (prev > 0 ? prev - 1 : allPhotos.length - 1));
      setSelectedImage(allPhotos[modalPhotoIndex > 0 ? modalPhotoIndex - 1 : allPhotos.length - 1]);
    } else {
      setModalPhotoIndex((prev) => (prev < allPhotos.length - 1 ? prev + 1 : 0));
      setSelectedImage(allPhotos[modalPhotoIndex < allPhotos.length - 1 ? modalPhotoIndex + 1 : 0]);
    }
  };

  const handleImageClick = (imageSrc: string) => {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - lastClickTime;
    const allPhotos = [...currentCar.Photos, ...currentCar.subphotos];
    const photoIndex = allPhotos.findIndex(photo => photo === imageSrc);

    if (showModal && timeDiff < 300) {
      if (zoomLevel > 1) {
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
      } else {
        setZoomLevel(2.0);
      }
    } else if (!showModal) {
      setSelectedImage(imageSrc);
      setModalPhotoIndex(photoIndex);
      setShowModal(true);
      setZoomLevel(1);
      setPosition({ x: 0, y: 0 });
    }
    setLastClickTime(currentTime);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      setDragStart({
        x: clientX - position.x,
        y: clientY - position.y
      });
      if ('currentTarget' in e) {
        (e.currentTarget as HTMLElement).style.cursor = 'grabbing';
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (isDragging && zoomLevel > 1) {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const newX = clientX - dragStart.x;
      const newY = clientY - dragStart.y;

      const maxX = (zoomLevel - 1) * (containerRef.current?.offsetWidth || 0) / 2;
      const maxY = (zoomLevel - 1) * (containerRef.current?.offsetHeight || 0) / 2;

      setPosition({
        x: Math.min(Math.max(newX, -maxX), maxX),
        y: Math.min(Math.max(newY, -maxY), maxY)
      });
    }
  };

  const handleMouseUp = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(false);
    if ('currentTarget' in e) {
      (e.currentTarget as HTMLElement).style.cursor = zoomLevel > 1 ? 'grab' : 'default';
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCarSelect = (selectedIndex: number) => {
    setCurrentCarIndex(selectedIndex);
    setCurrentPhotoIndex(0);
    setCurrentSubPhotoIndex(0);
  };

  const handlePhotoSelect = (photoIndex: number) => {
    setCurrentPhotoIndex(photoIndex);
  };

  const handleSubPhotoSelect = (photoIndex: number) => {
    setCurrentSubPhotoIndex(photoIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) {
        handleCloseModal();
      }
      if (showModal) {
        if (e.key === 'ArrowLeft') {
          handleModalNavigation('prev');
        } else if (e.key === 'ArrowRight') {
          handleModalNavigation('next');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal, modalPhotoIndex]);

  return (
    <div className="car-carousel-wrapper">
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        size="xl"
        className="image-modal"
        contentClassName="bg-transparent"
      >
        <button className="modal-close-btn" onClick={handleCloseModal}>×</button>
        <Modal.Body>
          <button
            className="modal-nav-btn prev"
            onClick={() => handleModalNavigation('prev')}
          >
            ‹
          </button>
          <button
            className="modal-nav-btn next"
            onClick={() => handleModalNavigation('next')}
          >
            ›
          </button>
          <div
            ref={containerRef}
            className={`modal-image-container ${zoomLevel > 1 ? 'zooming' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            style={{ cursor: zoomLevel > 1 ? 'grab' : 'default' }}
            onClick={() => handleImageClick(selectedImage)}
          >
            <img
              src={selectedImage}
              alt="Modal view"
              className="modal-image"
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
              }}
              draggable={false}
            />
          </div>
          <div className="zoom-controls">
            <button className="zoom-btn" onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.5))}>−</button>
            <span className="zoom-level">{Math.round(zoomLevel * 100)}%</span>
            <button className="zoom-btn" onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 3))}>+</button>
          </div>
        </Modal.Body>
      </Modal>

      <Row className={showModal ? 'dimmed' : ''}>
        <Col md={8}>
          <div className="car-carousel-container mt-4 position-relative" {...handlers}>
            <button
              className="carousel-arrow prev d-none d-md-block"
              onClick={() => handleCarSelect(currentCarIndex > 0 ? currentCarIndex - 1 : cars.length - 1)}
              aria-label="Previous car"
            >
              <span>‹</span>
            </button>
            <Carousel
              activeIndex={currentPhotoIndex}
              onSelect={handlePhotoSelect}
              indicators={false}
              controls={false}
              touch={true}
              interval={null}
            >
              {currentCar.Photos.map((photo, idx) => (
                <Carousel.Item key={idx}>
                  <div className="image-zoom-wrapper">
                    <img
                      ref={imageRef}
                      className="d-block w-100 main-image"
                      src={photo}
                      alt={`Car ${currentCarIndex + 1} - Main Photo ${idx + 1}`}
                      onClick={() => handleImageClick(photo)}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            <button
              className="carousel-arrow next d-none d-md-block"
              onClick={() => handleCarSelect(currentCarIndex < cars.length - 1 ? currentCarIndex + 1 : 0)}
              aria-label="Next car"
            >
              <span>›</span>
            </button>
          </div>
        </Col>
        <Col md={4} className="thumbnail-column mt-3">
          <div className="sub-images-grid safari-grid">
            <button
              className="thumbnail-nav-btn prev d-md-none"
              onClick={(e) => {
                e.stopPropagation();
                const grid = document.querySelector('.safari-grid');
                if (grid) {
                  grid.scrollLeft -= 100;
                }
              }}
            >
              ‹
            </button>
            {currentCar.subphotos.map((photo, idx) => (
              <div
                key={idx}
                className={`sub-image-wrapper safari-wrapper ${idx === currentSubPhotoIndex ? 'active' : ''}`}
                onClick={() => {
                  handleSubPhotoSelect(idx);
                  handleImageClick(photo);
                }}
              >
                <div className="image-container">
                  <img
                    src={photo}
                    alt={`Car ${currentCarIndex + 1} - Sub Photo ${idx + 1}`}
                    className="sub-image safari-image"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
            <button
              className="thumbnail-nav-btn next d-md-none"
              onClick={(e) => {
                e.stopPropagation();
                const grid = document.querySelector('.safari-grid');
                if (grid) {
                  grid.scrollLeft += 100;
                }
              }}
            >
              ›
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CarCarousel;
