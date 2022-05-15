import { Speciality } from '@/enum/Speciality';

export interface CompanyType {
  id: number;
  name: string;
  description: string;
  logo: string;
  specialities: Speciality[];
  website: string;
  city: string;
}
