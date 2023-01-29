import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import { ButtonsWrapper } from "./Register";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { Head, Link, useForm } from "@inertiajs/react";
import { FormField } from "@/Components/FormField";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      reset("password");
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

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <form style={{ width: "300px" }} onSubmit={submit}>
        <FormField
          id="email"
          type="text"
          name="email"
          label="Email"
          value={data.email}
          forInput="email"
          autoComplete={"email"}
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
          autoComplete={"current-password"}
          handleChange={onHandleChange}
          errorMessage={errors.password}
        />

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              value={data.remember}
              handleChange={onHandleChange}
            />
            <span style={{color: 'grey', fontSize: '13px', marginLeft: '6px'}}>Pamiętaj mnie</span>
          </label>
        </div>

        <ButtonsWrapper>
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline text-base text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Niepamiętam hasła
            </Link>
          )}

          <PrimaryButton processing={processing}>Log in</PrimaryButton>
        </ButtonsWrapper>
      </form>
    </GuestLayout>
  );
}
