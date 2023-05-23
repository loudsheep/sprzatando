import { Head, Link } from "@inertiajs/react";
import styled from "styled-components";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Atoms/Button";
import { Inertia } from "@inertiajs/inertia";
import { useState } from 'react'

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
  margin: 30px auto;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
`;

const InterestedWrapper = styled.div`
  flex:  3;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
`;

const DetailsWrapper = styled.div`
  flex:  2;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 10px;

  .name {
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    img {
      height: 8rem;
      border-radius: 50%;
    }

    h2 {
      font-size: 4rem;
      font-weight: 600;
    }

    margin-bottom: 1rem;
  }

  hr {
    width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 1rem 0;
    color: #7a7a7a;

    .row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .prop {
        font-weight: 600;
      }
    }
  }
`;

export const Review = styled.div`
  width: 100%;
  margin: 2rem 10% 0 10%;  
  display: flex;
  flex-direction: row;

  img {
    height: 5rem;
    border-radius: 50%;
  }

  .seperator {
    padding: 0 1rem;
    height: 100%;
    border-right: 2px solid ${({ theme }) => theme.colors.secondaryColor};
  }

  .description {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
  }
`;

const User = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  margin: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 15px;
  height: 8rem;
  width: 100%;

  .pic {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 2.5rem;
  }
  .name {
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn-wrapper > a{
      margin: 0 10px;
    }
  }
  img {
    height: 70%;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export default function UsersInterested({
  auth,
  errors,
  offer,
  interestedUsers,
}) {
  const handleUserSelect = (userId) => {
    Inertia.post(route('offer.user.select', [offer.id, userId]));
  };

  const [viewingUser, setViewingUser] = useState(null);

  return (
    <>
      <Head title="Chętni" />

      <AuthenticatedLayout
        auth={auth}
        errors={errors}
        prophileImg={auth.user.profile_img}
      >
        <Wrapper>


          <InterestedWrapper>
            <StyledTitle>Chętni do oferty:</StyledTitle>
            {interestedUsers.map((user, i) => (
              <User key={i}>
                <div className="pic">
                  {i + 1}.
                  <img
                    src={user.profile_img}
                    style={{ borderRadius: "50%" }}
                    alt="profile img"
                  />
                </div>
                <div className="name">
                  <span>
                    <strong>{user.name}</strong>
                  </span>
                  <div className="btn-wrapper">
                    {/* <Button text={"TEXT"} onClick={() => setViewingUser(user)}>Szczegóły</Button> */}
                    <b onClick={() => setViewingUser(user)} style={{ marginRight: "1rem", cursor: "pointer" }}>Szczegóły</b>
                    <Button text="wybierz" onClick={() => handleUserSelect(id)} />
                  </div>
                </div>
              </User>
            ))}

            {interestedUsers.length == 0 && (
              <>
                Brak
              </>
            )}
          </InterestedWrapper>

          {viewingUser != null && (
            <DetailsWrapper>
              <div style={{ textAlign: "right", width: "100%", cursor: "pointer" }} onClick={() => setViewingUser(null)}>
                X
              </div>
              <div className="name">
                <img src={viewingUser.profile_img} alt="Profile image" />
                <h2>{viewingUser.name}</h2>
              </div>
              <hr />

              <div className="details">
                <div className="row">
                  <div className="prop">Dołączył</div>
                  <div className="value">{new Date(viewingUser.created_at).toLocaleDateString()}</div>
                </div>

                <div className="row">
                  <div className="prop">Średnia ocen</div>
                  <div className="value" style={{ color: "#ffda09" }}>{Number(viewingUser.reviews_avg_rating).toFixed(1)}★</div>
                </div>

                <div className="row">
                  <div className="prop">Ilość wykonanych zleceń</div>
                  <div className="value">{viewingUser.contracted_offers_count}</div>
                </div>

                <div className="row">
                  <div className="prop">Ilość stworzonych zleceń</div>
                  <div className="value">{viewingUser.created_offers_count}</div>
                </div>

                {viewingUser.latest_review != null && (
                  <>
                    <div className="row">
                      <div className="prop">Ostatnia ocena</div>
                      <div className="value" style={{ color: "#ffda09" }}>{viewingUser.latest_review.rating}★</div>
                    </div>

                    <Review>
                      <img src={viewingUser.profile_img} alt="" />

                      <div className="seperator"></div>

                      <div className="description">
                        <b>
                          {viewingUser.latest_review.offer.creator.name} -{" "}
                          <span style={{ color: "#ffda09" }}>{viewingUser.latest_review.rating} ★</span>
                        </b>

                        {viewingUser.latest_review.description}
                      </div>
                    </Review>
                  </>
                )}
              </div>
            </DetailsWrapper>
          )}

        </Wrapper>
      </AuthenticatedLayout>
    </>
  );
}
