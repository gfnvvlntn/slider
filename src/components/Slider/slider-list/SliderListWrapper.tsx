import React from "react";
import styled from "styled-components";

export const SliderListWrapper = React.memo(styled.ul`
  margin-top: 100px;
  width: 900px;
  background-color: black;
  display: flex;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`);
