import React, { ChangeEvent, FormEvent } from "react";

interface Props {
  id?: string;
  type: string;
  className?: string;
  placeholder?: string;
  required?: boolean;
  autoFocus?: boolean;
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement> & FormEvent<this>) => void;
}

const Input = (props: Props) => {
  return <input {...props} />;
};

Input.defaultProps = {
  type: "text"
};

export default Input;
