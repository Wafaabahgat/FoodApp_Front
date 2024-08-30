import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "./Input";
import { cn } from "../../lib/utils";

interface SearchProps {
  className?: string;
}

const Search: FC<SearchProps> = ({ className }) => {
  const [search, setSearch] = useSearchParams("");
  const currentName = search.get("name") || "";

  const [name, setname] = useState(currentName);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search.toString());
  };

  return (
    <form className="w-full" onSubmit={handleSearch}>
      <Input
        type="text"
        value={name}
        placeholder="Search..."
        className={cn("py-3 text-md w-full", className)}
        onChange={(e) => {
          setname(e.target.value);
          search.set("name", e.target.value);
        }}
        previcon={
          <AiOutlineSearch
            className="text-2xl cursor-pointer text-slate-800"
            onClick={() => setSearch(search.toString())}
          />
        }
      />
    </form>
  );
};

export default Search;
