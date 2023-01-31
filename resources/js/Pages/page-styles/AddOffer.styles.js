import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 2.4rem;
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;
export const StyledSubTitle = styled.h2`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  margin-top: 5rem;
`;

export const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 60rem;
  padding: 20px;
  max-height: 80%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .inputs-container {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
    input {
      width: 240px;
      margin: 5px;
    }
    @media (max-width: 576px) {
      justify-content: center;
    }
  }
  .btn-container {
    display: flex;
    align-items: center;
    width: 100%;
    margin: 20px;
    justify-content: space-between;
    align-items: center;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 35rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  font-size: 1.5rem;
  resize: none;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 10px;
  }
`;
export const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 25px;
  input {
    display: none;
  }
`;
export const StyledPhotoBox = styled.label`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  cursor: pointer;
`;

export const UploadedImgWrapper = styled.div`
  width: 150px;
  min-height: 150px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
`;
