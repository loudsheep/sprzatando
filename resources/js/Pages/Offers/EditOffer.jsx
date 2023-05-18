import styled from "styled-components";
import { Head, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { FormWrapper } from "../page-styles/AddOffer.styles";
import { FormField } from "@/Components/FormField";
import { Textarea } from "@/Components/Atoms/Textarea";
import { SelectCategory } from "@/Components/SelectCategory";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { OfferImages } from "@/Components/AddImages";
import { notify } from "@/contants/notify";
import { ToastContainer } from "react-toastify";

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

const EditOffer = ({ offer, images, auth }) => {
  const initialState = {
    title: offer.title,
    description: offer.description,
    city: offer.city,
    price: offer.price,
    categories: offer.category.split(";"),
    // photos: [offer.main_image].concat(images),
    photos:
      offer.main_image == "/defaults/house.jpg"
        ? []
        : [offer.main_image].concat(images),
  };

  const { data, setData, post, errors } = useForm(initialState);

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

    post(route("offer.update", offer.id), {
      preserveScroll: true,
      onError: () => console.log(errors),
      onSuccess: () => {
        // setData(initialState);
        notify("Zmiany zapisano pomyślnie");
      },
    });
  };

  const handlePhotoUpload = (e) => {
    setData("photos", [...data.photos, e.target.files[0]]);
  };

  const handleDeletePhoto = (p) => {
    const array = data.photos.filter((photo) => p !== photo);
    setData("photos", array);
  };

  return (
    <>
      <ToastContainer />
      <Authenticated auth={auth} prophileImg={auth.user.profile_img}>
        <Head title="Edit" />
        <SectionTitle>Edytuj Ofertę</SectionTitle>
        <FormWrapper
          onSubmit={formSubmitHandler}
          enctype={"multipart/form-data"}
        >
          <InputsWrapper>
            <HeaderInputsWrapper>
              <FormField
                className="input"
                label={"Tytuł ogłoszenia"}
                value={data.title}
                errorMessage={errors.title}
                handleChange={valueHandler}
                id="title"
                type="text"
                name="title"
              />
              <FormField
                className="input"
                label={"Miasto"}
                value={data.city}
                errorMessage={errors.city}
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
                errorMessage={errors.price}
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
            error={errors.description}
            name="description"
          />
          <OfferImages
            photos={data.photos}
            errors={errors}
            handlePhotoUpload={handlePhotoUpload}
            handleDeletePhoto={handleDeletePhoto}
            title="Edytuj zdjęcia"
            action="edit"
          />
          <SelectCategory
            handleCheckboxChange={checkedCheckboxHandler}
            checked={data.categories}
            error={errors.categories}
          />

          <div>
            <PrimaryButton color={"red"} onClick={(e) => e.preventDefault()}>
              <Link href={route("offer.edit", offer.id)}>Anuluj</Link>
            </PrimaryButton>
            <PrimaryButton type="submit">Zapisz Zmiany</PrimaryButton>
          </div>
        </FormWrapper>
      </Authenticated>
    </>
  );
};

export default EditOffer;
