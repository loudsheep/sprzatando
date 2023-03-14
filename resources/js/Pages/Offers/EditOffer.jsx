import { useEffect } from "react";
import styled from "styled-components";
import { Head, useForm } from "@inertiajs/react";
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
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { OfferImages } from "@/Components/AddImages";

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
  const initialState = {
    title: offer.title,
    description: offer.description,
    city: offer.city,
    price: offer.price,
    categories: offer.category.split(";"),
    img: [offer.main_image],
  };

  const { data, setData, patch, errors } = useForm(initialState);

  const valueHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const checkedCheckboxHandler = (e) => {
    const categoriesArr = [...data.categories];
    const index = categoriesArr.indexOf(e.target.value);
    if (e.target.checked) {
      categoriesArr.push(e.target.value);
    } else {
      categoriesArr.splice(index, 1);
    }
    setData({
      ...data,
      categories: categoriesArr,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    patch(route("offer.update", offer.id), {
      preserveScroll: true,
      onError: () => console.log(errors),
      onSuccess: () => {
        console.log("SUCCESS");
      },
    });
  };

  const handlePhotoUpload = (e) => {
    const photo = URL.createObjectURL(e.target.files[0]);
    setData("img", [...data.img, photo]);
  };

  const handleDeletePhoto = (p) => {
    const array = data.img.filter((photo) => p !== photo);
    setData("img", array);
  };

  useEffect(() => {
    console.log(data.img);
    console.log(offer.main_image);
  }, [data.img, offer.main_image]);

  return (
    <>
      <Authenticated auth={auth} prophileImg={auth.user.profile_img}>
        <Head title="Edit" />
        <SectionTitle>Edytuj Ofertę</SectionTitle>
        <FormWrapper onSubmit={formSubmitHandler}>
          <InputsWrapper>
            <HeaderInputsWrapper>
              <FormField
                className="input"
                label={"Tytuł ogłoszenia"}
                value={data.title}
                handleChange={valueHandler}
                id="title"
                type="text"
                name="title"
              />
              <FormField
                className="input"
                label={"Miasto"}
                value={data.city}
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
                value={data.price}
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
            value={data.description}
            name="description"
          />
          <OfferImages
            photos={data.img}
            errors={errors}
            handlePhotoUpload={handlePhotoUpload}
            handleDeletePhoto={handleDeletePhoto}
            title="Edytuj zdjęcia"
            action="edit"
          />
          <SelectCategory
            handleCheckboxChange={checkedCheckboxHandler}
            checked={data.categories}
          />

          <div>
            <PrimaryButton color={"red"} onClick={() => window.history.back()}>
              Anuluj
            </PrimaryButton>
            <PrimaryButton type="submit">Zapisz Zmiany</PrimaryButton>
          </div>
        </FormWrapper>
      </Authenticated>
    </>
  );
};

export default EditOffer;
