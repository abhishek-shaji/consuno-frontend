import React from 'react';

interface InputGroupPropType {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value?: string;
}

const InputGroup = ({
  label,
  placeholder,
  onChange,
  value,
}: InputGroupPropType) => (
  <div className="w-full">
    <label
      htmlFor="email"
      className="block mb-1.5 ml-1 text-lg font-semibold w-full"
    >
      {label}
    </label>
    <input
      type="text"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
      placeholder={placeholder}
      required
      onChange={onChange}
      value={value}
    />
  </div>
);

export { InputGroup };
