import { useState } from "react";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navigations/Navbar";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
  StyledTitle,
  StyledSubTitle,
  FormWrapper,
  StyledPhotoBox,
  ImageSection,
  UploadedImgWrapper,
  DeleteButton,
  ErrorMessage,
  ErrorWrapper,
} from "../page-styles/AddOffer.styles";
import { FormField } from "@/Components/FormField";
import { Textarea } from "@/Components/Atoms/Textarea";
import { SelectCategory } from "@/Components/SelectCategory";

const SectionTitle = styled.h1`
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: bold;
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const HeaderInputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 455px) {
    flex-direction: column;
  }
`;

const DownInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;

  @media (max-width: 455px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

const EditOffer = ({ offer, auth }) => {
  const [change, setChange] = useState({
    title: offer.title,
    description: offer.description,
    city: offer.city,
    price: offer.price,
  });

  const valueHandler = (e) => {
    setChange({
      ...change,
      [e.target.name]: e.target.value,
    });
  };

  const checkedCheckboxHandler = (e) =>{
    console.log(e.target)
  }

  return (
    <>
      <Authenticated auth={auth}>
        <Head title="Edit" />
        <SectionTitle>Edytuj Ofertę</SectionTitle>
        <FormWrapper>
          <InputsWrapper>
            <HeaderInputsWrapper>
              <FormField
                className="input"
                label={"Tytuł ogłoszenia"}
                value={change.title}
                handleChange={valueHandler}
                id="title"
                type="text"
                name="title"
              />
              <FormField
                className="input"
                label={"Miasto"}
                value={change.city}
                handleChange={valueHandler}
                id="city"
                type="text"
                name="city"
              />
            </HeaderInputsWrapper>
            <DownInputWrapper>
              <FormField
                className="input"
                label={"Cena"}
                value={change.price}
                handleChange={valueHandler}
                id="price"
                type="number"
                name="price"
              />
            </DownInputWrapper>
          </InputsWrapper>
          <Textarea
            id="desc"
            handleChange={valueHandler}
            value={change.description}
            name="description"
          />
          <SelectCategory handleCheckboxChange={checkedCheckboxHandler} checked={offer.category}/>
        </FormWrapper>
      </Authenticated>
    </>
  );
};

export default EditOffer;
