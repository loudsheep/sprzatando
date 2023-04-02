import { Wrapper, Button, ImgWrapper, StyledLink, Review } from "./MiniOffer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../../hooks/useTimeDifference";
import { useState } from "react";

const formatDate = (date) => {
  let d = new Date(date);

  return d.toLocaleDateString();
};

export const MiniOffer = ({
  offer,
  interested = 0,
  isOwner,
  review = null,
  buttons = {}
}) => {
  function handleClick() {
    Inertia.post(route('offer.extend', offer.id));
  }
  const timeDifference = useTimeDifference(offer.created_at);

  const [showReview, setShowReview] = useState(false);
  function toggleReview() {
    setShowReview(!showReview);
  }

  return (
    <Wrapper>
      <Link href={route('offer.details', offer.id)}>
        <ImgWrapper>
          <img src={offer.main_image} loading="lazy" alt="house photo" />
        </ImgWrapper>
      </Link>
      <div className="info-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledLink href={route('offer.details', offer.id)}>{offer.title}</StyledLink>
          <p>{timeDifference}</p>
        </div>

        <p>
          <strong>Kategorie:</strong> {offer.category.replace(";", ", ")}
        </p>

        {isOwner ? (
          <>
            <div className="container">
              <p>
                <strong>Miasto:</strong> {offer.city}
              </p>

              <p>
                <strong>Ważna do</strong> {formatDate(offer.ends)}
              </p>

              <p>
                <Link href={route('offer.interested.users', offer.id)}>
                  <strong>{interested}</strong> osób chętnych
                </Link>
              </p>
            </div>

          </>
        ) : (
          <>
            <div className="container">
              <p>
                <strong>Miasto:</strong> {offer.city}
              </p>

              <div>
                {review ? (
                  <p className='rating' onClick={toggleReview}>
                    <strong>Ocena:</strong> {review.rating} / 5
                  </p>
                ) : (
                  <p>
                    <strong>Brak oceny pracy</strong>
                  </p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="container">
          <div className="span">
            <span>{offer.price} zł</span>
          </div>

          {/* Better??? idk */}
          {Object.keys(buttons).map((key, i) => (
            <Link key={i} href={buttons[key]}>
              <Button>{key}</Button>
            </Link>
          ))}
        </div>
      </div>

      {review !== null && showReview && (
        <Review>
          <img src={offer.creator.profile_img} alt="" />

          <div className="seperator"></div>

          <div className="description">
            <b>
              {offer.creator.name} - <span style={{ color: '#ffda09' }}>{review.rating} ★</span>
            </b>

            {review.description}
          </div>
        </Review>
      )}
    </Wrapper>
  );
};
