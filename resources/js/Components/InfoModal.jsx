import styled, { keyframes } from "styled-components";
import CloseBtnPath from '../assets/img/close-btn.png'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  max-width: 300px;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  box-shadow: -4px 3px 22px -6px rgba(66, 68, 90, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  position: fixed;
  z-index: 9999;
  border-radius: 20px;
  animation-name: ${(props) => (props.isVisible ? fadeIn : "")};
  animation-duration: 0.5s;
  bottom: 4rem;
  right: 4rem;
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
  strong{
    color: ${({theme}) => theme.colors.mainColor};
    font-size: 1.7rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
`;

export const SuccesReported = ({ isVisible, onInfoClose }) => {
  if (!isVisible) return null;
  return (
    <Wrapper isVisible={isVisible}>
      <div>
        <CloseButton onClick={onInfoClose}>
          <img src={CloseBtnPath} width={24} alt='close icon'/>
        </CloseButton>
      </div>

      <strong>Zgłoszono tą ofertę!👀</strong>
    </Wrapper>
  );
};
