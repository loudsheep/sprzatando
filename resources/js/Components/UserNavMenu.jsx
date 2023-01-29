import styled from "styled-components";
import { Link } from "@inertiajs/react";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 15px;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: 1.5rem;
`;
export const UserNavMenu = () => {
  const menuOptions = [
    {
      name: "Dodaj ofertę",
      path: "add-offer",
    },
    {
      name: "Twoje oferty",
      path: "/",
    },
    {
      name: "Przyjęte zlecenia",
      path: "/",
    },
    {
      name: "Twoje Konto",
      path: "/dashboard",
    },
  ];

  return (
    <NavWrapper>
      {menuOptions.map(({ name, path }) => (
        <StyledLink href={path}>{name}</StyledLink>
      ))}
    </NavWrapper>
  );
};
