import React from "react";
import { FC } from "react";
import Breadcamp from "../../components/Ui/Breadcamp";
import Title from "../../components/Ui/Title";
import MetaDate from "../../lib/metaDate";
import Filter from "../../components/Filter";
import Search from "../../components/Ui/Search";
import RestaurantsCard from "./RestaurantsCard";

const links = [{ name: "Home", link: "/" }];

interface AllRestaurantsProps {}

const AllRestaurants: FC<AllRestaurantsProps> = () => {
  return (
    <div className="p-4 mt-20 flex-l">
      <MetaDate ttl="All Restaurants" disc="Restaurants page" />
      <Breadcamp isDash={false} ttl="Restaurants" links={links} />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
        <Filter />
        {/* ProductCard */}
        <div className="flex flex-col items-center justify-center col-span-2 mt-10 md:col-span-2 lg:col-span-3">
          <Title ttl="All Restaurants" />
          <Search />
          <div className="flex mt-2">
            <div className="px-4 py-8 border-t border-l rounded-md shadow-2xl ">
              <div className="grid w-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3">
                {/* {data?.data?.map((e) => {
                  return <RestaurantsCard product={e} key={e.id} />;
                })} */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mx-6 my-5">
        <Pagination data={data} />
      </div> */}
    </div>
  );
};

export default AllRestaurants;
