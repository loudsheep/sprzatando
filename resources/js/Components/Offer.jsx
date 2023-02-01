import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 80rem;
  width: 100%;

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
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

export const Offer = ({
  title,
  description,
  price,
  image,
  category,
  city,
  main_image,
  isOwner = false,
}) => {
  return (
    <Wrapper>
      <img
        style={{ maxWidth: "100%", marginRight: "18px", flex: "1" }}
        src={image}
        alt="house photo"
      />
      <div className="info-wrapper">
        <h2>{title}</h2>
        <p>{description.slice(0, 100)}...</p>
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
          {isOwner ? <Button>Edytuj</Button> : <Button>Aplikuj</Button>}
        </div>
      </div>
    </Wrapper>
  );
};
