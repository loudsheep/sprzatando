import styled from "styled-components";
import SvgPath from "../../assets/img/nav-icons/svg.svg";

const ImgWrapper = styled.div`
  position: absolute;
  top: 8rem;
  transform: ${({ isOpen }) => (isOpen ? "rotate(90deg)" : "rotate(-90deg)")};
  right: 15px;
`;

export const TestDiv = ({ onClick, isOpen }) => {
  return (
    <ImgWrapper onClick={onClick} isOpen={isOpen}>
      <img src={SvgPath} alt="icon" width="30px" />
    </ImgWrapper>
  );
};

export const Svg = () => {
  return (
    <svg
      className="ml-3 -mr-0.9 h-8 w-6s"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
};
