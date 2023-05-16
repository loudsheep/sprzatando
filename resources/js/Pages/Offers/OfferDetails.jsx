import { useState } from "react";
import { Navbar } from "../../Components/Navigations/Navbar";
import { Head } from "@inertiajs/react";
import {
  Wrapper,
  StyledTitle,
  StyledSubtitle,
  IconWrapper,
  ReportedSatus,
  ButtonsWrapper,
} from "../page-styles/OfferDetails.styles";
import { Gallery } from "@/Components/Gallery";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { ErrorButton } from "@/Components/Atoms/ErrorButton";
import { router } from "@inertiajs/react";
import Button from "@/Components/Atoms/Button";
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
  isReported,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleInterestedButtons = (e) => {
    e.preventDefault();

    router.post(route("offer.follow", offer.id));
  };

  const handleBanOffer = (e) => {
    e.preventDefault();

    router.post(route("offer.ban", offer.id));
  };

  const handleReportOffer = (e) => {
    e.preventDefault();
    router.post(
      route("offer.report", offer.id),
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

          <ButtonsWrapper>
            {!isOwner && (
              <>
                {!currentUserInterestedInOffer ? (
                  <PrimaryButton onClick={handleInterestedButtons}>
                    Zgłoś się do oferty
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    color={"grey"}
                    onClick={handleInterestedButtons}
                  >
                    Rezygnuj
                  </PrimaryButton>
                )}
              </>
            )}
            <br />

            {isAdmin && (
              <>
                {isBanned ? (
                  <Button
                    style={{ padding: ".8rem 2rem" }}
                    onClick={handleBanOffer}
                    text="ODBANUJ"
                  />
                ) : (
                  <Button
                    style={{ padding: ".8rem 2rem" }}
                    onClick={handleBanOffer}
                    text="BANUJ"
                    color={"error"}
                  />
                )}
              </>
            )}
          </ButtonsWrapper>

          {isAdmin && isReported && (
            <ReportedSatus>
              <span>
                Ta oferta jest zgłoszona
                <br />
                przez użytkowników
              </span>
              <Button text="Jest OK"></Button>
            </ReportedSatus>
          )}

          {!isOwner && isRegularUser && (
            <ErrorButton onClick={handleReportOffer} text="Reportój :)" />
          )}
        </div>
      </Wrapper>
    </>
  );
}
