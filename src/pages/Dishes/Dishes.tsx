import React, { useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { dishesSlice } from "../../slice/Dishes/DishesAction";
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";

interface DishesProps {}

const Dishes: FC<DishesProps> = () => {
  const dispatch = useDispatch();
  const { loading, success, msg, data } = useSelector((state) => state.Dishes);
  const [selectedDish, setSelectedDish] = useState(null);

  // const [activeList, setActiveList] = useState("");

  useEffect(() => {
    dispatch(dishesSlice());
  }, []);

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
    return <div>No dishes available</div>;
  }

  return (
    <div className="mt-10">
      <div className="max-w-[750px] ">
        <h2 className="text-xl font-semibold md:text-3xl">Explore Our Menu</h2>
        <p className="mt-3 mb-5 text-sm">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at time
        </p>
      </div>
      <div className="flex justify-between gap-2 ">
        {data?.map((i, e) => {
          return (
            <Link
              to={`/Singledish/${i?.id}`}
              key={i.slug}
              onClick={() => setSelectedDish(i.id)} 
            >
              {" "}
              <div key={e} className="flex flex-col items-center gap-1">
                <img
                  src={i.image}
                  alt={i.name}
                  className="w-20 h-20 rounded-full cursor-pointer md:w-40 md:h-40 activeList"
                  // className={`rounded-full md:w-40 md:h-40 w-20 h-20 activeList  ${
                  //   i.image === activeList ? "activeList" : ""
                  // }`}
                  // onClick={() => setActiveList(i.image)}
                />
                <p className="text-sm">{i.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
