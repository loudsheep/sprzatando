import styled from "styled-components";

const StyledButton = styled.button`
  padding: .5rem;
  width: ${(props) => props.width || "auto"};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme, color }) =>color ? theme.colors.error : theme.colors.secondaryColor};
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.3s;
  margin: 0 5px;
  :hover {
    opacity: 0.9;
  }
`;
const Button = (props) => {
  return (
    <StyledButton type={props.type || "button"} width={props.width} color={props.color}>
      {props.text}
    </StyledButton>
  );
};

export default Button;
