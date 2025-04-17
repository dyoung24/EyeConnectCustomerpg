interface CallToActionProps {
  car: {
    Year: number;
    Make: string;
    Model: string;
    Description?: string;
  };
}

const CallToAction = ({ car }: CallToActionProps) => {
  return (
    <div className="vehicle-header">
      <div className="vehicle-info text-white">
        <h1 className="vehicle-title">
          {car.Year} {car.Make} {car.Model}
        </h1>
         {car.Description && (
          <h5 className="description">{car.Description}</h5>
        )}
      </div>
    </div >
  );
};

export default CallToAction;
