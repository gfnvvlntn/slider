import React, { memo } from "react";
import SlideText from "../SlideText";
import { ButtonNext, ButtonPrev } from "../../../primitives/Button";
import { SlideWrapper } from "./SlideWrapper";

type SlideProps = {
  img: string;
  text: string;
  navs: boolean;
  currentSlide: number;
  slidesLength: number;
  prevSlide: () => void;
  nextSlide: () => void;
};

const Slide = ({
  navs,
  img,
  text,
  currentSlide,
  prevSlide,
  nextSlide,
  slidesLength,
}: SlideProps) => {
  return (
    <SlideWrapper>
      <SlideText left="3%" top="3%">
        {`${currentSlide + 1} / ${slidesLength}`}
      </SlideText>
      <ButtonPrev navs={navs} onClick={prevSlide} />
      <ButtonNext navs={navs} onClick={nextSlide} />
      <img src={img} alt={text} />
      <SlideText left="45%" bottom="3%">
        {text}
      </SlideText>
    </SlideWrapper>
  );
};

export default memo(Slide);
