import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme, color }) => color ? color : theme.gradient};
  color: white;
  padding: 10px 30px;
  border-radius: 10px;
  min-width: 130px;
  background-size: 300% 100%;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
    transform: translate(0%, -6%);
  }
  transition: all 0.2s ease-in;
`;

export default function PrimaryButton({
  type = "submit",
  processing,
  children,
  onClick,
  color,
}) {
  return (
    <Button type={type} onClick={onClick} disabled={processing} color={color}>
      {children}
    </Button>
  );
}
