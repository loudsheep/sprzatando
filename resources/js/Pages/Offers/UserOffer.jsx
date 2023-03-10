import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Offer } from "../../Components/Offer";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { TypeBox } from "../../Components/Atoms/OfferTypeBox";
import { useState } from "react";

// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
`;

const Header = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
`;

export default function UserOffer({
  auth,
  errors,
  activeOffers,
  bannedOffers,
  doneOffers,
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
        <Header>Twoje oferty: </Header>
        <div style={{ display: "flex" }}>
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
        </div>

        {selectedType === "active" &&
          activeOffers.map((offer, i) => (
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
              key={i}
            />
          ))}
      </Wrapper>
    </AuthenticatedLayout>
  );
}
