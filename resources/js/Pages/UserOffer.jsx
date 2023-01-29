import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Offer } from "../Components/Offer";
import styled from "styled-components";
// import { FormField } from "@/Components/Atoms/FormField";
// import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function AddOffer(props) {
  const offers = [
    {
      title: "Sprzątanie mieszkań",
      description:
        "Oferujemy profesjonalne sprzątanie mieszkań z wykorzystaniem ekologicznych środków czystości.",
      hourlyRate: 40,
      category: "Sprzątanie mieszkań",
      city: "Warszawa",
      photo: "https://example.com/apartment-cleaning.jpg",
    },
    {
      title: "Sprzątanie biur",
      description:
        "Świadczymy usługi sprzątania biur na terenie Warszawy, dbając o czystość i porządek.",
      hourlyRate: 35,
      category: "Sprzątanie biur",
      city: "Warszawa",
      photo: "https://example.com/office-cleaning.jpg",
    },
    {
      title: "Mycie okien",
      description:
        "Specjalizujemy się w myciu okien dla mieszkań i biur na terenie miasta Warszawa.",
      hourlyRate: 25,
      category: "Mycie okien",
      city: "Warszawa",
      photo: "https://example.com/window-cleaning.jpg",
    },
  ];
  return (
    <AuthenticatedLayout auth={props.auth} errors={props.errors}>
      <Wrapper>
        <h1>Twoje oferty: </h1>
        {props.createdOffers.map((offer, i) => (
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
