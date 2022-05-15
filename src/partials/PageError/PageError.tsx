import React from 'react';

interface ErrorInfoPropType {
  message: string;
}

const PageError = ({ message }: ErrorInfoPropType) => (
  <div className="w-full container mx-auto my-6">
    <div role="alert">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        Error
      </div>
      <div className="border rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{message}</p>
      </div>
    </div>
  </div>
);

export { PageError };
