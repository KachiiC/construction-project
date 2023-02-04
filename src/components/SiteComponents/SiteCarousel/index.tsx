import "./SiteCarousel.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { ISiteCarousel } from "./SiteCarousel.types";
import { Image } from "antd";
import { Navigation } from "swiper";
import { ResponsiveContainer } from "utils/imageHelper";

export const SiteCarousel = ({
  title,
  images,
  height,
  width,
  maxHeight
}: ISiteCarousel) => {
  const imageList = images.map(({ image }) => image);

  const swiperImages = imageList.map((image, index) => (
    <SwiperSlide key={index}>
      <ResponsiveContainer maxHeight={maxHeight}>
        <Image src={image} height={height} width={width} />
      </ResponsiveContainer>
    </SwiperSlide>
  ));

  return (
    <>
      <h2>{title}</h2>
      <Swiper slidesPerView={2} modules={[Navigation]} navigation={true}>
        {swiperImages}
      </Swiper>
    </>
  );
};
