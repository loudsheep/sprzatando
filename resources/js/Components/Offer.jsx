import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 80rem;
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
  .span {
    background-color: ${({ theme }) => theme.colors.darkGrey};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    padding: 6px;
    border-radius: 8px;
    margin: 10px;
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
  category,
  city,
  isOwner = false,
}) => {
  return (
    <Wrapper>
      <img
        style={{ maxWidth: "100%", marginRight: "18px", flex: "1" }}
        src="https://i.wpimg.pl/360x262/wpcdn.pl/extradom/designs/72507/595148/b7e0091e80475f0b8c39a5f41167e473959cf28927e9dddf40d0876a8e7a250e.jpg"
        alt="house photo"
      />
      <div style={{ flex: "1" }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Kategorie: {category}</p>
        <p>{city}</p>
        <div className="container">
          <div className="span">
            <span>{price}zł / h</span>
          </div>
          {isOwner ? <Button>Edytuj</Button> : <Button>Aplikuj</Button>}
        </div>
      </div>
    </Wrapper>
  );
};
