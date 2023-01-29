import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Offer } from "../Components/Offer";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AddOffer({ auth, errors, createdOffers }) {
  return (
    <AuthenticatedLayout auth={auth} errors={errors}>
      <Head title="User Offer" />
      <Wrapper>
        <h1>Twoje oferty: </h1>
        {createdOffers.map((offer, i) => (
          <Offer
            title={offer.category}
            description={offer.description}
            hourlyRate={offer.hourly_rate}
            category={offer.category}
            city={offer.city}
            isOwner={true}
            key={i}
          />
        ))}
      </Wrapper>
    </AuthenticatedLayout>
  );
}
