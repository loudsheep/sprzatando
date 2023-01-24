import { Link } from "@inertiajs/react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  padding: 24px;
  justify-content: space-between;
`;

export const Navbar = ({auth}) => {
  return (
    <Wrapper>
      {auth.user ? (
        <Link href={route("dashboard")} className="">
          Dashboard
        </Link>
      ) : (
        <>
          <h1>LOGO</h1>
          <div>
            <Link
              href={route("login")}
              className="text-sm text-gray-700 dark:text-gray-500 underline"
            >
              Log in
            </Link>

            <Link
              href={route("register")}
              className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
            >
              Register
            </Link>
          </div>
        </>
      )}
    </Wrapper>
  );
};
