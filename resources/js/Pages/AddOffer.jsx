import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormField } from "@/Components/FormField";
import styled from "styled-components";
import { Label } from "../Components/FormField";
import Checkbox from "@/Components/Atoms/Checkbox";
import PrimaryButton from "../Components/Atoms/PrimaryButton";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/";
import { TextField } from "@material-ui/core";

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-weight: bold;
`;
const StyledSubTitle = styled.h2`
  font-size: 1.9rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-weight: bold;
  margin-top: 5rem;
`;

const FormWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 60rem;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  .inputs-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 20px 0;
  }
  .btn-container {
    display: flex;
    width: 100%;
    margin: 20px;
    justify-content: space-between;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 120px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 15px;
  font-size: 1.5rem;
  resize: none;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 5px 0 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  div {
    margin: 0 10px;
  }
`;

export default function AddOffer(props) {
  const { data, setData, post, errors } = useForm({
    title: "",
    location: "",
    description: "",
    categories: [],
    city: "",
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

    // post(route("add.offer"));
  };

  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="Dodaj ofertę" />
      <StyledTitle>Dodaj swoją ofertę!</StyledTitle>
      <FormWrapper onSubmit={submit}>
        <div className="inputs-container">
          <FormField
            label={"Tytuł ogłoszenia"}
            id="title"
            type="text"
            name="title"
            value={data.title}
            errorMessage={errors.title}
            handleChange={onHandleChange}
          />
          <FormField
            label={"Miasto"}
            id="city"
            type="text"
            name="city"
            value={data.city}
            errorMessage={errors.title}
            handleChange={onHandleChange}
          />
        </div>
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

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Data aktywności"
            name="date"
            value={data.selectedDate}
            onChange={(date) => {
              setData("selectedDate", date.$d);
            }}
            renderInput={(props) => <TextField {...props} />}
          />
        </LocalizationProvider>

        <div className="btn-container">
          <PrimaryButton type="submit" onClick={console.log(data)}>
            Anuluj
          </PrimaryButton>
          <PrimaryButton type="submit" onClick={console.log(data)}>
            Dodaj ofertę!
          </PrimaryButton>
        </div>
      </FormWrapper>
    </AuthenticatedLayout>
  );
}
