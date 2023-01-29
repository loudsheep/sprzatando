import styled from "styled-components";
import dotsPath from "../assets/img/dots.svg";
import cleaningLadyPath from "../assets/img/cleaningLady.svg";
import logoPath from '../assets/img/logo.png'
import { useWidth } from "@/hooks/useWidth";
import { Link } from "@inertiajs/react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: hidden;
  display: flex; 
`;

const BannerWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainColor};
  position: relative;
  flex: 1;
`;

const ChildreeWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

const DotsWrapper = styled.div`
  position: absolute;
  transform: translate(-35%, -40%) rotate(-45deg) ;
`;

const LadyWrapper = styled.div`
  position: absolute;
  width: 50%;
  right: 0;
  bottom: 0;
`;

const LogoWrapper = styled(Link)`
  position: absolute;
  top: 10px;
  right: 20px;
  width: 80px;
  /* transform: scale(.2); */
`

export default function Guest({ children }) {
  const width = useWidth();
  return (
    <Wrapper>
      {width > 992
        &&
        <BannerWrapper>
          <DotsWrapper>
            <img src={dotsPath} alt="Ornamental dots :)" />
          </DotsWrapper>
          <LadyWrapper>
            <img src={cleaningLadyPath} alt="Cleaning Lady" />
          </LadyWrapper>
        </BannerWrapper>}

      <ChildreeWrapper>
        <LogoWrapper href="/">
          <img src={logoPath} alt="Logo" />
        </LogoWrapper>
        {children}
      </ChildreeWrapper>
    </Wrapper>
  );
}
