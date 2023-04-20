import styled from "styled-components";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import EditProfile from "../EditProfileSection";

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5rem;
  }
`;

export default function UpdateProfileInformation({
  user,
  mustVerifyEmail,
  status,
  className,
}) {
  const form = useForm({ name: user.name, email: user.email });

  const submit = (e) => {
    e.preventDefault();
    console.log(form.data);

    form.patch(route("profile.update"));
  };

  return (
    <EditProfile
      form={form}
      formFields={[
        { id: "name", label: "Nazwa użytkownika", type: "text", required: true, ref: false },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
          ref: false,
        },
      ]}
      headerTexts={{
        title: "Informacje o profilu",
        desc: "Zmień swoją nazwę użytkownika lub swój adres email.",
      }}
      submit={submit}
    >
      {(mustVerifyEmail && user.email_verified_at === null) && (
        <div>
          <p className="text-lg mt-2 text-gray-800">
            Twój email jest nie zweryfikowany.
            <Link
              href={route("verification.send")}
              method="post"
              as="button"
              className="underline text-lg text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Kliknij aby wysłać ponownie link weryfikacjyny.
            </Link>
          </p>

          {status === "verification-link-sent" && (
            <div className="mt-2 font-medium text-xl text-green-600">
              Nowy link weryfikacyjny został wysłany na podany adres email.
            </div>
          )}

          {status === "error" && (
            <div className="mt-2 font-medium text-xl text-red-600">
              Wystąpił błąd podczas wysyłania wiadomości email. Spróbuj ponownie później.
            </div>
          )}
        </div>
      )}

      <BottomBox>
        <PrimaryButton
          processing={form.processing}
          styling={{ margin: "15px 15px 15px 0" }}
        >
          Zapisz
        </PrimaryButton>

        <Transition
          show={form.recentlySuccessful}
          enterFrom="opacity-0"
          leaveTo="opacity-0"
          className="transition ease-in-out"
        >
          <p className="text-xxl text-gray-600">Zapisano.</p>
        </Transition>
      </BottomBox>
    </EditProfile>
  );
}
