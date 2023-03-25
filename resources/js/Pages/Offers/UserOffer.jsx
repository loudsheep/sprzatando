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

const StyledTitle = styled.h1`
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
  activeOffers,
  bannedOffers,
  doneOffers,
  expiredOffers
}) {
  const [selectedType, setSelectedType] = useState("active");

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
        <StyledTitle>Twoje oferty: </StyledTitle>
        <TypeBoxWrapper>
          <TypeBox
            id="active"
            value="active"
            name="type"
            title="Aktywne"
            onChange={handleTypeChange}
            checked={selectedType === "active"}
          />
          <TypeBox
            id="banned"
            value="banned"
            title="Zbanowane"
            name="type"
            onChange={handleTypeChange}
            checked={selectedType === "banned"}
          />
          <TypeBox
            id="done"
            value="done"
            title="Ukończone"
            name="type"
            onChange={handleTypeChange}
            checked={selectedType === "done"}
          />
          <TypeBox
            id="expired"
            value="expired"
            title="Wygasłe"
            name="type"
            onChange={handleTypeChange}
            checked={selectedType === "expired"}
          />
        </TypeBoxWrapper>

        {selectedType === "active" &&
          activeOffers.map((offer, i) => (
            <MiniOffer
              id={offer.id}
              image={offer.main_image}
              title={offer.title}
              description={offer.description}
              price={offer.price}
              category={offer.category}
              city={offer.city}
              owner={offer.creator.name}
              ends={offer.ends}
              interested={offer.users_interested_count}
              createdAt={offer.created_at}
              isOwner={true}
              key={i}
            />
          ))}

        {selectedType === "banned" &&
          bannedOffers.map((offer, i) => (
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
              isOwner={true}
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
              isOwner={true}
              buttons={{ 'Oceń': 'TODO' }}
              key={i}
            />
          ))}
        {selectedType === "expired" &&
          expiredOffers.map((offer, i) => (
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
              isOwner={true}
              isExpired={true}
              buttons={{ 'Edytuj': route('offer.edit', offer.id), 'Aktywuj': route('offer.extend', offer.id) }}
              key={i}
            />
          ))}
      </Wrapper>
    </AuthenticatedLayout>
  );
}
