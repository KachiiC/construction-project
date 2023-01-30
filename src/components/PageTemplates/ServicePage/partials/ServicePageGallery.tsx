import { Swiper, SwiperSlide } from "swiper/react";

import { FC } from "react";
import { Image } from "antd";
import { Navigation } from "swiper";
import { PageSection } from "components/PageComponents/PageSection";
import { ResponsiveContainer } from "utils/imageHelper";
import { ServicesCardsData } from "data/Services/ServiceCardsData";

export const ServicePageGallery: FC = () => {
  const galleryImage = ServicesCardsData.map(({ image }) => image);

  return (
    <PageSection
      transition="fade-left"
      duration="4000"
      margin="80px auto"
      padding="10px"
      className="service-page-slider"
    >
      <>
        <h2>Our Work</h2>
        <Swiper
          slidesPerView={2}
          modules={[Navigation]}
          navigation={true}
        >
          {galleryImage.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <ResponsiveContainer maxHeight={"200"}>
                  <Image src={image} height="100%" width="100%" />
                </ResponsiveContainer>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </PageSection>
  );
};
