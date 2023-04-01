import { Wrapper, Button, ImgWrapper, StyledLink, Review, ReviewForm, Contractor } from "./MiniOffer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../../hooks/useTimeDifference";
import { FormField } from "@/Components/FormField";
import { Textarea } from "@/Components/Atoms/Textarea";
import { TextField } from "@material-ui/core";
import { useState } from "react";

const formatDate = (date) => {
  let d = new Date(date);

  return d.toLocaleDateString();
};

export const DoneMiniOffer = ({
  offer,
}) => {
  const timeDifference = useTimeDifference(offer.created_at);

  const [showReview, setShowReview] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  function toggleReview() {
    setShowReview(!showReview);
  }

  function toggleReviewForm() {
    setShowReviewForm(!showReviewForm);
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

        <div className="container">
          <p>
            <strong>Miasto:</strong> {offer.city}
          </p>

          <div>
            {offer.review ? (
              <p className='rating' onClick={toggleReview}>
                <strong>Ocena:</strong> {offer.review.rating} / 5
              </p>
            ) : (
              <p>
                <strong>Brak oceny</strong>
                <Button onClick={toggleReviewForm}>Oceń</Button>
              </p>
            )}
          </div>
        </div>


        <div className="container">
          <div className="span">
            <span>{offer.price} zł</span>
          </div>

          <Contractor>
            <p>
              <strong>
                Wykonał:
              </strong>
            </p>
            <img src={offer.contractor.profile_img} alt="" />
            <p>
              {offer.contractor.name}
            </p>
          </Contractor>
        </div>
      </div>

      {offer.review !== null && showReview && (
        <Review>
          <img src={offer.creator.profile_img} alt="" />

          <div className="seperator"></div>

          <div className="description">
            <b>
              {offer.creator.name} - <span style={{ color: '#ffda09' }}>{offer.review.rating} ★</span>
            </b>

            {offer.review.description}
          </div>
        </Review>
      )}

      {/* TODO review form */}
      {/* {(!offer.review && showReviewForm) && (
        <ReviewForm>
          <Textarea
            id="desc"
            value=""
            error=""
          />
        </ReviewForm>
      )} */}
    </Wrapper>
  );
};
