import { useRef } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormField } from "@/Components/FormField";
import EditProfile from "../EditProfileSection";

export default function UpdatePasswordForm({ className }) {
  const passwordInput = useRef();
  const currentPasswordInput = useRef();

  const form = useForm({
    current_password: "",
    password: "",
    password_confirmation: "",
  });

  const updatePassword = (e) => {
    e.preventDefault();

    form.put(route("password.update"), {
      preserveScroll: true,
      onSuccess: () => form.reset(),
      onError: () => {
        if (form.errors.password) {
          form.reset("password", "password_confirmation");
        }

        if (form.errors.current_password) {
          form.reset("current_password");
        }
      },
    });
  };

  return (
    <EditProfile
      form={form}
      formFields={[
        {
          id: "current_password",
          label: "Current Password",
          required: true,
          ref: passwordInput,
          type: "password",
        },
        {
          id: "password",
          label: "New Password",
          required: true,
          ref: currentPasswordInput,
          type: "password",
        },
        {
          id: "password_confirmation",
          label: "Confirm Password",
          required: true,
          ref: false,
          type: "password",
        },
      ]}
      headerTexts={{
        title: "Update Password",
        desc: "Ensure your account is using a long, random password to stay secure.",
      }}
      submit={updatePassword}
    >
      <div className="flex items-center gap-4">
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
          <p className="text-xxl text-gray-600">Zapisano.</p>
        </Transition>
      </div>
    </EditProfile>
  );
}
