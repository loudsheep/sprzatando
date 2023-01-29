import { Fragment } from "react";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import styled from "styled-components";
import BurgerBtn from "./BurgerBtn";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  transform: ${({ open }) => (open ? "translateX(0)" : " translateX(100%)")};
  transition: 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 100;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  margin: 0.5em 0;
  padding: 0.5em 2em;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  text-decoration: none;

  :hover {
    color: #e2e0e0;
  }
`;

export const Navbar = ({ auth }) => {
  const [open, setOpen] = useState(false)

  return (
    <Fragment>
      <BurgerBtn open={open} setOpen={setOpen} />
      <Nav open={open}>
        {auth.user ? (
          <Link href={route("dashboard")} className="">
            Dashboard
          </Link>
        ) : (
          <>
            {/* <h1>LOGO</h1> */}
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
      </Nav>
    </Fragment>
  );
};
