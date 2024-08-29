import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface FilterProps {}

const Filter: FC<FilterProps> = () => {
  const [search, setSearch] = useSearchParams("");

  const currentName = search.get("name") || "";
  const currentPage = search.get("page") || "1";

  const [filter, setFilter] = useState({
    price: search.get("price") || "100",
    rating: search.get("rating") || "5",
  });

  const handleFilter = (e) => {
    e.preventDefault();

    setSearch({
      ...filter,
      price: currentPage,
      name: currentName,
    });
  };

  return (
    <form
      className="flex-col hidden mt-10 border rounded-md md:flex"
      onSubmit={handleFilter}
    ></form>
  );
};

export default Filter;
