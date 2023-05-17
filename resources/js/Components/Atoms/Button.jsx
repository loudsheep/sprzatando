import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  width: ${(props) => props.width || "auto"};
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${({ theme, color }) =>
    color ? theme.colors.error : theme.colors.secondaryColor};
  color: #fff;
  border-radius: 8px;
  transition: opacity 0.3s;
  :hover {
    opacity: 0.9;
  }
`;
const Button = ({ width, color, onClick, text, style }) => {
  return (
    <StyledButton onClick={onClick} width={width} color={color} style={style}>
      {text}
    </StyledButton>
  );
};

export default Button;
