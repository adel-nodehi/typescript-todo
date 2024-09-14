import React, { ReactNode } from "react";

interface TitleProps extends React.PropsWithChildren {
  children: ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Title;
