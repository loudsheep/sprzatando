import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
  margin: 30px auto;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const InterestedWrapper = styled.div`
  flex: 4;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  flex: 2;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 10px;

  .name {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    img {
      height: 8rem;
      border-radius: 50%;
    }

    h2 {
      font-size: 3.5rem;
      font-weight: 600;
    }

    margin-bottom: 1rem;
  }

  hr {
    width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 1rem 0;
    color: #7a7a7a;

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .prop {
        font-weight: 600;
      }
    }
  }
`;

export const Review = styled.div`
  width: 100%;
  margin: 2rem 10% 0 10%;
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    border-radius: 50%;
  }

  .seperator {
    padding: 0 1rem;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  }

  .description {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

export const User = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  margin: .3rem;
  padding: 1rem;
  border-radius: 15px;
  /* height: 8rem; */
  width: 100%;
  /* flex-direction: column; */
  img {
    border-radius: 50%;
    width: 80px;
  }
  .pic {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2rem;
  }

  .btn-wrapper {
    margin: 20px 10px 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
