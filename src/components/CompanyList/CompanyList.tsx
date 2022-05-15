import React from 'react';

import { CompanyType } from '@/types/company';

interface CompanyListPropType {
  items: CompanyType[];
}

const CompanyList = ({ items }: CompanyListPropType) => (
  <div className="container mx-auto">
    <div className="flex justify-between my-5 py-3 mb-10 border-b border-slate-200">
      <h2 className="text-lg font-semibold">{items.length} Results</h2>
    </div>
    {items.map((item: CompanyType) => (
      <a
        href={item.website}
        className="block border-b border-slate-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer transition-all"
        key={item.id}
      >
        <div className="flex items-center my-5">
          <img
            src={item.logo}
            alt={item.name}
            className="w-32 h-20 rounded object-cover"
          />
          <div className="ml-4">
            <div className="font-bold capitalize">{item.name}</div>
            <div className="opacity-75 text-sm capitalize">
              {item.description}
            </div>
            <div className="opacity-75 text-sm capitalize">
              Specialities: {item.specialities.join(', ')}
            </div>
          </div>
        </div>
      </a>
    ))}
  </div>
);

export { CompanyList };
