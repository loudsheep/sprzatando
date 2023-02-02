import { useEffect } from "react";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import FilterSection from "@/Components/FilterSection";
import { Offer } from "@/Components/Offer";
import { useDispatch } from "react-redux";
import { filterItemsActions } from "@/store/filter-items";

const OfferWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default function Welcome({ auth, cities, offers, minPrice, maxPrice }) {
  const dispatch = useDispatch();
  const categories = offers.map((offer) => offer.category);
  // const cities = offers.map((offer) => offer.city);
  const prices = offers.map((offer) => offer.hourly_rate);

  useEffect(() => {
    dispatch(filterItemsActions.addFilterItems({ categories, cities, prices }));
  }, [categories, cities, prices]);
  return (
    <>
      <Head title="Welcome" />
      <header>
        <Navbar auth={auth} />
        <FilterSection offers={offers} prices={[minPrice, maxPrice]}/>
      </header>
      <section>
        <OfferWrapper>
          {offers.map((offer, i) => (
            <Offer
              title={offer.title}
              description={offer.description}
              price={offer.price}
              image={offer.main_image}
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
