import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

import { CompanyType } from '@/types/company';
import { Speciality } from '@/enum/Speciality';

const specialities = Object.values(Speciality);

const pickRandomSpecialities = (): Speciality[] => {
  const specialitiesCount = Math.floor(Math.random() * 3) + 1;

  const specialitiesz = [];

  for (let i = 0; i < specialitiesCount; i++) {
    specialitiesz.push(
      specialities[Math.floor(Math.random() * specialities.length)],
    );
  }

  return specialitiesz;
};

export const generateMockCompanyData = (maxItems: number): CompanyType[] => {
  const companies: CompanyType[] = [];

  for (let i = 0; i < maxItems; i++) {
    companies.push({
      id: i,
      name: uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
        separator: ' ',
        seed: Math.random() * 100,
      }),
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      logo: 'https://www.myangelkids.com/wp-content/uploads/sites/213/2020/05/logo-04.png',
      website: 'https://example.com',
      specialities: pickRandomSpecialities(),
    });
  }

  return companies;
};
