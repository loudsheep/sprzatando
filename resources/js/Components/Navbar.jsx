import { Link } from "@inertiajs/react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

const Wrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 1rem;
  font-size: 1.6rem;
  transition: color 0.3s;

  :hover {
    color: #e2e0e0;
  }
`;

export const Navbar = ({ auth }) => {
  return (
    <Nav>
      <Wrapper>
        {auth.user ? (
          <>
            <h1>LOGO</h1>
            <div>
              <StyledLink href="#">Pomoc</StyledLink>
              <StyledLink href="#">Ranking</StyledLink>
              <StyledLink href="/landing-page">Twoje konto</StyledLink>
              <StyledLink type="button" className="btn" href="/add-offer">
                Dodaj ogłoszenie
              </StyledLink>
            </div>
          </>
        ) : (
          <>
            <h1>LOGO</h1>
            <div>
              <StyledLink href="#">Pomoc</StyledLink>
              <StyledLink href="#">Ranking</StyledLink>
              <StyledLink href="/landing-page">Twoje konto</StyledLink>
              <StyledLink type="button" className="btn" href="/landing-page">
                Dodaj ogłoszenie
              </StyledLink>
            </div>
          </>
        )}
      </Wrapper>
    </Nav>
  );
};
