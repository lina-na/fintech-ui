export interface ClientForm {
  firstname: string;
  surname: string;
  phone: string;
  address: string;
  ssn: string;
}

export interface Data {
  _id: string;
  firstname: string;
  surname: string;
  address: string;
  phone: string;
  ssn: string;
}

export interface Column {
  id: 'firstname' | 'surname' | 'address' | 'phone' | 'ssn' | 'action';
  label: string;
  minWidth?: number;
  align?: 'right';
}