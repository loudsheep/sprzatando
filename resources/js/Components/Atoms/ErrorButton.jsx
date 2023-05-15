import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 3rem;
  margin: ${({ margin }) => (margin ? margin : "15px")};
  width: ${(props) => props.width || "auto"};
  color: white;
  font-size: 1.6rem;
  background-color: #f14a4a;
  border-radius: 8px;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.8;
  }
`;
export const ErrorButton = (props) => {
  return (
    <StyledButton
      onClick={props.onClick}
      width={props.width}
      margin={props.margin}
    >
      {props.text && props.text}
    </StyledButton>
  );
};
