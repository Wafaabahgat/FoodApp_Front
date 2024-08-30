import React from "react";
import { FC } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { adminImgUrl } from "../../lib/utils";
import notFound from "../../assets/notFound.png";

interface RestaurantsCardProps {
  restaurant: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
  };
}

const RestaurantsCard: FC<RestaurantsCardProps> = ({ restaurant }) => {
  const handleImg = (e) => {
    return e?.image?.includes("http")
      ? e?.image
      : adminImgUrl({ image: e?.image });
  };
  return (
    <div className="relative flex flex-col w-full p-2 overflow-hidden border rounded-lg hover:scale-105 hover:shadow-lg border-slate-300">
      {/* <CartIcon product={restaurant} /> */}
      {/* <Link to={`/SingleProducts/${restaurant?.slug}`}> */}
      <Link to="#">
        <div className="flex justify-center item-center">
          <img
            key={restaurant?.id}
            className="object-contain w-[200px] rounded-lg h-[180px] mt-4"
            src={restaurant?.image ? handleImg(restaurant) : notFound}
            alt="notFound"
          />
        </div>
        <div className="flex flex-col mb-3">
          <h2 className="text-lg font-semibold text-start line-clamp-1">
            {restaurant.name}
          </h2>
          <p className="text-md text-slate-400 line-clamp-2 text-start">
            {restaurant.description}
          </p>
        </div>

        <div className="flex items-end justify-end mt-auto">
          <div className="flex items-center px-1 ml-1 -mt-2 bg-orange-200 border rounded-full">
            <AiOutlineStar className=" w-[30px] h-[30px] p-1" />
            {restaurant.rating}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantsCard;
