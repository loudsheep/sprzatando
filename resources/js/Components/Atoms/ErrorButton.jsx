import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  margin: 1.5rem;
  width: ${(props) => props.width || "auto"};
  color: white;
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #f14a4a;
  border-radius: 8px;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.9;
  }
`;
export const ErrorButton = (props) => {
  return (
    <StyledButton onClick={props.onClick} width={props.width}>
      {props.text}
    </StyledButton>
  );
};


