import React, { useEffect } from "react";
import { FC } from "react";
import Breadcamp from "../../components/Ui/Breadcamp";
import Title from "../../components/Ui/Title";
import MetaDate from "../../lib/metaDate";
import Filter from "../../components/Filter";
import Search from "../../components/Ui/Search";
import RestaurantsCard from "./RestaurantsCard";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { restaurantsSlice } from "../../slice/Restaurants/RestaurantsAction";
import Pagination from "../../components/Ui/Pagination";

const links = [
  { name: "Home", link: "/" },
  { name: "Restaurants", link: "#" },
];

interface AllRestaurantsProps {}

const AllRestaurants: FC<AllRestaurantsProps> = () => {
  const dispatch = useDispatch();
  const { loading, success, msg, data } = useSelector(
    (state) => state.Restaurants
  );

  console.log('ee',data);
  useEffect(() => {
    dispatch(restaurantsSlice());
  }, [dispatch]);

  useEffect(() => {
    if (success === true && msg) {
      toast.success(msg);
      console.log("ddd");
    }
    if (success === false && msg) {
      toast.error(msg);
      console.log("d2");
    }
  }, [success, msg]);

  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <div>No Restaurants available</div>;
  }

  return (
    <div className="p-4 mt-20 flex-l">
      <MetaDate ttl="All Restaurants" disc="Restaurants page" />
      <Breadcamp isDash={false} ttl="Restaurants" links={links} />

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 md:grid-cols-3">
        <Filter />
        {/* RestaurantsCard */}
        <div className="flex flex-col items-center justify-center col-span-2 mt-10 md:col-span-2 lg:col-span-3">
          <Title ttl="All Restaurants" className="mb-3"/>
          <Search />
          <div className="flex mt-2">
            <div className="px-4 py-8 border-t border-l rounded-md shadow-2xl ">
              <div className="grid w-full grid-cols-1 gap-3 p-2 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
                {data?.data?.map((e) => {
                  return <RestaurantsCard restaurant={e} key={e.id} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

       <div className="mx-6 my-5">
        <Pagination data={data} />
      </div> 
    </div>
  );
};

export default AllRestaurants;
