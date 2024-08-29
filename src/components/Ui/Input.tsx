import React from "react";
import { FC, InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../../lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  sufixIcon?: ReactNode;
  previcon?: ReactNode;
  // value?: string;
}

const Input: FC<InputProps> = ({
  name,
  type,
  error,
  value,
  previcon,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";
  return (
   <div className="flex items-center w-full px-3 border rounded-md border-border/50">
    {/* // <div> */}
      {previcon ? previcon : ""}
      <input
        className={error ? "ring-red-500 border-red-500 ring-1" : ""}
        name={name}
        type={type}
        value={value}
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
