import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

export default function AddOffer(props) {
  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <h1>Hello!</h1>
    </AuthenticatedLayout>
  );
}
