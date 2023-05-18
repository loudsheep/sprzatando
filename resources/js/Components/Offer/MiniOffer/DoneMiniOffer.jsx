import {
  Wrapper,
  Button,
  ImgWrapper,
  StyledLink,
  Review,
  ReviewForm,
  Contractor,
} from "./MiniOffer.styles";
import ReactStars from "react-rating-stars-component";
import { useForm } from "@inertiajs/react";
import { useTimeDifference } from "../../../hooks/useTimeDifference";
import { Textarea } from "@/Components/Atoms/Textarea";
import { useState } from "react";
import { useWidth } from "@/hooks/useWidth";

export const DoneMiniOffer = ({ offer }) => {
  const timeDifference = useTimeDifference(offer.created_at);
  const width = useWidth();

  const [showReview, setShowReview] = useState(false);
  const [showReviewForm, setShowReviewForm] = useState(false);

  function toggleReview() {
    setShowReview(!showReview);
  }

  function toggleReviewForm() {
    setShowReviewForm(!showReviewForm);
  }

  const { data, setData, post, errors } = useForm();

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const handleRatingChange = (rate) => {
    setData("rating", rate);
    console.log(data);
  };

  function submitReview(e) {
    e.preventDefault();
    console.log(errors);
    post(route("offer.review", offer.id), {
      preserveScroll: true,
      onSuccess: () => {
        console.log(data);
      },
    });
  }

  return (
    <Wrapper>
      <ImgWrapper>
        <img src={offer.main_image} loading="lazy" alt="house photo" />
      </ImgWrapper>

      <div className="info-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <StyledLink href="#">{offer.title}</StyledLink>
          <p>{timeDifference}</p>
        </div>

        <p>
          <strong>Kategorie:</strong> {offer.category.replaceAll(";", ", ")}
        </p>

        <div className="container">
          <p>
            <strong>Miasto:</strong> {offer.city}
          </p>

          <div>
            {offer.review ? (
              <p className="rating" onClick={toggleReview}>
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
              <strong>Wykonał:</strong>
            </p>
            <img src={offer.contractor.profile_img} alt="" />
            <p>{offer.contractor.name}</p>
          </Contractor>
        </div>
      </div>

      {offer.review !== null && showReview && (
        <Review>
          <img src={offer.creator.profile_img} alt="" />

          <div className="seperator"></div>

          <div className="description">
            <b>
              {offer.creator.name} -{" "}
              <span style={{ color: "#ffda09" }}>{offer.review.rating} ★</span>
            </b>

            {offer.review.description}
          </div>
        </Review>
      )}

      {/* TODO review form */}
      {!offer.review && showReviewForm && (
        <ReviewForm onSubmit={submitReview}>
          {width > 576 && (
            <>
              <img src={offer.creator.profile_img} alt="profile img" />
              <div className="seperator"></div>
            </>
          )}

          <div className="description">
            <ReactStars
              count={5}
              name="rating"
              onChange={handleRatingChange}
              size={45}
              activeColor="#7F39F9"
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
            />
            <Textarea
              id="desc"
              name="description"
              value={data.description ?? ""}
              error={errors.description}
              handleChange={onHandleChange}
              height={"15rem"}
              isReview={true}
            />
            <Button style={{ height: "40px", margin: "10px 0" }}>Zapisz</Button>
          </div>
        </ReviewForm>
      )}
    </Wrapper>
  );
};
