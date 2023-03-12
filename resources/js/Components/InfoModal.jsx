import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 300px;
  height: 100px;
  background-color: #f5c3c3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-size: 16px;
  position: fixed;
  z-index: 9999;
  border-radius: 20px;
  animation-name: show-box;
  animation-duration: 1s;
  transform: translate(0, -100%);
  @keyframes show-box {
    0% {
      transform: translate(0, -500%);
    }
    100% {
      transform: translate(0, -300%);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  border: none;
  background-color: #f5c3c3;
  font-weight: bold;
  cursor: pointer;
  transform: translate(144px, -180%);
  strong {
    color: #b23232;
  }
`;

export const SuccesReported = ({ isVisible, onInfoClose }) => {
  if (!isVisible) return null;
  return (
    <Wrapper>
      <div>
        <CloseButton onClick={onInfoClose}>
          <strong>X</strong>
        </CloseButton>
      </div>

      <strong style={{ color: "#b23232" }}>Reported This offer</strong>
    </Wrapper>
  );
};