import styled from "styled-components";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import EditProfile from "../EditProfileSection";

const BottomBox = styled.div`
  display: flex;
  justify-content: space-between;
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
        { id: "name", label: "Name", type: "text", required: true, ref: false },
        {
          id: "email",
          label: "Email",
          type: "email",
          required: true,
          ref: false,
        },
      ]}
      headerTexts={{
        title: "Profile Information",
        desc: "Update your account's profile information and email address.",
      }}
      submit={submit}
    >
      {mustVerifyEmail && user.email_verified_at === null && (
        <div>
          <p className="text-sm mt-2 text-gray-800">
            Your email address is unverified.
            <Link
              href={route("verification.send")}
              method="post"
              as="button"
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Click here to re-send the verification email.
            </Link>
          </p>

          {status === "verification-link-sent" && (
            <div className="mt-2 font-medium text-sm text-green-600">
              A new verification link has been sent to your email address.
            </div>
          )}
        </div>
      )}

      <BottomBox>
        <PrimaryButton
          processing={form.processing}
          styling={{ margin: "15px 15px 15px 0" }}
        >
          Save
        </PrimaryButton>

        <Transition
          show={form.recentlySuccessful}
          enterFrom="opacity-0"
          leaveTo="opacity-0"
          className="transition ease-in-out"
        >
          <p className="text-sm text-gray-600">Saved.</p>
        </Transition>
      </BottomBox>
    </EditProfile>
  );
}
