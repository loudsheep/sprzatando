import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import FilterSection from "@/Components/FilterSection";
import { Offer } from "@/Components/Offer";

const OfferWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Welcome({ auth, cities, offers }) {
  return (
    <>
      <Head title="Welcome" />
      <header>
        <Navbar auth={auth} />
        <FilterSection />
      </header>
      <section>
        <OfferWrapper>
          {offers.map((offer, i) => (
            <Offer
              title={offer.category}
              description={offer.description}
              hourlyRate={offer.hourly_rate}
              category={offer.category}
              city={offer.city}
              key={i}
            />
          ))}
        </OfferWrapper>
      </section>
    </>
  );
}
