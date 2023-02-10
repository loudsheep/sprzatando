import styled from "styled-components";
import { Link } from "@inertiajs/react";

const Wrapper = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  max-width: 90rem;
  width: 100%;
  margin: 20px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 2rem;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  h2 {
    font-size: 2.2rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.mainColor};
  }
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  .info-wrapper {
    flex: 1;
    display: flex;
    width: 100%;
    max-width: 50rem;
    flex-direction: column;
    max-height: 40rem;
    justify-content: space-between;
    margin-left: 18px;
    margin-right: 18px;
    overflow-wrap: break-word;
  }
  .span {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 6px;
    border-radius: 8px;
    max-width: 80px;
    text-align: center;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 992px) {
    justify-content: center;
  }
`;
const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 8px;
  margin: 10px;
  max-width: 80px;
  text-align: center;
`;

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
  isOwner = false,
}) => {
  return (
    <Wrapper href={`/offer/${id}`}>
      <img
        style={{
          maxWidth: "28rem",
          width: "100%",
          marginRight: "auto",
          flex: "1",
          marginLeft: "auto",
        }}
        src={image}
        loading="lazy"
        alt="house photo"
      />
      <div className="info-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>{title}</h2>
          <p>{getTimeDifference(createdAt)}</p>
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
          {isOwner ? (
            <Link href={`/offer/${id}/edit`}>
              <Button>Edytuj</Button>
            </Link>
          ) : (
            <Link href="#">
              <Button>Aplikuj</Button>
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
};
