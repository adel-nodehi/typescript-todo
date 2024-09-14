import React from "react";

interface InputProps {
  className: string;
}

const Input: React.FC<InputProps> = ({ className }) => {
  return <input type="text" className={className} />;
};

export default Input;
