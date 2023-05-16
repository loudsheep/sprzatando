import styled, { keyframes } from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import addIconPath from "../../assets/img/nav-icons/add.png";
import acceptedIconPath from "../../assets/img/nav-icons/accepted.png";
import userIconPath from "../../assets/img/nav-icons/user.png";
import userOfferPath from "../../assets/img/nav-icons/userOffer.png";
import dangerIconPath from "../../assets/img/nav-icons/dangerMark.png";
import { useWidth } from "@/hooks/useWidth";
import { useState } from "react";
import { TestDiv } from "../Atoms/SvgDropdown";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 4rem;
  box-shadow: -4px -2px 10px 0px rgba(66, 68, 90, 1);
  z-index: 1;
  min-width: 220px;
  
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MobileWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 4rem;
  box-shadow: -4px -2px 10px 0px rgba(66, 68, 90, 1);
  z-index: 9;
  bottom: 0;
  height: calc(100vh);
  max-width: 25rem;
  width: 100%;
  transform: ${({ isOpen }) => (isOpen ? "translate(0)" : "translate(-100%)")};
  animation: ${({ isOpen, slideIn, slideOut }) => (isOpen ? slideIn : slideOut)}
    0.8s;
`;

const MenuItem = styled.div`
  color: ${({ theme }) => theme.colors.darkGrey};
  background-color: ${({ isActivee, theme }) =>
    isActivee ? theme.colors.lightPurple : ""};
  font-size: 1.6rem;
  min-height: 4.5rem;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  padding: 0.3rem 0.3rem 0.3rem 2.5rem;
  align-items: center;
  img {
    margin-right: 0.7rem;
  }
`;
export const Sidebar = ({isAdmin}) => {
  const { url } = usePage();
  const menuOptions = 
    !isAdmin ?
  [
    {
      name: "Dodaj ofertę",
      path: route("add.offer"),
      routeUrl: "/add-offer",
      icon: addIconPath,
    },
    {
      name: "Twoje oferty",
      path: route("offers.created"),
      routeUrl: "/user-offer",
      icon: userOfferPath,
    },
    {
      name: "Przyjęte zlecenia",
      path: route("offers.interested"),
      routeUrl: "/offer-interested",
      icon: acceptedIconPath,
    },
    {
      name: "Twoje Konto",
      path: route("profile.edit"),
      routeUrl: "/profile",
      icon: userIconPath,
    },
  ] : [
    {
      name: "Zgłoszone oferty",
      path: route("admin.reported"),
      routeUrl: "/admin/reported",
      icon: dangerIconPath,
    },
    {
      name: "Użytkownicy",
      path: route("admin.users"),
      routeUrl: "/admin/users",
      icon: userIconPath,
    }
  ];

  const width = useWidth();
  const [isOpen, setIsOpen] = useState(false);

  const handleTogleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {width >= 992 ? (
        <NavWrapper>
          {menuOptions.map(({ name, path, routeUrl, icon }) => (
            <Link href={path} key={name}>
              <MenuItem isActivee={url === routeUrl}>
                <img src={icon} width="25px" height="25px" alt="icon" />
                {name}
              </MenuItem>
            </Link>
          ))}
        </NavWrapper>
      ) : (
        <>
          <MobileWrapper isOpen={isOpen} slideIn={slideIn} slideOut={slideOut}>
          <TestDiv onClick={handleTogleSidebar} isOpen={isOpen} />
            {menuOptions.map(({ name, path, routeUrl, icon }) => (
              <Link href={path} key={name}>
                <MenuItem isActivee={url === routeUrl}>
                  <img src={icon} width="25px" height="25px" alt="icon" />
                  {name}
                </MenuItem>
              </Link>
            ))}
          </MobileWrapper>
        </>
      )}
    </>
  );
};
