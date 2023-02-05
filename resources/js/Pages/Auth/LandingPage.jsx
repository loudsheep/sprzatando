import GuestLayout from "@/Layouts/GuestLayout";
import styled from "styled-components";
import { Link, Head } from "@inertiajs/react";

const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 36px;
  margin: 25px auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  align-items: center;
  text-align: center;
  padding: 40px;
  .main-button {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  .main-button {
    background-color: ${({ theme }) => theme.colors.mainColor};
  }
`;

const StyledButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 260px;
  margin: 10px;
  padding: 10px 0;
  color: white;
  border-radius: 8px;
  text-align: center;
  height: 45px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }

  transition: all 0.2s ease-in-out;
`;
export default function LandingPage() {
  return (
    <GuestLayout>
      <Head title="Landing" />
      <Wrapper>
        <StyledTitle>Sprzatando</StyledTitle>
        <p>
          Platforma łącząca ludzi posiadających srogie hacjendy z ludźmi
          mającymi ręce i minimum zdolności manualnych, żeby posprzątać.
        </p>
      </Wrapper>
      <ButtonsWrapper>
        <StyledButton className="main-button" href="/login" type="button">Zaloguj</StyledButton>
        <StyledButton href="/register" type="button">Zarejstruj</StyledButton>
      </ButtonsWrapper>
    </GuestLayout>
  );
}
