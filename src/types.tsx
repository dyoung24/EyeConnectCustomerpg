export type PageType = 'vehicle-info' | 'carfax' | 'history' | 'contact' | 'credit' | 'about';

export interface Car {
  id: number;
  year: string;
  make: string;
  model: string;
  price: string;
  mileage: number;
  images: string[];
  description?: string;
  features?: string[];
  specifications?: {
    engine?: string;
    transmission?: string;
    drivetrain?: string;
    fuelEconomy?: string;
    exteriorColor?: string;
    interiorColor?: string;
    vin?: string;
  };
  history?: {
    owners: number;
    accidents: number;
    serviceRecords: number;
    lastService: string;
  };
}

export interface CarProps {
  car: Car;
}