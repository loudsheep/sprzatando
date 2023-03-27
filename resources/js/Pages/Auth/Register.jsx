import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { FormField } from "@/Components/FormField";
import { Head, Link, useForm } from "@inertiajs/react";
import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  align-items: center;
`;

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const onHandleChange = (event) => {
    setData(
      event.target.name,
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />

      <form style={{ width: "300px" }} onSubmit={submit}>
        <FormField
          name="name"
          label="Nazwa"
          forInput="name"
          type="text"
          value={data.name}
          id="name"
          handleChange={onHandleChange}
          errorMessage={errors.name}
        />

        <FormField
          id="email"
          type="text"
          name="email"
          label="Email"
          value={data.email}
          forInput="email"
          handleChange={onHandleChange}
          errorMessage={errors.email}
        />

        <FormField
          name="password"
          label="Hasło"
          forInput="password"
          type="password"
          value={data.password}
          id="password"
          handleChange={onHandleChange}
          errorMessage={errors.password}
        />

        <FormField
          id="password_confirmation"
          type="password"
          name="password_confirmation"
          value={data.password_confirmation}
          label="Potwierdź hasło"
          handleChange={onHandleChange}
          forInput="password_confirmation"
          errorMessage={errors.password_confirmation}
        />

        <ButtonsWrapper>
          <Link
            href={route("login")}
            className="underline text-2xl text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Masz już konto?
          </Link>

          <PrimaryButton processing={processing}>Zarejstruj</PrimaryButton>
        </ButtonsWrapper>
      </form>
    </GuestLayout>
  );
}
