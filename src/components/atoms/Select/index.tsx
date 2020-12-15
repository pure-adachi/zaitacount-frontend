import React from "react";

interface Props {
  id?: string;
  className?: string;
  value: string | number;
  options: Array<string | number>;
  onChange: (e: any) => void;
}

const Select = ({ options, ...selectProps }: Props) => {
  return (
    <select {...selectProps}>
      {options.map((option, i) => {
        return <option key={i}>{option}</option>;
      })}
    </select>
  );
};

export default Select;
