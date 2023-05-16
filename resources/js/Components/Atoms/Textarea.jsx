import styled from "styled-components";
import { Label } from "../FormField";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .error {
    color: ${({ theme }) => theme.colors.darkGrey};
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
  .error-label {
    color: ${({ theme }) => theme.colors.error};
  }
  .info-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const ErrorMessage = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: ${({ height }) => (height ? height : "35rem")};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  font-size: 1.5rem;
  resize: none;
`;

const MessageLength = styled.span`
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.darkGrey};
  font-size: 1.4rem;
`;

export const Textarea = ({ handleChange, id, error, value, name, height, isReview }) => {
  return (
    <Wrapper>
      <div className="info-wrapper">
        <Label className={error ? "error-label" : ""} htmlFor={id}>
          Opis
        </Label>
        <MessageLength error={value.length >= 255}>
          {value.length} / {isReview ? '255' : '500' }
        </MessageLength>
      </div>
      <TextArea
        className={error ? "error" : ""}
        id={id}
        onChange={handleChange}
        value={value}
        name={null || name}
        height={height}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Wrapper>
  );
};
