import React from 'react';

const Header = () => (
  <header className="fixed top-0 left-0 border-b border-slate-200 w-full">
    <div className="container mx-auto">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Cosuno</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-full">
            Sign in
          </button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 ml-4 rounded-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  </header>
);

export { Header };
