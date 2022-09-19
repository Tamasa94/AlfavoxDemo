import { CircularProgress } from "@mui/material";
import React from "react";
import ProgressWrapperProps from "./ProgressWrapperProps";

const ProgressWrapper = ({ loading, children }: ProgressWrapperProps) => {
  if (loading) return <CircularProgress />;

  return <>{children}</>;
};

export default ProgressWrapper;
