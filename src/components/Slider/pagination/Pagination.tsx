import React, { memo } from "react";
import { SlideItem } from "types";
import { Page } from "./Page";
import { PaginationWrapper } from "./PaginationWrapper";

interface PaginationProps {
  currentSlide: number;
  slides: SlideItem[];
  pags: boolean;
  onClick: (page: number) => void;
}

const Pagination = ({
  currentSlide,
  onClick,
  slides,
  pags,
}: PaginationProps) => {
  return (
    <PaginationWrapper pags={pags}>
      {slides.map((_, page) => (
        <Page
          className={currentSlide === page ? "active" : ""}
          key={page}
          onClick={() => onClick(page)}
        />
      ))}
    </PaginationWrapper>
  );
};

export default memo(Pagination);
