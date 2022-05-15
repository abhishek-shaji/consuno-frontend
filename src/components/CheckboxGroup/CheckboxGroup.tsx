import React from 'react';

interface CheckboxGroupProps {
  name: string;
  value: string[];
  onChange: (e: any[]) => void;
  options: {
    value: string;
    label: string;
  }[];
}

export const CheckboxGroup = ({
  name,
  value,
  onChange,
  options,
}: CheckboxGroupProps) => {
  const [checkedValues, setCheckedValues] = React.useState<string[]>(value);

  return (
    <div className="form-group">
      <div>
        {options.map((option, index: number) => (
          <label
            className="inline-flex items-center px-3"
            htmlFor={option.value}
            key={index}
          >
            <input
              className="form-checkbox h-6 w-6"
              type="checkbox"
              name={name}
              value={option.value}
              checked={value.indexOf(option.value) !== -1}
              onChange={(e) => {
                const newValue = [...checkedValues];

                if (e.target.checked) {
                  newValue.push(option.value);
                } else {
                  newValue.splice(newValue.indexOf(option.value), 1);
                }

                setCheckedValues(newValue);

                onChange(newValue);
              }}
              id={option.value}
            />
            <span className="ml-3 text-lg capitalize">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
