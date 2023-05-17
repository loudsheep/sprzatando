import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 2.4rem;
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;
export const StyledSubTitle = styled.h2`
  font-size: 1.9rem;
  color: ${({ error, theme }) =>
    error ? theme.colors.error : theme.colors.darkGrey};
  font-weight: bold;
  margin-top: 5rem;
`;

export const FormWrapper = styled.form`
  width: 100%;
  height: 100%;
  max-width: 60rem;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .error {
    color: ${({ theme }) => theme.colors.error};
  }

  .inputs-container {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 14px 0;
    input {
      width: 240px;
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
  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.error : theme.colors.grey)};
  position: relative;
`;

export const DeleteButton = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: 50%;
  width: 2.3rem;
  height: 2.3rem;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  top: -10px;
  right: -10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
`;
export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`