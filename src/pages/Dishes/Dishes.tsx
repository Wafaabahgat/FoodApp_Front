import React, { FormEvent, useEffect, useState } from "react";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { dishesSlice } from "../../slice/Dishes/DishesAction";
import Loader from "../../components/Loader";

interface DishesProps {}

const Dishes: FC<DishesProps> = () => {
  const dispatch = useDispatch();
  const { loading, success, msg, data } = useSelector((state) => state.Dishes);

  const [activeList, setActiveList] = useState("");

  // const handleLogin = async (e: FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await dispatch(dishesSlice());
  //   } catch (error) {
  //     console.error("Login failed:", error);
  //   }
  // };
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
      <div className="grid grid-cols-4 gap-3 md:grid-cols-8 ">
        {data?.map((i, e) => {
          return (
            <div key={e} className="flex flex-col items-center gap-1">
              <img
                src={i.image}
                alt={i.name}
                className={
                  i.image === activeList ? "activeList rounded-full" : ""
                }
                onClick={() => setActiveList(i.image)}
              />
              <p>{i.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dishes;
