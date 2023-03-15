import { Wrapper, Button, ImgWrapper, StyledLink } from "./MiniOffer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";
import { useTimeDifference } from "../../hooks/useTimeDifference";

const formatDate = (date) => {
  let d = new Date(date);

  return d.toLocaleDateString();
};

export const MiniOffer = ({
  id,
  title,
  description,
  price,
  image,
  category,
  city,
  owner,
  createdAt,
  ends,
  interested = 0,
  isOwner = false,
  isExpired = false,
}) => {
  function handleClick() {
    Inertia.post(`extend-expiration/${id}`);
  }
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

        <p>
          <strong>Kategorie:</strong> {category.replace(";", ", ")}
        </p>

        <div className="container">
          <p>
            <strong>Miasto:</strong> {city}
          </p>

          <p>
            <strong>Ważna do</strong> {formatDate(ends)}
          </p>

          <p>
            <Link>
              <strong>{interested}</strong> osób chętnych
            </Link>
          </p>
        </div>

        <div className="container">
          <div className="span">
            <span>{price} zł</span>
          </div>
          {isOwner ? (
            <Link href={`/offer/${id}/edit`}>
              <Button>Edytuj</Button>
            </Link>
          ) : (
            <Button>Aplikuj</Button>
          )}
          {isExpired && <Button onClick={handleClick}>Aktywuj</Button>}
        </div>
      </div>
    </Wrapper>
  );
};