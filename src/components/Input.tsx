import React from "react";

interface InputProps {
  className: string;
  placeHolder?: string;
}

const Input: React.FC<InputProps> = ({ className, placeHolder }) => {
  return <input type="text" className={className} placeholder={placeHolder} />;
};

export default Input;
