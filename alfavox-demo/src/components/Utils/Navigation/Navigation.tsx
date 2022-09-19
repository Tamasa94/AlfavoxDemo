import React, { ReactNode } from "react";
import * as Style from "./style";

interface NavigationProps {
  children?: ReactNode;
}

const Navigation = ({children}: NavigationProps) => {
  return <Style.NavigationWrapper>{children}</Style.NavigationWrapper>;
};

export default Navigation;
