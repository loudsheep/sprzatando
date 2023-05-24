import { useState } from "react";
import { Navbar } from "../../Components/Navigations/Navbar";
import { Head, Link } from "@inertiajs/react";
import {
  Wrapper,
  StyledTitle,
  StyledSubtitle,
  IconWrapper,
  ReportedSatus,
  ContentWrapper,
  PriceTag,
} from "../page-styles/OfferDetails.styles";
import { Gallery } from "@/Components/Gallery";
import PrimaryButton from "@/Components/Atoms/PrimaryButton";
import { ErrorButton } from "@/Components/Atoms/ErrorButton";
import { router } from "@inertiajs/react";
import Button from "@/Components/Atoms/Button";
import { SuccesReported } from "@/Components/InfoModal";
import arrowLeft from "@/assets/img/arrow-left.svg";
import { notify } from "@/contants/notify";
import { ToastContainer } from "react-toastify";

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
    !currentUserInterestedInOffer
      ? notify("Oferta przyjęta")
      : notify("Zrezygnowano z oferty");
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

  const handleCheckOffer = (e) => {
    e.preventDefault();
    router.post(route("offer.check", offer.id));
  };

  return (
    <>
      <ToastContainer />
      <Head title="Szczegóły oferty" />
      <Navbar />
      <Wrapper>
        <IconWrapper onClick={() => history.back()}>
          <img src={arrowLeft} alt="back icon" />
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
          <ContentWrapper>
            <div>
              <p>
                <strong>Utworzone przez: </strong>
                {offer.creator.name}
              </p>
              <p>
                <strong>Ważne do:</strong> {offer.ends} r.
              </p>
              <p>
                <strong>Miejscowość: </strong>
                {offer.city}
              </p>
              <PriceTag>
                <span>{offer.price} zł</span>
              </PriceTag>
            </div>
          </ContentWrapper>
          <br />
          <ContentWrapper>
            {isOwner ? (
              <>
                <Link href="">
                  <PrimaryButton>Edytuj ofertę</PrimaryButton>
                </Link>
              </>
            ) : (
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
            {!isOwner && isRegularUser && (
              <ErrorButton
                onClick={handleReportOffer}
                text="Reportój :)"
                margin={"15px 0"}
                width={"100%"}
              />
            )}
            {isAdmin && isReported && (
              <ReportedSatus>
                <span>
                  Ta oferta jest zgłoszona
                  <br />
                  przez użytkowników
                </span>
                <Button text="Jest OK" onClick={handleCheckOffer}></Button>
              </ReportedSatus>
            )}
          </ContentWrapper>
        </div>
      </Wrapper>
    </>
  );
}
