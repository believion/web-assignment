// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./productCarouselStyles.css"

// import required modules
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";
import { ChevronsLeftIcon, ChevronsRightIcon } from "lucide-react";
import {useRef} from "react";

const data = [
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
  {
    img: "/Product1.png",
    title: "Cinnamon Honey",
    oldPrice: 15.0,
    newPrice: 9.0,
  },
];

export default function ProductCarousel() {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className={"swiper-container relative h-[300px] w-[80vw]"}>
        <Swiper
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            slidesPerView={4}
            modules={[Navigation]}
            className="mySwiper h-[300px]"
            spaceBetween={-50}
        >
          {data.map((slide, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <ProductCard/>
              </SwiperSlide>
          ))}
        </Swiper>
        <div ref={nextRef}
            className="custom-swiper-button-next absolute right-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
          <ChevronsRightIcon className="text-white w-10 h-10"/>
        </div>
        <div ref={prevRef}
            className="custom-swiper-button-prev absolute left-[-20px] top-1/2 transform -translate-y-1/2 cursor-pointer z-10">
          <ChevronsLeftIcon className="text-white w-10 h-10"/>
        </div>
      </div>
    </>
  );
}
