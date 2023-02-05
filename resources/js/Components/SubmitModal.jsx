import styled, { keyframes } from "styled-components";
import SuccesIconPath from "@/assets/img/succesIcon.png";
import modalBackgroundPath from "@/assets/img/modalBackground.png";
import PrimaryButton from "../Components/Atoms/PrimaryButton";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 998;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ fadeIn }) => fadeIn} 0.5s;
`;

const StyledModal = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  background-position: 50rem;
  width: 100%;
  max-width: 400px;
  height: 100%;
  max-height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
  padding: 20px;
  margin: 30px;
  border-radius: 10px;
  z-index: 999;
  animation: ${({ zoomIn }) => zoomIn} 0.5s;
  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const StyledSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondaryColor};
  font-size: 24px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.268);
  font-weight: bold;
`;

const Icon = styled.img`
  width: 100px;
`;

export const SubmitModal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Wrapper fadeIn={fadeIn} onClick={onClose}>
          <StyledModal zoomIn={zoomIn} bgImg={modalBackgroundPath}>
            <div>
              <Icon src={SuccesIconPath} />
              <StyledSubTitle style={{ margin: "0" }}>
                Ofeta została pomyślnie dodana
              </StyledSubTitle>
            </div>
            <PrimaryButton onClick={onClose} styles={{ margin: "20px" }}>
              Zamknij
            </PrimaryButton>
          </StyledModal>
        </Wrapper>
      )}
    </>
  );
};
