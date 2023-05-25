import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Atoms/Button";
import { Inertia } from "@inertiajs/inertia";
import { useState } from "react";
import {
  StyledTitle,
  Wrapper,
  InterestedWrapper,
  DetailsWrapper,
  Review,
  User,
} from "../page-styles/UserInterested.styles";
import { useWidth } from "@/hooks/useWidth";

export default function UsersInterested({
  auth,
  errors,
  offer,
  interestedUsers,
}) {
  const width = useWidth();

  const handleUserSelect = (userId) => {
    Inertia.post(route("offer.user.select", [offer.id, userId]));
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
                  <span>
                    {i + 1}. <strong>{user.name}</strong>
                  </span>
                  <img src={user.profile_img} alt="profile img" />
                </div>
                <div className="btn-wrapper">
                  {/* <Button text={"TEXT"} onClick={() => setViewingUser(user)}>Szczegóły</Button> */}
                  <b
                    onClick={() => setViewingUser(user)}
                    style={{ marginRight: "1rem", cursor: "pointer" }}
                  >
                    Szczegóły
                  </b>
                  <Button
                    text="wybierz"
                    onClick={() => handleUserSelect(user.id)}
                  />
                </div>
              </User>
            ))}

            {interestedUsers.length == 0 && <>Brak</>}
          </InterestedWrapper>

          {viewingUser != null && (
            <DetailsWrapper>
              <div
                style={{ textAlign: "right", width: "100%", cursor: "pointer" }}
                onClick={() => setViewingUser(null)}
              >
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
                  <div className="value">
                    {new Date(viewingUser.created_at).toLocaleDateString()}
                  </div>
                </div>

                <div className="row">
                  <div className="prop">Średnia ocen</div>
                  <div className="value" style={{ color: "#ffda09" }}>
                    {Number(viewingUser.reviews_avg_rating).toFixed(1)}★
                  </div>
                </div>

                <div className="row">
                  <div className="prop">Ilość wykonanych zleceń</div>
                  <div className="value">
                    {viewingUser.contracted_offers_count}
                  </div>
                </div>

                <div className="row">
                  <div className="prop">Ilość stworzonych zleceń</div>
                  <div className="value">
                    {viewingUser.created_offers_count}
                  </div>
                </div>

                {viewingUser.latest_review != null && (
                  <>
                    <div className="row">
                      <div className="prop">Ostatnia ocena</div>
                      <div className="value" style={{ color: "#ffda09" }}>
                        {viewingUser.latest_review.rating}★
                      </div>
                    </div>

                    <Review>
                      {width > 992 && (
                        <>
                          <img
                            src={viewingUser.profile_img}
                            alt="profile_img"
                          />
                          <div className="seperator"></div>
                        </>
                      )}

                      <div className="description">
                        <b>
                          {viewingUser.latest_review.offer.creator.name} -{" "}
                          <span style={{ color: "#ffda09" }}>
                            {viewingUser.latest_review.rating} ★
                          </span>
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
