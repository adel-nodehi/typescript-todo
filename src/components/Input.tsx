import React, { ChangeEvent } from "react";

interface InputProps {
  className?: string;
  value?: string;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
  placeHolder?: string;
  autoFocus?: boolean;
}

const Input: React.FC<InputProps> = ({
  className = "",
  value = "",
  onChange = () => {},
  placeHolder = "",
  autoFocus = false,
}) => {
  return (
    <input
      type="text"
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
      autoFocus={autoFocus}
    />
  );
};

export default Input;
