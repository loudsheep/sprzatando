import { useEffect } from "react";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navigations/Navbar";
import FilterSection from "@/Components/FilterItems/FilterSection";
import { Offer } from "@/Components/Offer";
import { useDispatch } from "react-redux";
import { filterItemsActions } from "@/store/filter-items";
import { offersActions } from "@/store/filter-logic";
import linePath from "../assets/img/Lines.svg";

const OfferWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`;

const Header = styled.header`
  background: url(${({ img }) => img});
  padding-bottom: 4rem;
  background-repeat: no-repeat;
  background-attachment: fixed;
   -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size:cover;
    background-size: cover;
`;

export default function Welcome({
  auth,
  cities,
  offers,
  minPrice,
  maxPrice,
  categories,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      filterItemsActions.addFilterItems({
        categories,
        cities,
        minPrice,
        maxPrice,
      })
    );
    dispatch(
      offersActions.setAllOffers({
        offers,
      })
    );
  }, [categories, cities, minPrice, maxPrice]);
  return (
    <>
      <Head title="Welcome" />
      <Header img={linePath}>
        <Navbar auth={auth} />
        <FilterSection offers={offers} />
      </Header>
      <main>
        <section>
          <OfferWrapper>
            {offers.map((offer, i) => (
              <Offer
                id={offer.id}
                title={offer.title}
                description={offer.description}
                price={offer.price}
                image={offer.main_image}
                owner={offer.creator.name}
                category={offer.category}
                city={offer.city}
                createdAt={offer.created_at}
                key={i}
              />
            ))}
          </OfferWrapper>
        </section>
      </main>
    </>
  );
}
