import React, { FC, ReactNode } from "react";
import Label from "../Label";
import { cn } from "../../lib/utils";

interface Option {
  val: string | number;
  name: string;
}

interface InputSelectProps {
  name?: string;
  label: string;
  options: Option[];
  error?: string;
  value?: string;
  emptyOption?: string;
  onChange: React.ChangeEventHandler<HTMLSelectElement>;}

const InputSelect: FC<InputSelectProps> = ({
  name,
  label,
  options,
  error,
  emptyOption,
  onChange,
  value,
  ...props
}) => {
  const onErr = error ? "block" : "hidden";

  return (
    <div className="flex flex-col gap-2 justify-start items-start mb-3 lg:w-[750px] md:w-[630px] sm:w-[410px] w-[300px]">
      <Label>{label}</Label>
      <select
        className="flex items-center w-full px-2 py-2 border rounded-md border-border/50"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        {...props}
      >
        <option hidden>Select {label}</option>
        {emptyOption && <option value="">{emptyOption}</option>}
        {options.map((e) => (
          <option key={e.val} value={e.val}>
            {e.name}
          </option>
        ))}
      </select>
      <span className={cn(onErr, "text-red-700 text-[13px] font-semibold")}>
        *{error}
      </span>
    </div>
  );
};

export default InputSelect;
