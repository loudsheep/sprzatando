import styled from "styled-components";

const FilterSelect = (props) => {
  const FilterSelect = styled.select`
    padding: 1rem 2rem;
    margin-bottom: 1.5rem;
    font-size: 1.4rem;
    border: none;
    outline: none;
    border-radius: 8px;
  `;

  return (
    <FilterSelect name={props.data.name} id={props.data.id}>
      <option value={props.data.title} selected disabled>{props.data.title}</option>
      {props.data.type.map((type) => (
        <option value={type}>{type}</option>
      ))}
    </FilterSelect>
  );
};

export default FilterSelect;
