import { CompanyType } from '@/types/company';
import { Speciality } from '@/enum/Speciality';

export const filterCompanies = (
  companies: CompanyType[],
  query: string,
  specialities: Speciality[],
) => {
  if (query.length === 0 && specialities.length === 0) {
    return companies;
  }

  return companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(query.toLowerCase()) &&
      (specialities.length === 0 ||
        specialities.some((speciality) =>
          company.specialities.includes(speciality),
        ))
    );
  });
};
