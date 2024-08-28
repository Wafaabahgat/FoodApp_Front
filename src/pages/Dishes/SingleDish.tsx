import React, { useEffect } from "react";
import { FC } from "react";
import Breadcamp from "../../components/Ui/Breadcamp";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { singledish } from "../../slice/Dishes/DishesAction";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";
import { BiSolidStar } from "react-icons/bi";

interface SingleDishProps {}

const links = [{ name: "Home", link: "/" }];

const SingleDish: FC<SingleDishProps> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();  
  const { loading, success, msg, data, errors } = useSelector(
    (state) => state.singleDishes
  );
// console.log("objectdish",data)
  useEffect(() => {
    if (success === false && msg) {
      toast.error(msg);
    }
    if (success && msg) {
      toast.success(msg);
    }
    if (success === false) {
      toast.error(errors);
    }
  }, [success, msg, errors]);

  useEffect(() => {
    if (id) {
      dispatch(singledish(id));  // Fetch single dish data using `id`
    }
  }, [dispatch, id]);

  if (loading) {
    return <Loader />;
  }

  if (!data) {
    return <div>No dish available</div>;
  }

  return (
    <div className="flex-1 pt-4 mt-20">
      <Breadcamp
        isDash={false}
        ttl="Dish Details"
        links={[...links, { name: data?.name }]}
      />

      {/* Dish Details */}
      <div className="flex flex-col gap-3 p-6 md:flex-row">
        <div className="w-full md:w-1/2 ">
          <img
            src={data?.image}
            className="object-contain w-full max-w-[600px] h-[400px] block m-auto rounded-md"
            alt={data?.name}
          />
        </div>
        <div className="flex flex-col w-full gap-3 md:ml-10 text-start">
          <h2 className="text-xl font-bold">{data?.name}</h2>
          <span>
            <strong>Restaurant: </strong>
            {data?.restaurant_name}
          </span>
          <p className="text-slate-700 text-md">{data?.description}</p>
          <p className="flex items-center gap-1 text-2xl font-bold">
            {data?.compare_price && (
              <span className="text-xl text-red-700 line-through">
                {data?.compare_price}$
              </span>
            )}
            {data?.price}$
          </p>
          <div className="flex gap-2">
            <p className="text-xl font-bold">Rating:</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {Array(data?.rating)
              ?.fill("")
              ?.map((_, index) => (
                <BiSolidStar
                  key={index}
                  className="text-xl text-yellow-600"
                />
              ))}
          </div>
          <button
            type="submit"
            className="py-2 text-white bg-red-500 rounded-md "
          >
            Add
          </button>
        </div>
      </div>

      {/* Related Products */}
      {/* <h2 className="m-4 text-2xl font-semibold">You may also like:</h2>
      <div className="grid grid-cols-1 gap-4 m-4 md:grid-cols-2 lg:grid-cols-3">
        {data?.sameProducts?.map((e) => (
          <ProductCard product={e} key={e.id} />
        ))}
      </div> */}
    </div>
  );
};

export default SingleDish;
