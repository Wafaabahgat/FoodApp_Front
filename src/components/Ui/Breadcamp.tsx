import React, { FC } from "react";
import { Link } from "react-router-dom";

interface BreadcampProps {
  ttl: string;
  isDash: boolean;
  links: any;
}

const Breadcamp: FC<BreadcampProps> = ({ ttl, links, isDash = true }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-6 ml-6">
      <h2 className="text-xl font-bold text-red-500 md:text-2xl">{ttl}</h2>
      <div className="flex flex-wrap items-center px-2 text-sm md:text-lg sm:text-base">
        {isDash && (
          <>
            <Link
              key={0}
              className="mx-1 font-semibold underline"
              to={`/dashboard`}
            >
              Dashboard
            </Link>
            {"/"}
          </>
        )}

        {links?.map((l, i) => (
          <div key={i}>
            {i === links?.length - 1 ? (
              <span className="mx-1 font-medium text-slate-900">{l.name}</span>
            ) : (
              <Link
                className="mx-1 font-semibold underline capitalize"
                to={isDash ? `/dashboard/${l.link}` : `${l.link}`}
              >
                {l.name}
              </Link>
            )}
            {i !== links.length - 1 && "/"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Breadcamp;
