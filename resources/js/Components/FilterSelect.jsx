import styled from "styled-components";

const StyledFilterSelect = styled.select`
  padding: 1rem 2rem;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  border-radius: 8px;

  @media (max-width: 576px) {
    word-break: break-all;
  }
`;

const FilterSelect = (props) => {
  return (
    <StyledFilterSelect name={props.type} defaultValue={props.title}>
      <option value={props.title} name="titleValue" disabled>
        {props.title}
      </option>
      {props.filters.map((filter,i) => (
        <option value={filter} key={i}>{filter}</option>
      ))}
    </StyledFilterSelect>
  );
};

export default FilterSelect;
