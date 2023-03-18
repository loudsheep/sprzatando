import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Offer } from "../../Components/Offer/Offer";
import { MiniOffer } from "@/Components/Offer/MiniOffer";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { TypeBox } from "../../Components/Atoms/OfferTypeBox";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
`;

const Header = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
`;

const TypeBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export default function UserOffer({
  auth,
  errors,
  interestedInOffers,
  doneOffers,
}) {
  const [selectedType, setSelectedType] = useState("interested");

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  return (
    <AuthenticatedLayout
      auth={auth}
      errors={errors}
      prophileImg={auth.user.profile_img}
    >
      <Head title="Twoje oferty" />
      <Wrapper>
        <Header>Oferty: </Header>
        <TypeBoxWrapper>
          <TypeBox
            id="interested"
            value="interested"
            name="type"
            title="Zainteresowany"
            onChange={handleTypeChange}
            checked={selectedType === "interested"}
          />
          <TypeBox
            id="done"
            value="done"
            title="Wykonane"
            name="type"
            onChange={handleTypeChange}
            checked={selectedType === "done"}
          />
        </TypeBoxWrapper>

        {selectedType === "interested" &&
          interestedInOffers.map((offer, i) => (
            <Offer
              id={offer.id}
              image={offer.main_image}
              title={offer.title}
              description={offer.description}
              price={offer.price}
              category={offer.category}
              city={offer.city}
              owner={offer.creator?.name ?? "DELETED USER"}
              createdAt={offer.created_at}
              isInterested={true}
              key={i}
            />
          ))}

        {selectedType === "done" &&
          doneOffers.map((offer, i) => (
            <Offer
              id={offer.id}
              image={offer.main_image}
              title={offer.title}
              description={offer.description}
              price={offer.price}
              category={offer.category}
              city={offer.city}
              owner={offer.creator.name}
              createdAt={offer.created_at}
              key={i}
            />
          ))}
      </Wrapper>
    </AuthenticatedLayout>
  );
}
