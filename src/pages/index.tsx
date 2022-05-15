import { NextPageContext } from 'next';
import { useState } from 'react';

import { Layout } from '@/components/Layout';
import { Banner } from '@/partials/Banner';
import { PageError } from '@/partials/PageError';
import { CompanyList } from '@/components/CompanyList';
import { Speciality } from '@/enum/Speciality';
import { filterCompanies } from '@/utils/filterCompanies';
import { CompanyType } from '@/types/company';
import { api } from '@/utils/api';

interface HomePropType extends NextPageContext {
  companies?: CompanyType[];
  error: string;
}

export const Home = ({ companies, error }: HomePropType) => {
  const [query, setQuery] = useState<string>('');
  const [specialities, setSpecialities] = useState<Speciality[]>([]);

  return (
    <Layout>
      {error && <PageError message={error} />}
      {companies && !error && (
        <>
          <Banner
            query={query}
            onQueryChange={setQuery}
            onSpecialitiesChange={setSpecialities}
            specialities={specialities}
          />
          <CompanyList
            items={filterCompanies(companies, query, specialities)}
          />
        </>
      )}
    </Layout>
  );
};

Home.getInitialProps = async () => {
  try {
    const response = await api.get('/companies');

    return {
      companies: response.data,
    };
  } catch (e) {
    console.log(e);

    return {
      error: 'Failed to load companies',
    };
  }
};

export default Home;
