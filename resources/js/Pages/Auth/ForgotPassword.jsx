import GuestLayout from "@/Layouts/GuestLayout";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { FormField } from "@/Components/Atoms/FormField";
import { Head, useForm } from "@inertiajs/react";
import styled from "styled-components";

const FormWrapper = styled.form`
  max-width: 300px;
`;
const Message = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: 1.3rem;
  text-align: center;
`;
export default function ForgotPassword({ status }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Forgot Password" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      <FormWrapper onSubmit={submit}>
        <Message>
          Forgot your password? <br /> No problem. Just let us know your email
          address and we will email you a password reset link that will allow
          you to choose a new one.
        </Message>

        <FormField
          label={"Email"}
          id="password"
          type="email"
          name="email"
          value={data.email}
          errorMessage={errors.email}
          handleChange={onHandleChange}
        />

        <div className="flex items-center justify-center mt-10">
          <PrimaryButton processing={processing}>
            Email Password Reset Link
          </PrimaryButton>
        </div>
      </FormWrapper>
    </GuestLayout>
  );
}
