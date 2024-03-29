import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { useState } from "react";
import { FormField } from "@/Components/FormField";
import PrimaryButton from "../../Components/Atoms/PrimaryButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/";
import { TextField } from "@material-ui/core";
import { SubmitModal } from "@/Components/SubmitModal";
import { OfferImages } from "@/Components/AddImages";
import {
  StyledTitle,
  FormWrapper,
  ErrorMessage,
  ErrorWrapper,
} from "../page-styles/AddOffer.styles";
import { Textarea } from "../../Components/Atoms/Textarea";
import { SelectCategory } from "@/Components/SelectCategory";

export default function AddOffer(props) {
  const initialState = {
    title: "",
    location: "",
    description: "",
    categories: [],
    city: "",
    photos: [],
    price: "",
    selectedDate: new Date(),
  };
  const { data, setData, post, errors } = useForm(initialState);
  const [isOpen, setIsOpen] = useState(false);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const handleCheckboxChange = (e) => {
    const arr = [...data.categories];
    const index = arr.indexOf(e.target.value);
    if (e.target.checked) {
      if (index === -1) {
        arr.push(e.target.value);
      }
    } else {
      if (index !== -1) {
        arr.splice(index, 1);
      }
    }
    setData({ ...data, categories: arr });
  };

  const handleTextareaChange = (e) => {
    setData("description", e.target.value);
  };

  const handlePhotoUpload = (e) => {
    setData("photos", [...data.photos, e.target.files[0]]);
  };

  const handleDeletePhoto = (p) => {
    const array = data.photos.filter((photo) => p !== photo);
    setData("photos", array);
  };

  const handleCheckboxReset = () => {
    const elements = document.querySelectorAll("input[type=checkbox]");
    elements.forEach((el) => (el.checked = false));
    setData(initialState);
  };

  const submit = (e) => {
    e.preventDefault();
    post(route("offer.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData(initialState);
        handleCheckboxReset();
        setIsOpen(true);
      },
    });
  };

  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));

  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      prophileImg={props.auth.user.profile_img}
    >
      <SubmitModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <Head title="Dodaj ofertę">
        <meta charset="UTF-8" />
      </Head>
      <StyledTitle>Dodaj swoją ofertę!</StyledTitle>
      <FormWrapper onSubmit={submit}>
        <div className="inputs-container">
          <FormField
            className="input"
            label={"Tytuł ogłoszenia"}
            id="title"
            type="text"
            name="title"
            value={data.title}
            errorMessage={errors.title}
            handleChange={onHandleChange}
          />
          <FormField
            className="input"
            label={"Miasto"}
            id="city"
            type="text"
            name="city"
            value={data.city}
            errorMessage={errors.city}
            handleChange={onHandleChange}
          />
        </div>
        <div className="inputs-container">
          <FormField
            className="input"
            label={"Cena"}
            id="price"
            type="number"
            name="price"
            value={data.price}
            errorMessage={errors.price}
            handleChange={onHandleChange}
          />
          <ErrorWrapper>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date"
                value={data.selectedDate}
                onChange={(date) => {
                  setData("selectedDate", date.$d);
                }}
                maxDate={maxDate}
                minDate={new Date()}
                InputProps={{
                  style: {
                    fontSize: "1.8rem",
                    width: "200px",
                    margin: "30px 15px 10px",
                    borderBottom: errors.selectedDate && "1px solid #ff8d8d",
                  },
                }}
                renderInput={(props) => <TextField {...props} />}
              />
            </LocalizationProvider>
            {errors.selectedDate && (
              <ErrorMessage>{errors.selectedDate}</ErrorMessage>
            )}
          </ErrorWrapper>
        </div>

        <OfferImages
          photos={data.photos}
          errors={errors}
          handlePhotoUpload={handlePhotoUpload}
          handleDeletePhoto={handleDeletePhoto}
          title="Dodaj zdjęcia"
          action="add"
        />

        <Textarea
          id="desc"
          handleChange={handleTextareaChange}
          error={errors.description}
          value={data.description}
        />

        <SelectCategory
          handleCheckboxChange={handleCheckboxChange}
          value={data.category}
          error={errors.categories}
        />

        <div className="btn-container">
          <PrimaryButton color={"grey"} onClick={() => history.back()}>
            Anuluj
          </PrimaryButton>

          <PrimaryButton type="submit">Dodaj</PrimaryButton>
        </div>
      </FormWrapper>
    </AuthenticatedLayout>
  );
}
