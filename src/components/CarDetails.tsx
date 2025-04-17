import { Row, Col } from 'react-bootstrap';

interface CarDetailsProps {
  car: {
    "DealerId": string;
    "Stock #": string;
    "VIN": string;
    "New/Used": string;
    "Year": number;
    "Make": string;
    "Model": string;
    "Model Code": string;
    "Body": string;
    "Transmission": string;
    "Series": string;
    "Series Detail": string;
    "Door Count": number;
    "Odometer": number;
    "Engine Cylinder Ct": number;
    "Engine Displacement": number;
    "Drivetrain Desc": string;
    "Colour": string;
    "Interior Color": string;
    "Price": string;
    "MSRP": string;
    "Engine": string;
    "Fuel": string;
    "City MPG": number;
    "Highway MPG": number;
  };
}

const CarDetails = ({ car }: CarDetailsProps) => {
  return (
    <div className="car-details mt-4 text-white">
      <Row>
        <Col md={6}>
          <ul className="list-unstyled details-list">
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Dealer ID: {car.DealerId}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Stock #: {car["Stock #"]}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> VIN: {car.VIN}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Condition: {car["New/Used"]}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Year: {car.Year}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Make: {car.Make}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Model: {car.Model}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> MSRP: ${car.MSRP}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Exterior: {car.Colour}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Interior: {car["Interior Color"]}</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul className="list-unstyled details-list">
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Body: {car.Body}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Transmission: {car.Transmission}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Series: {car.Series}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Engine: {car.Engine}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Fuel: {car.Fuel}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Doors: {car["Door Count"]}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Mileage: {car.Odometer}</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> MPG: {car["City MPG"]} City / {car["Highway MPG"]} Highway</li>
            <li><img src="/images/automotive.png" alt="icon" className="detail-icon" /> Drivetrain: {car["Drivetrain Desc"]}</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default CarDetails;
