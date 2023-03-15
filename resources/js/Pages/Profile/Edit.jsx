import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import styled from "styled-components";

const EditSectionWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 1rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export default function Edit({ auth, user, mustVerifyEmail, status }) {
  return (
    <AuthenticatedLayout
      prophileImg={auth.user.profile_img}
      auth={auth}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />
      <EditSectionWrapper>
        <UpdateProfileInformationForm
          user={user}
          mustVerifyEmail={mustVerifyEmail}
          status={status}
          className="max-w-xl"
        />

        <UpdatePasswordForm className="max-w-xl" />

        <DeleteUserForm className="max-w-xl" />
      </EditSectionWrapper>
    </AuthenticatedLayout>
  );
}
