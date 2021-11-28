import React, { memo } from "react";
import Slide from "../slide/Slide";
import { SlideItem } from "types";
import { SliderListWrapper } from "./SliderListWrapper";

type SlideListProps = {
  slides: SlideItem[];
  currentSlide: number;
  navs: boolean;
  prevSlide: () => void;
  nextSlide: () => void;
  onMouseHover: () => void;
  slidesLength: number;
};

const SlideList = (props: SlideListProps) => {
  return (
    <SliderListWrapper
      onMouseEnter={props.onMouseHover}
      onMouseLeave={props.onMouseHover}
    >
      {props.slides.map((slide: SlideItem, id) => (
        <Slide
          key={id}
          navs={props.navs}
          currentSlide={props.currentSlide}
          slidesLength={props.slidesLength}
          prevSlide={props.prevSlide}
          nextSlide={props.nextSlide}
          img={props.slides[props.currentSlide].img}
          text={props.slides[props.currentSlide].text}
        />
      ))}
    </SliderListWrapper>
  );
};

export default memo(SlideList);
