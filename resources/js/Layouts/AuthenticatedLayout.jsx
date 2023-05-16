import styled from "styled-components";
import logoPath from "../assets/img/transparentLogo.png";
import { Sidebar } from "../Components/Navigations/Sidebar";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import { Svg } from "../Components/Atoms/SvgDropdown";
import { useWidth } from "@/hooks/useWidth";

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 23rem 6fr;
  grid-template-rows: 90px 8fr;
`;

const MobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const UserInfoBox = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8rem;
  padding: 0 35px;
  width: 100%;
  grid-column-start: span 2;
  box-shadow: 0px -7px 17px 0px rgba(66, 68, 90, 1);
  z-index: 9;
  @media (max-width: 992px) {
    min-height: 6rem;
    justify-content: space-between;
  }
`;

const ChildrenWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default function Authenticated({ auth, children, prophileImg }) {
  const width = useWidth();

  console.log(auth)
  return (
    <>
      {width >= 992 && (
        <Wrapper>
          <UserInfoBox>
            <LogoWrapper>
              <Link href="/">
                <img src={logoPath} alt="logo" style={{ width: "70px" }} />
              </Link>
            </LogoWrapper>

            <Dropdown>
              <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
                    <img
                      style={{ marginRight: "13px", borderRadius: "50%" }}
                      width={40}
                      height={40}
                      src={prophileImg}
                      alt="user prophile image"
                    />
                    {auth.user.name}
                    <Svg />
                  </button>
                </span>
              </Dropdown.Trigger>
              <Dropdown.Content>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                  Wyloguj
                </Dropdown.Link>

                {auth.user.role == "admin" && (
                  <Dropdown.Link href={route("admin.reported")} method="get" as="button">
                    ADMIN PANEL
                  </Dropdown.Link>
                )}

              </Dropdown.Content>
            </Dropdown>
          </UserInfoBox>
          {/* //To do */}
          <Sidebar />

          <ChildrenWrapper>{children}</ChildrenWrapper>
        </Wrapper>
      )}
      {width < 992 && (
        <MobileWrapper>
          <UserInfoBox>
            <Link href="/">
              <img src={logoPath} alt="logo" style={{ width: "70px" }} />
            </Link>
            <Dropdown>
              <Dropdown.Trigger>
                <span className="inline-flex rounded-md">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                  >
                    <img
                      style={{ marginRight: "13px", borderRadius: "50%" }}
                      width={40}
                      height={40}
                      src={prophileImg}
                      alt="user prophile image"
                    />
                    {auth.user.name}

                    <Svg />
                  </button>
                </span>
              </Dropdown.Trigger>

              <Dropdown.Content>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                  Wyloguj
                </Dropdown.Link>
                <Dropdown.Link href={route("admin.users")} method="get" as="button">
                  Admin panel
                </Dropdown.Link>
              </Dropdown.Content>
            </Dropdown>
          </UserInfoBox>
          <Sidebar />
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </MobileWrapper>
      )}
    </>
  );
}
