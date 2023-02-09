import styled from "styled-components";
import Button from "../Atoms/PrimaryButton";
import Filters from "./Filters";
import { useSelector } from "react-redux";

const FilterWrapper = styled.div`
  padding: 2rem;
  background: rgba(255, 255, 255, 0.01);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const FilterHeader = styled.h3`
  margin-bottom: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
  font-size: 2rem;
`;

const FiltersForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FiltersWrapper = () => {
  const offers = useSelector((state) => state.offers.offers.offers);
  return (
    <FilterWrapper>
      <FilterHeader>Filtry</FilterHeader>
      <FiltersForm>
        <Filters />
        <Button type={"submit"}>Pokaż {offers && offers.length} ofert</Button>
      </FiltersForm>
    </FilterWrapper>
  );
};

export default FiltersWrapper;
