import { Wrapper, Button, ImgWrapper, StyledLink } from "./Offer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../hooks/useTimeDifference";

export const Offer = ({
  offer,
  buttons = {}
}) => {

  function handleClick() {
    Inertia.post(route('offer.extend', offer.id));
  }

  const handleResign = () => {
    Inertia.post(route('offer.follow', offer.id));
  };

  const timeDifference = useTimeDifference(offer.created_at);
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
        {offer.creator.name && <p>autor: {offer.creator.name}</p>}
        <p>
          {offer.description.length > 100
            ? `${offer.description.slice(0, 100)} ...`
            : offer.description}
        </p>
        <p>
          <strong>Kategorie:</strong> {offer.category}
        </p>
        <p>
          <strong>Miasto:</strong> {offer.city}
        </p>

        <div className="container">
          <div className="span">
            <span>{offer.price} zł</span>
          </div>

          {/* Better??? idk */}
          {Object.keys(buttons).map((key) => (
            <Link href={buttons[key]}>
              <Button>{key}</Button>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
