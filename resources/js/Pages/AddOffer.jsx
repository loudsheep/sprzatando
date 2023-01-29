import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

export default function AddOffer(props) {
  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Head title="Dodaj ofertę" />
      <h1>Hello world!</h1>
    </AuthenticatedLayout>
  );
}
