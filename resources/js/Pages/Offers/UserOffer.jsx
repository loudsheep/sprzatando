import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Offer } from "../../Components/Offer";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`;

export default function AddOffer({ auth, errors, createdOffers }) {
  return (
    <AuthenticatedLayout auth={auth} errors={errors} >
      <Head title="Twoje oferty" />
      <Wrapper>
        <h1>Twoje oferty: </h1>
        {createdOffers.map((offer, i) => (
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
