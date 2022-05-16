import { uniqueNamesGenerator, colors, names } from 'unique-names-generator';

import { CompanyType } from '@/types/company';
import { Speciality } from '@/enum/Speciality';

const specialities = Object.values(Speciality);

const pickRandomSpecialities = (): Speciality[] => {
  const specialitiesCount = Math.floor(Math.random() * 3) + 1;

  const items = [];

  for (let i = 0; i < specialitiesCount; i++) {
    items.push(specialities[Math.floor(Math.random() * specialities.length)]);
  }

  return items;
};

export const generateMockCompanyData = (maxItems: number): CompanyType[] => {
  const companies: CompanyType[] = [];

  for (let i = 0; i < maxItems; i++) {
    companies.push({
      id: i,
      name: `${uniqueNamesGenerator({
        dictionaries: [names, colors],
        separator: ' ',
        seed: Math.random() * 100,
      })} inc.`,
      description: 'lorem ipsum dolor sit amet consectetur adipiscing elit',
      logo: 'https://www.myangelkids.com/wp-content/uploads/sites/213/2020/05/logo-04.png',
      website: 'https://example.com',
      specialities: pickRandomSpecialities(),
      city: 'Berlin',
    });
  }

  return companies;
};
