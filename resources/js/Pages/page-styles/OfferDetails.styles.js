import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 7rem;
  width: 100%;
  justify-content: center;
  .section_column-first{
    max-width: 60%;
  }
  
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 3rem;
  font-weight: bold;
`;

