import React from "react";
import { FC } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cn } from "../../lib/utils";

interface PaginationProps {
  data: {
    first_page_url: string | null;
    prev_page_url: string | null;
    next_page_url: string | null;
    last_page_url: string | null;
    links: {
      url: string | null;
      label: string;
      active: boolean;
    }[];
  };
}

const Pagination: FC<PaginationProps> = ({ data }) => {
  const [search, setSearch] = useSearchParams();

  const handlePagination = (e) => {
    if (e) {
      search.set("page", e?.split("=")[1]);
    }

    return `?${search.toString()}`;
  };

  return (
<div className="flex items-center justify-end">
      <Link
        className="paginate__link"
        to={handlePagination(data?.first_page_url)}
      >
        {"<<"}
      </Link>
      <Link
        to={handlePagination(data?.prev_page_url)}
        className={cn(
          data?.prev_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Prev"}
      </Link>

      {data?.links?.map((e, i) => {
        return i === 0 || i === data?.links.length - 1 ? (
          ""
        ) : (
          <Link
            key={i}
            to={handlePagination(e.url)}
            className={cn(
              e?.active
                ? "z-[1] outline-3 outline outline-sky-400 -outline-offset-2"
                : "",
              "paginate__link whitespace-nowrap"
            )}
          >
            {e.label}
          </Link>
        );
      })}
      <Link
        to={handlePagination(data?.next_page_url)}
        className={cn(
          data?.next_page_url !== null
            ? ""
            : "text-gray-600 bg-slate-200 cursor-not-allowed",
          "paginate__link"
        )}
      >
        {"Next"}
      </Link>

      <Link
        to={handlePagination(data?.last_page_url)}
        className="paginate__link"
      >
        {">>"}
      </Link>
    </div>

  );
};

export default Pagination;
