import styled from "styled-components";

const Box = styled.div`
  width: 140px;
  height: 50px;
  margin: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9015b7;
  font-weight: bold;
  background-color: ${({ isChecked, theme }) => (isChecked ? "#F1DDF7" : theme.colors.lightGrey)};
  border: 2px solid #9015b7;
  border-radius: 8px;
  cursor: pointer;
`;

export const TypeBox = ({ id, name, value, title, onChange, checked }) => {
  return (
    <>
      <input
        id={id}
        name={name}
        value={value}
        type="radio"
        style={{ display: "none" }}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={id}>
        <Box isChecked={checked}>{title}</Box>
      </label>
    </>
  );
};
