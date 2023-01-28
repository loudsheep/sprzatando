import styled from "styled-components";

const Button = (props) => {
  const Button = styled.button`
    padding: 1rem 2rem;
    background-color: #429142;
    color: #fff;
    border-radius: 8px;
  `;

  return <Button>{props.text}</Button>;
};

export default Button;
