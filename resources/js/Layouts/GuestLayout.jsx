import styled from "styled-components";
import dotsPath from "../assets/img/dots.svg";
import cleaningLadyPath from "../assets/img/cleaningLady.svg";

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
  right: 0;
  bottom: 0;
`;

export default function Guest({ children }) {
  return (
    <Wrapper>
      <BannerWrapper>
        <DotsWrapper>
          <img src={dotsPath} alt="Ornamental dots :)" />
        </DotsWrapper>
        <LadyWrapper>
          <img src={cleaningLadyPath} alt="Cleaning Lady" />
        </LadyWrapper>
      </BannerWrapper>

      <ChildreeWrapper>{children}</ChildreeWrapper>
    </Wrapper>
  );
}
