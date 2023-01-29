import { Head } from "@inertiajs/react";
import styled from "styled-components";
import { Navbar } from "@/Components/Navbar";
import FilterSection from "@/Components/FilterSection";

export default function Welcome({ auth, cities, offers }) {
  return (
    <>
      <Head title="Welcome" />
      <header>
        <Navbar auth={auth} />
        <FilterSection />
      </header>

      {offers.map((offer) => (
        <div>City - {offer.city}</div>
      ))}
    </>
  );
}
