import { Wrapper, Button, ImgWrapper, StyledLink } from "./Offer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../hooks/useTimeDifference";

export const Offer = ({
  id,
  title,
  description,
  price,
  image,
  category,
  city,
  owner,
  createdAt,
  isInterested = false,
  isOwner = false,
  isExpired = false,
  buttons = {}
}) => {

  function handleClick() {
    Inertia.post(route('offer.extend', id));
  }

  const handleResign = () => {
    Inertia.post(route('offer.follow', id));
  };

  const timeDifference = useTimeDifference(createdAt);
  return (
    <Wrapper>
      <Link href={`/offer/${id}`}>
        <ImgWrapper>
          <img src={image} loading="lazy" alt="house photo" />
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
          <StyledLink href={`/offer/${id}`}>{title}</StyledLink>
          <p>{timeDifference}</p>
        </div>
        {owner && <p>autor: {owner}</p>}
        <p>
          {description.length > 100
            ? `${description.slice(0, 100)} ...`
            : description}
        </p>
        <p>
          <strong>Kategorie:</strong> {category}
        </p>
        <p>
          <strong>Miasto:</strong> {city}
        </p>

        <div className="container">
          <div className="span">
            <span>{price} zł</span>
          </div>

          {/* Better??? idk */}
          {Object.keys(buttons).map((key) => (
            <Link href={buttons[key]}>
              <Button>{key}</Button>
            </Link>
          ))}

          {/* {isOwner ? (
            <Link href={`/offer/${id}/edit`}>
              <Button>Edytuj</Button>
            </Link>
          ) : isInterested ? (
            <Button onClick={handleResign}>Rezygnuj</Button>
          ) : (
            <Link href={`/offer/${id}`}>
              <Button>Aplikuj</Button>
            </Link>
          )}

          {isExpired && <Button onClick={handleClick}>Aktywuj</Button>} */}
        </div>
      </div>
    </Wrapper>
  );
};
