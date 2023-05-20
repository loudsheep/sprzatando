import { useRef, useState } from "react";
import DangerButton from "@/Components/Atoms/DangerButton";
import InputLabel from "@/Components/InputLabel";
import DialogModal from "@/Components/DialogModal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { FormField } from "@/Components/FormField";
import EditProfile from "../EditProfileSection";

export default function DeleteUserForm({ className }) {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();

  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors,
  } = useForm({
    password: "",
  });

  const confirmUserDeletion = () => {
    setConfirmingUserDeletion(true);
  };

  const deleteUser = (e) => {
    e.preventDefault();

    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => passwordInput.current.focus(),
      onFinish: () => reset(),
    });
  };

  const closeModal = () => {
    setConfirmingUserDeletion(false);

    reset();
  };

  return (
    <EditProfile form={false} formFields={false} headerTexts={{
      title: "Usuń konto",
      desc: "Po usunięciu Twojego konta wszystkie jego zasoby i dane zostaną trwale usunięte. Przed usunięciem konta, pobierz wszelkie dane lub informacje, które chcesz zachować.",
    }}>
      {/* <section className={`space-y-6 ${className}`}>
        <header>
          <h2 className="text-lg font-medium text-gray-900">Delete Account</h2>

          <p className="mt-1 text-sm text-gray-600">
            Once your account is deleted, all of its resources and data will be
            permanently deleted. Before deleting your account, please download
            any data or information that you wish to retain.
          </p>
        </header> */}

      <DangerButton onClick={confirmUserDeletion}>
        Usuń konto
      </DangerButton>

      {
        // <-------- ToDo -------->
      }

      <DialogModal show={confirmingUserDeletion} onClose={closeModal}>
        <form onSubmit={deleteUser} className="p-6">
          <h2 className="text-xxl font-medium text-gray-900">
            Czy na pewno chcesz usunąć swoje konto?
          </h2>

          <p className="mt-1 text-lg text-gray-600">
            Po usunięciu konta wszystkie zasoby i dane zostaną trwale usunięte.
            Wprowadź swoje hasło, aby potwierdzić, że chcesz trwale usunąć swoje konto.
          </p>

          <div className="mt-6">
            <InputLabel for="password" value="Password" className="sr-only" />

            <FormField
              id="password"
              type="password"
              name="password"
              ref={passwordInput}
              value={data.password}
              errorMessage={errors.password}
              handleChange={(e) => setData("password", e.target.value)}
              className="mt-1 block w-3/4"
              placeholder="Password"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <SecondaryButton onClick={closeModal}>Anuluj</SecondaryButton>

            <DangerButton className="ml-3" processing={processing}>
              Usuń konto
            </DangerButton>
          </div>
        </form>
      </DialogModal>
      {/* </section> */}
    </EditProfile>
  );
}
