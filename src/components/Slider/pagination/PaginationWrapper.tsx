import styled from "styled-components";

export const PaginationWrapper = styled.ul<{ pags: boolean }>`
  width: 900px;
  display: ${(props) => (props.pags ? "flex" : "none")};
  justify-content: center;

  .active {
    opacity: 0.6;
  }
`;
