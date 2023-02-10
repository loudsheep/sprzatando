import styled from "styled-components";
import { StyledSubTitle } from "@/Pages/page-styles/AddOffer.styles";
import { Label } from "./FormField";
import Checkbox from "@/Components/Atoms/Checkbox";

// const Wrapper = styled.div`

// `

export const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 10px 0 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  div {
    margin: 0 10px;
  }
  .checkbox-column {
  }
`;

const ErrorMessage = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.error};
`;

export const SelectCategory = ({ handleCheckboxChange, error, checked }) => {
  const categories = [
    "Sprzątanie mieszkań i domów",
    "Mycie okien",
    "Wywóz śmieci",
    "Wywóz gruzu",
    "Kompleksowe pranie tapicerek",
    "Mycie samochodów",
    "Koszenie ogrodu",
    "Zakupy do domu",
    "Kupa",
  ];

  let checkedItemsArr = [];
  let isChecked = false;

  if (checked) {
    checkedItemsArr = checked.split(";");
  }

  const checkboxesLeft = categories.map((category, i) => {
    const found = checkedItemsArr.find((item) => item == category);
    if (found) {
      isChecked = true;
    }else{
      isChecked =false;
    }
    if (i % 2 === 0) {
      return (
        <div key={i}>
          <Checkbox
            id={category}
            handleChange={handleCheckboxChange}
            value={category}
            isChecked={isChecked}
          />
          <Label htmlFor={category} style={{ fontWeight: "normal" }}>
            {category}
          </Label>
        </div>
      );
    }
  });

  const checkboxesRight = categories.map((category, i) => {
    const found = checkedItemsArr.find(item => item==category)
    if(found){
      isChecked=true
    }else{
      isChecked=false
    }

    if (i % 2 !== 0) {
      return (
        <div key={i}>
          <Checkbox
            id={category}
            handleChange={handleCheckboxChange}
            value={category}
            isChecked={isChecked}
          />
          <Label htmlFor={category} style={{ fontWeight: "normal" }}>
            {category}
          </Label>
        </div>
      );
    }
  });

  return (
    <>
      <StyledSubTitle error={error}>Wybierz kategorie</StyledSubTitle>
      <CheckboxWrapper>
        <div className="checkbox-column">{checkboxesLeft}</div>
        <div className="checkbox-column">{checkboxesRight}</div>
      </CheckboxWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};
