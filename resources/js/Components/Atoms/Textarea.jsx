import styled from "styled-components";
import { Label } from "../FormField";

const Wrapper = styled.div`
  width: 100%;
  .error {
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
  .error-label {
    color: ${({ theme }) => theme.colors.error};
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 35rem;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  font-size: 1.5rem;
  resize: none;
`;

export const Textarea = ({ handleChange, id, error }) => {
  return (
    <Wrapper>
      <Label className={error ? "error-labe" : ""} htmlFor={id}>
        Opis
      </Label>
      <TextArea
        className={error ? "error" : ""}
        id={id}
        onChange={handleChange}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
