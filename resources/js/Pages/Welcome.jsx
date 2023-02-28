import { useEffect } from "react";
import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navigations/Navbar";
import FilterSection from "@/Components/FilterItems/FilterSection";
import { Offer } from "@/Components/Offer";
import { useDispatch, useSelector } from "react-redux";
import { filterItemsActions } from "@/store/filter-items";
import { offersActions } from "@/store/filter-logic";
import linePath from "../assets/img/Lines.svg";
import { Pagination } from "@mui/material";

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
  background: url(${({ img }) => img}) 0 0 / cover;
  padding-bottom: 4rem;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  -o-background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
 `;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

  const offersArray = useSelector((state) => state.offers.offersArray);

  const currentPage = useSelector((state) => state.offers.currentPage);

  const offersPerPage = 6;

  const indexOfLastOffer = currentPage * offersPerPage;
  const indexOfFirstOffer = indexOfLastOffer - offersPerPage;

  const paginate = (e, value) => {
    dispatch(
      offersActions.setCurrentPage({
        value,
      })
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentOffers = offersArray.slice(indexOfFirstOffer, indexOfLastOffer);

  return (
    <>
      <Head title="Welcome" />

      <Header img={linePath}>
        <Navbar auth={auth} />
        <FilterSection offers={offers} />
      </Header>
      <main>
        <Section id="section">
          <OfferWrapper>
            {currentOffers.map((offer, i) => (
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
          {offersArray.length > offersPerPage && (
            <Pagination
              style={{
                margin: "10px auto 4rem",
              }}
              count={Math.ceil(offersArray.length / offersPerPage)}
              shape="circular"
              page={currentPage}
              defaultPage={1}
              onChange={paginate}
              color="secondary"
              size="string"
              variant="outlined"
            />
          )}
        </Section>
      </main>
    </>
  );
}
