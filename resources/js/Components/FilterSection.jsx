import styled from "styled-components";
import Button from "./Attoms/Button";
import FiltersWrapper from "./FiltersWrapper";
const FilterSection = () => {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
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
