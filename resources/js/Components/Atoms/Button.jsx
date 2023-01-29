import styled from "styled-components";

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  background-color: ${({theme}) => theme.colors.secondaryColor};
  color: #fff;
  border-radius: 8px;
  transition: opacity .3s;

  :hover{
    opacity: .9;
  }
`;
const Button = (props) => {

  return <StyledButton>{props.text}</StyledButton>;
};

export default Button;
