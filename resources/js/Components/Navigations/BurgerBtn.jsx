import styled from "styled-components";
const StyledBurger = styled.button`
  position: ${({isUserPanel}) => isUserPanel ? 'static' : 'fixed'};
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1000;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: ${({ open }) => (open ? "#fff" : "#0D0C1D")};

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerBtn = ({ open, setOpen, isUserPanel}) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      isUserPanel={isUserPanel}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerBtn;
