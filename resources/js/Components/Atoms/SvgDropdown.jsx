import styled from "styled-components";

export const TestDiv = styled.div` 
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.colors.secondaryColor}
`;

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
