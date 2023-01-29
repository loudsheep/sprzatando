import styled from "styled-components";
import Button from "./Atoms/Button";
import FiltersWrapper from "./FiltersWrapper";

const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 80px auto 0 auto;
  padding: 0 100px;
`;

const TextWrapper = styled.div`
  width: 30%;
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
`;

const FilterSection = () => {
  return (
    <Header>
      <TextWrapper>
        <HeaderText>Przenieś sprzątanie na wyższy poziom</HeaderText>
        <Text>Wybierz jedną z tysiąca usług sprzątających</Text>
        <Button text={"Sprawdź"} />
      </TextWrapper>
      <FiltersWrapper />
    </Header>
  );
};

export default FilterSection;
