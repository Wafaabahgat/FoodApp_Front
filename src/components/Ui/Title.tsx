import React from "react";
import { FC } from "react";

interface TitleProps {
  ttl: string;
}

const Title: FC<TitleProps> = ({ ttl }) => {
  return (
    <h2 className="bg-orange-200 min-w-[400px] rounded-md text-center p-2 font-semibold md:text-lg text-md mb-4">
      {ttl}
    </h2>
  );
};

export default Title;
