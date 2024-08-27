import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carousels } from "../../slice/Carousels/CarouselsAction";
import { Swiper, SwiperSlide } from "swiper/react";

// import cn from "../../lib/utils";

const Carousels = () => {
  const dispatch = useDispatch();

  const { loading, data, errors } = useSelector((state) => state.Carousels);
  console.log("datass:", data);

  const [imgCurrent, setImgCurrent] = useState(1);

  useEffect(() => {
    dispatch(carousels());
  }, [dispatch]);

  // const handleNext = () => {
  //   if (data?.carusels?.length === imgCurrent) {
  //     setImgCurrent(1);
  //   } else {
  //     setImgCurrent(imgCurrent + 1);
  //   }
  // };

  // const handlePrev = () => {
  //   if (imgCurrent > 1) {
  //     setImgCurrent(imgCurrent - 1);
  //   } else {
  //     setImgCurrent(data?.carusels?.length);
  //   }
  // };

  if (loading) {
    return <div>Loading...</div>;
  }

  // if (errors) {
  //   return <div>Error: {errors}</div>;
  // }

  if (!data || data.length === 0) {
    return <div>No carousels available</div>;
  }

  return (
    <div className="mx-auto mt-10 border rounded-md">
      <div className="relative flex lg:w-[1100px] md:w-[770px] lg:h-[400px] md:h-[300px] sm:h-[230px] h-[200px] items-center">
        {/* <div className="relative flex items-center"> */}
        <div className="flex-1 w-full">
          <Swiper
            spaceBetween={50} 
            slidesPerView={1} 
            onSlideChange={(swiper) => console.log("slide change", swiper)}
            onSwiper={(swiper) => console.log("swiper instance:", swiper)}
            initialSlide={imgCurrent - 1} 
          >
            {data?.map((e) => (
              <SwiperSlide key={e?.id}>
                <img
                  className="h-[550px] w-full"
                  src={e?.image}
                  alt={e?.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* {data?.map((e, i) => {
              return i + 1 === imgCurrent ? (
                <img
                  key={e?.id}
                  className="h-[550px] w-full"
                  src={e?.image}
                  alt=""
                />
              ) : (
                <div>{e?.name}</div>
              );
            })} */}
        {/* <div className="absolute flex items-center gap-4 -translate-x-1/2 bottom-3 right-1/2 left-1/2">
          {data?.map((e, i) => (
            <span
              key={e?.id}
              className={
                (i === imgCurrent - 1 ? "bg-slate-800" : "bg-slate-300",
                "cursor-pointer w-3 h-3 block rounded-full")
              }
            ></span>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Carousels;
