import React from "react";
import { Navbar } from "../../Components/Navigations/Navbar";
import { Head } from "@inertiajs/react";
import {
  Wrapper,
  StyledTitle,
  StyledSubtitle,
} from "../page-styles/OfferDetails.styles";
import { Gallery } from "@/Components/Gallery";
import styled from "styled-components";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { router } from '@inertiajs/react'

export default function OfferDetails({ images, offer, isLoggedIn, isOwner, isAdmin, isRegularUser, currentUserInterestedInOffer }) {

  const handleInterestedButtons = (e) => {
    e.preventDefault();

    router.post("/follow-offer/" + offer.id);
  };

  return (
    <>
      <Head title="Szczegóły oferty" />
      <Navbar />
      <Wrapper>
        <div className="section_column-first">
          <StyledTitle>{offer.title}</StyledTitle>
          <Gallery images={images} mainImage={offer.main_image} />
          <div style={{ overflowWrap: "break-word" }}>
            <StyledSubtitle>Opis</StyledSubtitle>
            <p>{offer.description}</p>
          </div>
        </div>
        <div className="section_column-second">
          <p>{offer.creator.name}</p>
          <p>
            <strong>Ważne do:</strong> {offer.ends} r.
          </p>
          <p>{offer.city}</p>

          { !isOwner && (
            <>
              {!currentUserInterestedInOffer && (
                <PrimaryButton onClick={handleInterestedButtons}>Zgłoś się do oferty</PrimaryButton>
              )}

              {currentUserInterestedInOffer && (
                <PrimaryButton color={"grey"} onClick={handleInterestedButtons}>Odzgłoś się</PrimaryButton>
              )}
            </>
          )}
        </div>
      </Wrapper>
    </>
  );
}
