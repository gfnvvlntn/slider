import styled from "styled-components";
import React from "react";

const Button = styled.button<{ navs: boolean }>`
  display: ${(props) => (props.navs ? "block" : "none")};
  border: none;
  background-color: inherit;
  cursor: pointer;
  opacity: 0.4;
`;

export const ButtonPrev = React.memo(styled(Button)`
  width: 30px;
  height: 25px;
  position: absolute;
  top: 50%;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/chevron-left.png");
`);

export const ButtonNext = React.memo(styled(Button)`
  width: 30px;
  height: 25px;
  position: absolute;
  top: 50%;
  right: 0;
  background-image: url("https://img.icons8.com/material-rounded/24/000000/chevron-right.png");
`);
