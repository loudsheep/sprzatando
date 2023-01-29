import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  width: ${(props) => props.width || "auto"};
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.9;
  }
`;
const Button = (props) => {
  return (
    <StyledButton type={props.type || "button"} width={props.width}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
