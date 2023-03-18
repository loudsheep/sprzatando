import { useState } from "react";
import { Navbar } from "../../Components/Navigations/Navbar";
import { Head, Link } from "@inertiajs/react";
import {
  Wrapper,
  StyledTitle,
  StyledSubtitle,
  IconWrapper,
} from "../page-styles/OfferDetails.styles";
import { Gallery } from "@/Components/Gallery";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { router } from "@inertiajs/react";
import { ErrorButton } from "@/Components/Atoms/ErrorButton";
import { SuccesReported } from "@/Components/InfoModal";
import backIconPath from "@/assets/img/backIcon.png";

export default function OfferDetails({
  images,
  offer,
  isOwner,
  isAdmin,
  isRegularUser,
  currentUserInterestedInOffer,
  isBanned,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleInterestedButtons = (e) => {
    e.preventDefault();

    router.post("/follow-offer/" + offer.id);
  };

  const handleBanOffer = (e) => {
    e.preventDefault();

    router.post("/ban-offer/" + offer.id);
  };

  const handleReportOffer = (e) => {
    e.preventDefault();
    router.post(
      "/report-offer/" + offer.id,
      {},
      {
        onSuccess: () => {
          setIsVisible(true);
        },
      }
    );
  };

  return (
    <>
      <Head title="Szczegóły oferty" />
      <Navbar />
      <Wrapper>
        <IconWrapper onClick={() => history.back()}>
          <img src={backIconPath} alt="back icon" />
        </IconWrapper>
        <SuccesReported
          isVisible={isVisible}
          onInfoClose={() => setIsVisible(false)}
        />
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

          {!isOwner && (
            <>
              {!currentUserInterestedInOffer ? (
                <PrimaryButton onClick={handleInterestedButtons}>
                  Zgłoś się do oferty
                </PrimaryButton>
              ) : (
                <PrimaryButton color={"grey"} onClick={handleInterestedButtons}>
                  Rezygnuj
                </PrimaryButton>
              )}
            </>
          )}
          <br />

          {isAdmin && (
            <>
              {isBanned ? (
                <PrimaryButton color={"green"} onClick={handleBanOffer}>
                  ODBANUJ OFERTĘ
                </PrimaryButton>
              ) : (
                <ErrorButton onClick={handleBanOffer} text="BANUJ" />
              )}
            </>
          )}

          {!isOwner && isRegularUser && (
            <ErrorButton onClick={handleReportOffer} text="Reportój :)" />
          )}
        </div>
      </Wrapper>
    </>
  );
}
