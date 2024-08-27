import React from "react";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  sufixIcon?: ReactNode;
}

const Input: FC<InputProps> = ({
  name,
  type,
  error,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";
  return (
    <div>
      <input
        className={error ? "ring-red-500 border-red-500 ring-1" : ""}
        name={name}
        type={type}
        id={name}
        {...props}
      />
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default Input;