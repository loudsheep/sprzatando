import styled from "styled-components";
import Filters from "./Filters";
import Button from "./Atoms/Button";

const FiltersWrapper = () => {
  const FiltersWrapper = styled.div`
    padding: 2rem;
    background-color: #ccc;
    border-radius: 8px;
  `;

  const FiltersHeader = styled.h3`
    margin-bottom: 1rem;
    text-align: center;
    color: black;
    font-weight: bold;
    font-size: 2rem;
  `;

  return (
    <FiltersWrapper>
      <FiltersHeader>Filtry</FiltersHeader>
      <form>
        <Filters></Filters>
        <Button text={"Pokaż 324 oferty"}></Button>
      </form>
    </FiltersWrapper>
  );
};

export default FiltersWrapper;
