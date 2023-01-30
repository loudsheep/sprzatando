import styled from "styled-components";
import Button from "./Atoms/Button";
import Filters from "./Filters";

const FilterWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 8px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FilterHeader = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  font-size: 2rem;
`;

const FiltersForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const FiltersWrapper = (props) => {
  return (
    <FilterWrapper>
      <FilterHeader>Filtry</FilterHeader>
      <FiltersForm>
        <Filters offers={props.offers}></Filters>
        <Button text={"Pokaż 324 oferty"} width={"100%"} type={'submit'}></Button>
      </FiltersForm>
    </FilterWrapper>
  );
};

export default FiltersWrapper;