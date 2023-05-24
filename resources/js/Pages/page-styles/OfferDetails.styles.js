import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  
  padding: 6rem 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.dark};
  .section_column-first {
    width: 100%;
    max-width: 700px;
  }
  .section_column-second{
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 8rem 3rem;

    .section_column-first {
      margin-bottom: 2rem;
    }
  }
`;

export const StyledSubtitle = styled.h2`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 2.4rem;
  font-weight: bold;
`;

export const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 3rem;
  font-weight: bold;
`;

export const IconWrapper = styled.div`
  max-width: 40px;
  max-height: 40px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 992px) {
    top: 100px;
  }

  img {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContentWrapper = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: rgba(149, 157, 165, 0.3) 0px 8px 24px;
  padding: 2rem;
`;

export const ReportedSatus = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: -2px 2px 20px -6px rgba(66, 68, 90, 1);
  span {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0 15px;
    text-align: center;
  }
`;

export const PriceTag = styled.div`
  background-color: grey;
  color: white;
  max-width: 9rem;
  /* font-size: 2rem; */
  padding: 1rem;
  border-radius: 10px;
  margin: 1rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
