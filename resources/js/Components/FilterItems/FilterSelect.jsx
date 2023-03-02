import styled from "styled-components";

const StyledFilterSelect = styled.select`
  padding: 1rem 2rem;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  border: none;
  outline: none;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.lightGrey};
  border: 1px solid ${({theme}) => theme.colors.lightPurple};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);;
  @media (max-width: 576px) {
    word-break: break-all;
  }
`;

const FilterSelect = (props) => {
  return (
    <StyledFilterSelect
      name={props.type}
      defaultValue={props.title}
      onChange={props.handleChange}
    >
      <option value={props.title} name="titleValue" >
        {props.title}
      </option>
      {props.filters.map((filter, i) => (
        <option value={filter} key={i}>
          {filter}
        </option>
      ))}
    </StyledFilterSelect>
  );
};

export default FilterSelect;
