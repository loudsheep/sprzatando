import { Wrapper, Button, ImgWrapper, StyledLink } from "./Offer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../hooks/useTimeDifference";

export const Offer = ({ offer, buttons = {} }) => {
  function handleClick() {
    Inertia.post(route("offer.extend", offer.id));
  }

  const handleResign = () => {
    Inertia.post(route("offer.follow", offer.id));
  };

  const timeDifference = useTimeDifference(offer.created_at);
  return (
    <Wrapper>
      <Link href={route("offer.details", offer.id)}>
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
            margin: "1rem 0",
          }}
        >
          <StyledLink href={route("offer.details", offer.id)}>
            {offer.title}
          </StyledLink>
          <p>{timeDifference}</p>
        </div>
        {offer.creator.name && (
          <p>
            <strong>Autor:</strong> {offer.creator.name}
          </p>
        )}
        <p>
          {offer.description.length > 100
            ? `${offer.description.slice(0, 100)} ...`
            : offer.description}
        </p>
        <p>
          <strong>Kategorie:</strong> {offer.category.replaceAll(";", ", ")}
        </p>
        <p>
          <strong>Miasto:</strong> {offer.city}
        </p>

        <div className="container" style={{ marginTop: "1rem" }}>
          <button className="button">{offer.price} zł</button>
          {Object.keys(buttons).map((key, i) => (
            <Link key={i} href={buttons[key]}>
              <Button>{key}</Button>
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
