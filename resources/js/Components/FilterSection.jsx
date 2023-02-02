import styled from "styled-components";
import Button from "./Atoms/Button";
import FiltersWrapper from "./FiltersWrapper";

const SectionFilterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 10rem auto 0 auto;
  padding: 0 100px;

  @media (min-width: 992px) {
    margin: 15rem auto 0 auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 576px) {
    padding: 0 50px;
  }
`;

const TextWrapper = styled.div`
  width: 30%;

  @media (max-width: 992px){
    width: 40%;
  }

  @media (max-width: 768px){
    width: 100%;
    margin-bottom: 5rem;
  }
`;

const HeaderText = styled.h1`
  line-height: 120%;
  font-size: 3.5rem;
  font-weight: bold;
  color: #000;
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin: 1rem 0 2rem 0;

  @media (max-width: 768px) {
    margin: .5rem 0 1rem 0;
  }
`;

const FilterSection = () => {
  return (
    <SectionFilterWrapper>
      <TextWrapper>
        <HeaderText>Przenieś sprzątanie na wyższy poziom</HeaderText>
        <Text>Wybierz jedną z tysiąca usług sprzątających</Text>
        <Button text={"Sprawdź"} />
      </TextWrapper>
      <FiltersWrapper/>
    </SectionFilterWrapper>
  );
};

export default FilterSection;
