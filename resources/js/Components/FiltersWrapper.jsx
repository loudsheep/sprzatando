import styled from "styled-components";
import Button from './Atoms/Button'
import Filters from "./Filters";

const Wrapper = styled.div`
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

const FiltersWrapper = () => {
  return (
    <Wrapper>
      <FiltersHeader>Filtry</FiltersHeader>
      <form>
        <Filters></Filters>
        <Button text={"Pokaż 324 oferty"}></Button>
      </form>
    </Wrapper>
  );
};

export default FiltersWrapper;
