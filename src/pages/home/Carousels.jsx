import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carousels } from "../../slice/Carousels/CarouselsAction";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousels = () => {
  const dispatch = useDispatch();

  const { loading, data, errors } = useSelector((state) => state.Carousels);
  console.log("datass:", data);

  const [imgCurrent, setImgCurrent] = useState(1);

  useEffect(() => {
    dispatch(carousels());
  }, [dispatch]);


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
            initialSlide={imgCurrent}
            onSlideChange={(swiper) => setImgCurrent(swiper.activeIndex)}
            onSwiper={(swiper) => console.log("swiper instance:", swiper)}
          >
            {data.map((e) => {
              // بناء الرابط الكامل للصورة
              const imageUrl = `http://localhost/storage/${e.image.replace('uploads/', '')}`;
              
              return (
                <SwiperSlide key={e.id}>
                  <img
                    className="object-cover w-full h-full"
                    src={imageUrl}
                    alt={e.name}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

        </div>

      </div>
    </div>
  );
};

export default Carousels;
