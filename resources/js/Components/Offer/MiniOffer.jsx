import { Wrapper, Button, ImgWrapper, StyledLink } from "./MiniOffer.styles";
import { Link } from "@inertiajs/react";
import { Inertia } from "@inertiajs/inertia";

const getTimeDifference = (createdAt) => {
  const createdDate = new Date(createdAt);
  const today = new Date();
  const timeDifference = today.getTime() - createdDate.getTime();

  let seconds = Math.floor(timeDifference / 1000);
  let minutes = Math.floor(timeDifference / (1000 * 60));
  let hours = Math.floor(timeDifference / (1000 * 60 * 60));
  let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  let monthNames = [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru",
  ];

  if (seconds < 60) {
    return seconds + " sec temu";
  }
  if (minutes < 60) {
    return minutes + " min temu";
  } else if (hours < 24) {
    return hours + " h temu";
  } else if (days < 4) {
    return days + " dni temu";
  } else {
    return `${createdDate.getDate()} ${monthNames[createdDate.getMonth()]}`;
  }
};

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
          <p>{getTimeDifference(createdAt)}</p>
        </div>

        <p>
          <strong>Kategorie:</strong> {category}
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
