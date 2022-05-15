import React from 'react';

import { InputGroup } from '@/components/InputGroup/InputGroup';
import { CheckboxGroup } from '@/components/CheckboxGroup';
import { Speciality } from '@/enum/Speciality';

interface BannerPropType {
  query: string;
  onQueryChange: (value: string) => void;
  onSpecialitiesChange: (value: Speciality[]) => void;
  specialities: Speciality[];
}

const Banner = ({
  onQueryChange,
  onSpecialitiesChange,
  query,
  specialities,
}: BannerPropType) => (
  <div className="bg-slate-200 py-24">
    <div className="container mx-auto">
      <div>
        <h1 className="text-4xl font-bold mb-3 md:display-lg md:mb-5">
          Construction Companies
        </h1>
        <p className="text-base text-gray-700 md:text-xl">
          Search for construction companies in your area.... <br />
          lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="flex items-end w-full pt-5">
        <div className="w-96">
          <InputGroup
            label="Search"
            placeholder="Search for a company..."
            onChange={(e) => onQueryChange(e.target.value)}
            value={query}
          />
        </div>
        <div className="flex ml-4 pb-1.5">
          <CheckboxGroup
            options={Object.values(Speciality).map((item: string) => ({
              label: item,
              value: item,
            }))}
            name="category"
            onChange={onSpecialitiesChange}
            value={specialities}
          />
        </div>
      </div>
    </div>
  </div>
);

export { Banner };
