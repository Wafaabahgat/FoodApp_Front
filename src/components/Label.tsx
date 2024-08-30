import React, { ReactNode, FC } from "react";
import { cn } from "../lib/utils";

interface LabelProps {
  className?: string;
  children: ReactNode;
}

const Label: FC<LabelProps> = ({ className, children, ...props }) => {
  return (
    <label
      className={cn("text-sm capitalize font-semibold leading-none", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
