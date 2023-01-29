import styled from "styled-components";

const StyledFilterSelect = styled.select`
  padding: 1rem 2rem;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  border-radius: 8px;
`;

const FilterSelect = (props) => {
  return (
    <StyledFilterSelect name={props.data.name} id={props.data.id}>
      <option value={props.data.title} selected disabled>
        {props.data.title}
      </option>
      {props.data.type.map((type, i) => (
        <option key={i} value={type}>
          {type}
        </option>
      ))}
    </StyledFilterSelect>
  );
};

export default FilterSelect;
