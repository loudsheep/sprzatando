import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 6rem 3rem;
  width: 100%;
  justify-content: center;
  position: relative;

  color: ${({ theme }) => theme.colors.dark};
  .section_column-first {
    width: 100%;
    max-width: 700px;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8rem 3rem;
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
  position: absolute;
  top: 20px;
  left: 20px;
  @media (max-width: 992px) {
    top: 100px;
  }
`;

export const ButtonsWrapper = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0 20px;
  border-radius: 10px;
  box-shadow: -2px 2px 20px -6px rgba(66, 68, 90, 1);
`

export const ReportedSatus = styled.div`
  background-color: #fefefe;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: -2px 2px 20px -6px rgba(66, 68, 90, 1);
  span {
    color: ${({theme}) => theme.colors.dark};
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0 15px;
    text-align: center;
  }
`;
