import styled from "styled-components";
import { memo } from "react";

type SlideProps = {
  top?: string;
  bottom?: string;
  left: string;
};

const SlideText = styled.p<SlideProps>`
  position: absolute;
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  opacity: 0.5;
`;

export default memo(SlideText);
