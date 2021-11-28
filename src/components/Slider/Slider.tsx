import React, { useCallback, useEffect, useState, memo } from "react";
import Pagination from "./pagination/Pagination";
import SlideList from "./slider-list/SlideList";
import { SlideItem } from "types";
import {
  MILLISECONDS_IN_SECOND,
  DEFAULT_ROTATE_DELAY_INTERVAL,
} from "constants/constants";

interface SliderProps {
  slides: SlideItem[];
  navs: boolean;
  loop: boolean;
  pags: boolean;
  auto: boolean;
  stopMouseHover: boolean;
  delay?: number;
}

const Slider = ({
  slides,
  navs,
  loop,
  pags,
  auto,
  delay,
  stopMouseHover,
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [moveSlider, setMoveSlider] = useState(auto);

  const slidesLength = slides.length;

  useEffect(() => {
    const currentDelay = delay
      ? delay * MILLISECONDS_IN_SECOND
      : DEFAULT_ROTATE_DELAY_INTERVAL;
    const timer = setTimeout(() => {
      if (moveSlider) {
        setCurrentSlide((currentSlide + 1) % slidesLength);
      }
    }, currentDelay);
    return () => clearTimeout(timer);
  }, [currentSlide, moveSlider, delay, slidesLength]);

  const prevSlide = useCallback((): void => {
    if (loop) {
      setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : slidesLength - 1);
    } else {
      setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : currentSlide);
    }
  }, [currentSlide, loop, slidesLength]);

  const nextSlide = useCallback((): void => {
    if (loop) {
      setCurrentSlide(currentSlide + 1 === slidesLength ? 0 : currentSlide + 1);
    } else {
      setCurrentSlide(
        currentSlide + 1 === slidesLength ? currentSlide : currentSlide + 1
      );
    }
  }, [currentSlide, loop, slidesLength]);

  const selectSlide = useCallback((page: number) => {
    setCurrentSlide(page);
  }, []);

  const onMouseHover = useCallback((): void => {
    if (stopMouseHover && auto) {
      setMoveSlider(!moveSlider);
    }
  }, [moveSlider, auto, stopMouseHover]);

  return (
    <div>
      <SlideList
        slides={slides}
        navs={navs}
        currentSlide={currentSlide}
        slidesLength={slidesLength}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
        onMouseHover={onMouseHover}
      />
      <Pagination
        slides={slides}
        pags={pags}
        onClick={selectSlide}
        currentSlide={currentSlide}
      />
    </div>
  );
};

export default memo(Slider);
