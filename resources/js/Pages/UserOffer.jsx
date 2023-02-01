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
        {console.log(createdOffers[0])}
        {createdOffers.map((offer, i) => (
          <Offer
            image={offer.main_image}
            title={offer.title}
            description={offer.description}
            price={offer.price}
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
