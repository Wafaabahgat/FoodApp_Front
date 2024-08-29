import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carousels } from "../../slice/Carousels/CarouselsAction";
import Loader from "../../components/Loader";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Carousels = () => {
  const dispatch = useDispatch();

  const { loading, data } = useSelector((state) => state.Carousels);
  // console.log("carousels:", data);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    dispatch(carousels());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < data.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [data, currentImage]);

  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <div>No carousels available</div>;
  }

  const handleprevious = () => {
    if (currentImage > 0) {
      setCurrentImage((e) => e - 1);
    }
  };

  const handleNext = () => {
    if (currentImage < data.length - 1) {
      setCurrentImage((e) => e + 1);
    }
  };

  return (
    <section className="w-full h-full">
      <div className="flex  max-h-[75vh] overflow-hidden">
        {data.map((e) => {
          // const imageUrl = `http://localhost:8000/storage/${e.image}`;

          return (
            <div
              key={e.id}
              className="relative min-h-[180px] lg:min-h-full min-w-full overflow-hidden transition-all group"
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="w-full">
                <img src={e.image} className="object-cover w-full h-full" />
              </div>

              {/*** next and previous image ***/}
              <div className="absolute bottom-0 flex items-center justify-between w-full h-full px-4">
                <button
                  className="z-10 p-1 text-xl text-black bg-white rounded-full hover:bg-gradient-to-l from-red-700 to-orange-500"
                  onClick={handleprevious}
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="z-10 p-1 text-xl text-black bg-white rounded-full hover:bg-gradient-to-l from-red-700 to-orange-500"
                  onClick={handleNext}
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-800 to-transparent"></div>

              <div className="container mx-auto">
                <div className="absolute top-[100px] left-20 w-full max-w-xl px-3">
                  <div className="flex flex-col gap-0 font-bold text-white text-[16px] sm:text-xl md:gap-2 lg:gap-4 lg:text-5xl md:text-3xl">
                    <h2 className="animate-slideUp">Order your</h2>
                    <span className="animate-slideUp">favourite food here</span>
                  </div>
                  <p className="mt-2 sm:mb-6 mb-1 text-white md:text-sm lg:mt-9 md:mt-5 text-[9px] sm:text-[10px] animate-slideUp">
                    In the next part we will make the back-end and admin panel
                    of this food delivery website / web app. We will make the
                    project full stack with the help of MongoDB, Express, React
                    and Node JS
                  </p>
                  <div className="animate-slideUp">
                    <Link
                      to="#"
                      className="px-3 py-1 bg-white border md:text-sm sm:py-2 md:px-6 rounded-3xl text-[10px]"
                    >
                      View Menu
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Carousels;
