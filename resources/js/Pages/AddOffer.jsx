import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormField } from "@/Components/FormField";
import { Label } from "../Components/FormField";
import Checkbox from "@/Components/Atoms/Checkbox";
import PrimaryButton from "../Components/Atoms/PrimaryButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/";
import { TextField } from "@material-ui/core";
import {
  StyledTitle,
  StyledSubTitle,
  FormWrapper,
  TextArea,
  CheckboxWrapper,
  StyledPhotoBox,
  ImageSection,
  UploadedImgWrapper,
  DeleteButton,
} from "./page-styles/AddOffer.styles";
import IconPath from "../assets/img/UploadIcon.png";

export default function AddOffer(props) {
  const { data, setData, post, errors } = useForm({
    title: "",
    location: "",
    description: "",
    categories: [],
    city: "",
    photos: [],
    price: "",
    selectedDate: new Date(),
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const handleCheckboxChange = (e) => {
    const arr = [...data.categories, e.target.value];
    setData("categories", arr);
  };

  const handleTexareaChange = (e) => {
    setData("texarea", e.target.value);
  };

  const handlePhotoUpload = (e) => {
    setData("photos", [...data.photos, e.target.files[0]]);
  };

  const deletePhoto = (p) => {
    const array = data.photos.filter((photo) => p !== photo);
    setData("photos", array);
  };

  const categories = [
    "Sprzątanie mieszkań i domów",
    "Mycie okien",
    "Wywóz śmieci",
    "Wywóz gruzu",
    "Kompleksowe pranie tapicerek",
    "Mycie samochodów",
    "Koszenie ogrodu",
    "Zakupy do domu",
  ];

  const submit = (e) => {
    e.preventDefault();
    // console.log(data)
    post(route("offer.store"));
  };

  const today = new Date();
  const maxDate = new Date(today.setMonth(today.getMonth() + 1));

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="Dodaj ofertę" />
      <StyledTitle>Dodaj swoją ofertę!</StyledTitle>
      <FormWrapper onSubmit={submit} enctype="multipart/form-data">
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data aktywności"
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
                  marginTop: "30px",
                },
                label: { fontSize: "2rem" },
              }}
              renderInput={(props) => <TextField {...props} />}
            />
          </LocalizationProvider>
        </div>

        <StyledSubTitle>Dodaj zdjęcia</StyledSubTitle>

        <ImageSection>
          {data.photos &&
            data.photos.map((photo , i) => (
              <UploadedImgWrapper key={i}>
                <DeleteButton type='button' onClick={() => deletePhoto(photo)}>
                  x
                </DeleteButton>
                <img src={URL.createObjectURL(photo)} alt="uploaded photo" />
              </UploadedImgWrapper>
            ))}
          <UploadedImgWrapper>
            <StyledPhotoBox type="file" htmlFor="input-file">
              <img src={IconPath} />
            </StyledPhotoBox>
          </UploadedImgWrapper>

          <input type="file" id="input-file" onChange={handlePhotoUpload} />
        </ImageSection>

        <Label htmlFor="desc">Opis</Label>
        <TextArea id="desc" onChange={handleTexareaChange} />

        <StyledSubTitle>Wybierz kategorie</StyledSubTitle>
        <CheckboxWrapper>
          {categories.map((category, i) => (
            <div key={i}>
              <Checkbox
                id={category}
                handleChange={handleCheckboxChange}
                value={category}
              />
              <Label htmlFor={category} style={{ fontWeight: "normal" }}>
                {category}
              </Label>
            </div>
          ))}
        </CheckboxWrapper>

        <div className="btn-container">
          <PrimaryButton type="submit" color={"grey"}>
            Anuluj
          </PrimaryButton>
          <PrimaryButton type="submit">Dodaj ofertę!</PrimaryButton>
        </div>
      </FormWrapper>
    </AuthenticatedLayout>
  );
}
