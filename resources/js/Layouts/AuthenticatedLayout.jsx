import styled from "styled-components";
import logoPath from "../assets/img/logo.png";
import { UserNavMenu } from "../Components/UserNavMenu";
import { Link } from "@inertiajs/react";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr 8fr;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

`;

const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 35px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  
`;

export default function Authenticated({ auth, children }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link href="/">
          <img src={logoPath} alt="logo" style={{ width: "70px" }} />
        </Link>
      </LogoWrapper>

      <UserInfoBox>
        <p>Hello {auth.user.name}</p>
      </UserInfoBox>

      <UserNavMenu />

      {children}
    </Wrapper>
  );
}
