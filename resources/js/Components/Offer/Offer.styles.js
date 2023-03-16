import styled from "styled-components";
import { Link } from "@inertiajs/react";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 90rem;
  width: 100%;
  margin: 20px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 2rem;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .info-wrapper {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 20rem;
    max-width: 50rem;
    flex-direction: column;
    max-height: 40rem;
    justify-content: space-between;
    margin-left: 18px;
    margin-right: 18px;
    overflow-wrap: anywhere;
    
  }
  .span {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 6px;
    border-radius: 8px;
    max-width: 80px;
    text-align: center;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  @media (max-width: 992px) {
    justify-content: center;
    }
`;
export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 8px;
  margin-left: 10px;
  max-width: 100px;
  text-align: center;
  
`;

export const Image = styled.img`
  max-width: 28rem;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;

  vertical-align: middle;
`;

export const ImgWrapper = styled.div`
  display: inline-block;
  overflow: hidden;
  img {
    max-width: 28rem;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
    vertical-align: middle;
    cursor: pointer;
    &:hover {
      -webkit-transform: scale(1.1); /* Safari and Chrome */
      -moz-transform: scale(1.1); /* Firefox */
      -ms-transform: scale(1.1); /* IE 9 */
      -o-transform: scale(1.1); /* Opera */
      transform: scale(1.1);
    }
  }
`;

export const StyledLink = styled(Link)`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.mainColor};
`;