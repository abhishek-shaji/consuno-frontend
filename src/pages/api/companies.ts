// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { generateMockCompanyData } from '@/utils/generateMockCompanyData';
import { CompanyType } from '@/types/company';

const MAX_ITEMS = 25;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompanyType[]>,
) {
  const companies = generateMockCompanyData(MAX_ITEMS);

  res.status(200).json(companies);
}
