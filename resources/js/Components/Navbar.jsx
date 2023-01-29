import { Fragment } from "react";
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import styled from "styled-components";
import BurgerBtn from "./BurgerBtn";
import logoPath from "../assets/img/logo.png";

const NavMobile = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  transform: ${({ open }) => (open ? "translateX(0)" : " translateX(100%)")};
  transition: 0.5s cubic-bezier(0.65, 0.05, 0.36, 1);
  z-index: 100;
`;

const NavDesktop = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100%;
  padding: 0 4rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  z-index: 100;
`;

const StyledLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin: 0.5em;
  padding: 0.5em;
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s;

  :hover {
    color: #e2e0e0;
  }

  @media (min-width: 992px) {
    font-size: 1.8rem;
  }
`;

const LogoWrapperMobile = styled.img`
  position: fixed;
  top: 10px;
  left: 20px;
  width: 75px;
  height: 75px;
`;

const LogoWrapperDesktop = styled.img`
  width: 75px;
  height: 75px;
`;

export const Navbar = ({ auth }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Fragment>
      {windowWidth < 992 && (
        <Fragment>
          <LogoWrapperMobile src={logoPath} />
          <BurgerBtn open={open} setOpen={setOpen} />
          <NavMobile open={open}>
            <>
              <StyledLink href="#">Pomoc</StyledLink>
              <StyledLink href="#">Ranking</StyledLink>
              <StyledLink href="/landing-page">Twoje konto</StyledLink>
              <StyledLink type="button" className="btn" href="/landing-page">
                Dodaj ogłoszenie
              </StyledLink>
            </>
          </NavMobile>
        </Fragment>
      )}
      {windowWidth > 992 && (
        <Fragment>
          <NavDesktop>
            <LogoWrapperDesktop src={logoPath} />
            <div>
              <StyledLink href="#">Pomoc</StyledLink>
              <StyledLink href="#">Ranking</StyledLink>
              <StyledLink href="/landing-page">Twoje konto</StyledLink>
              <StyledLink type="button" className="btn" href="/landing-page">
                Dodaj ogłoszenie
              </StyledLink>
            </div>
          </NavDesktop>
        </Fragment>
      )}
    </Fragment>
  );
};
