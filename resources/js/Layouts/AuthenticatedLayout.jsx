import styled from "styled-components";
import logoPath from "../assets/img/logo.png";
import { UserNavMenu } from "../Components/UserNavMenu";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { Svg } from "../Components/Atoms/SvgDropdown";

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

const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Authenticated({ auth, children }) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link href='/'>
          <img src={logoPath} alt="logo" style={{ width: "70px" }} />
        </Link>
      </LogoWrapper>

      <UserInfoBox>
        <Dropdown>
          <Dropdown.Trigger>
            <span className="inline-flex rounded-md">
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
              >
                {auth.user.name}

                <Svg />
              </button>
            </span>
          </Dropdown.Trigger>

          <Dropdown.Content>
            <Dropdown.Link href={route("profile.edit")}>Profile</Dropdown.Link>
            <Dropdown.Link href={route("logout")} method="post" as="button">
              Log Out
            </Dropdown.Link>
          </Dropdown.Content>
        </Dropdown>
      </UserInfoBox>

      <UserNavMenu />

      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Wrapper>
  );
}
