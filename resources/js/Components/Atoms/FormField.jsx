import { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px;
  .error {
    border: 1px solid ${({ theme }) => theme.colors.error};
  }
  .error-label {
    color: ${({ theme }) => theme.colors.error};
  }
`;

const Label = styled.label`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
`;

const ErrorMessage = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
`;

export const FormField = forwardRef(
  (
    {
      type = "text",
      name,
      id,
      value,
      label,
      isFocused,
      handleChange,
      errorMessage,
    },
    ref
  ) => {
    const input = ref ? ref : useRef();

    useEffect(() => {
      if (isFocused) {
        input.current.focus();
      }
    }, []);

    return (
      <Wrapper>
        <Label htmlFor={id} className={errorMessage ? "error-label" : ""}>
          {label}
        </Label>
        <Input
          className={errorMessage ? "error" : ""}
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={handleChange}
        ></Input>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    );
  }
);
