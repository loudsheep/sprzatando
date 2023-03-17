import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import addIconPath from "../../assets/img/nav-icons/add.png";
import acceptedIconPath from "../../assets/img/nav-icons/accepted.png";
import userIconPath from "../../assets/img/nav-icons/user.png";
import userOfferPath from "../../assets/img/nav-icons/userOffer.png";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding-top: 4rem;
  box-shadow: -4px -2px 10px 0px rgba(66, 68, 90, 1);
  z-index: 1;
 
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
export const UserNavMenu = () => {
  const { url } = usePage();
  const menuOptions = [
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
  ];
  return (
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
  );
};
