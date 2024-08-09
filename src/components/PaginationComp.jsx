// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./paginationStyles.css";

// import required modules
import { Pagination } from "swiper/modules";
// import PropTypes from "prop-types";


// eslint-disable-next-line react/prop-types
const PaginationComp = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
          {/* eslint-disable-next-line react/prop-types */}
        {data.map((slide, i) => (
          <SwiperSlide key={i}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

// PaginationComp.propTypes = {
//     data: PropTypes.arrayOf(
//         PropTypes.shape({
//             src: PropTypes.string.isRequired,
//             alt: PropTypes.string.isRequired,
//         })
//     ).isRequired,
// };

export default PaginationComp;
