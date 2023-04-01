import { Wrapper, Button, ImgWrapper, StyledLink, Review, ReviewForm, Contractor } from "./MiniOffer.styles";
import { Link } from "@inertiajs/react";
import { Head, useForm } from "@inertiajs/react";
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

  const { data, setData, post, errors } = useForm();
  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  function submitReview(e) {
    e.preventDefault();
    post(route("offer.review", offer.id), {
      // preserveScroll: true,
      // onSuccess: () => {
      //   // setData(initialState);
      //   // handleCheckboxReset();
      //   // setIsOpen(true);
      // },
    });
    console.log(errors);
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
      {(!offer.review && showReviewForm) && (
        <ReviewForm onSubmit={submitReview}>
          <img src={offer.creator.profile_img} alt="" />
          <div className="seperator"></div>

          <div className="description">
            <input type="number" name="rating" value={data.rating} placeholder="Ocena (1 do 5)" min={1} max={5} style={{ width: "50%" }} onChange={onHandleChange}/>
            <textarea name="description" style={{ "width": "100%" }} placeholder="Wystaw opinię wykonawcy" onChange={onHandleChange}></textarea>
          </div>

          <Button>Zapisz</Button>
        </ReviewForm>
      )}
    </Wrapper>
  );
};
