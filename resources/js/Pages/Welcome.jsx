import { Head } from "@inertiajs/react";
import styled from "styled-components";
import { Navbar } from "@/Components/Navbar";

export default function Welcome({ auth }) {
  return (
    <>
      <Head title="Welcome" />
      <Navbar auth={auth}/>
      <h1>Guest view</h1>
    </>
  );
}
