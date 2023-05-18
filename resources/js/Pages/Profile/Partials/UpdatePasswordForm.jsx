import { useRef, Fragment } from "react";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormField } from "@/Components/FormField";
import EditProfile from "../EditProfileSection";
import { notify } from "@/contants/notify";
import { ToastContainer } from "react-toastify";

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
      onSuccess: () => {
        form.reset();
        notify("Hasło zaktulizowane pomyślnie.");
      },
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
    <Fragment>
      <ToastContainer />
      <EditProfile
        form={form}
        formFields={[
          {
            id: "current_password",
            label: "Aktualne hasło",
            required: true,
            ref: passwordInput,
            type: "password",
          },
          {
            id: "password",
            label: "Nowe hasło",
            required: true,
            ref: currentPasswordInput,
            type: "password",
          },
          {
            id: "password_confirmation",
            label: "Potwierdź nowe hasło",
            required: true,
            ref: false,
            type: "password",
          },
        ]}
        headerTexts={{
          title: "Zmień Swoje Hasło",
          desc: "Upewnij się, że Twoje konto używa długiego, losowego hasła, aby pozostać bezpiecznym.",
        }}
        submit={updatePassword}
      >
        <div className="flex items-center gap-4">
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
        </div>
      </EditProfile>
    </Fragment>
  );
}
