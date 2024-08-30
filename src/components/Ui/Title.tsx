import React from "react";
import { FC } from "react";
import { cn } from "../../lib/utils";

interface TitleProps {
  ttl: string;
  className?: string;
}

const Title: FC<TitleProps> = ({ ttl, className }) => {
  return (
    <h2
      className={cn(
        "bg-orange-200 lg:max-w-[290px] min-w-[220px]  rounded-md text-center p-2 font-semibold md:text-lg text-md ",
        className
      )}
    >
      {ttl}
    </h2>
  );
};

export default Title;
