import React, { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  placeHolder?: string;
}

const Input: React.FC<InputProps> = ({
  className = "",
  value = "",
  onChange = () => {},
  placeHolder = "",
}) => {
  return (
    <input
      type="text"
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default Input;
