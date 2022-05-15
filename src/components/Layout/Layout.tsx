import React from 'react';

import { Header } from '@/components/Header';

interface LayoutPropType {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutPropType) => (
  <div className="w-full h-full">
    <Header />
    <main className="pt-16 mt-2">{children}</main>
  </div>
);

export { Layout };
