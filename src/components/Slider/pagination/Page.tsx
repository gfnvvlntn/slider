import styled from "styled-components";

export const Page = styled.span`
  width: 15px;
  height: 15px;
  margin: 10px;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.4;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.6s;

  &:hover {
    opacity: 0.6;
  }
`;