export interface Car {
  unit: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  vin: string;
  color: string;
  leaseAmount: number;
  category?: string;
  status?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string[];
  completed?: boolean;
}

export interface DocumentRequirement {
  name: string;
  description: string;
  required: boolean;
}

