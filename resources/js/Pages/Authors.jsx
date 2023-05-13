import styled from "styled-components";
import { Head, Link } from "@inertiajs/react";
import { Navbar } from "@/Components/Navigations/Navbar";
import Button from "@/Components/Atoms/Button";

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 4rem;
  font-weight: 700;
  margin: 2rem auto;
`;

const AuthorsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 50vh;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 9%;
  min-width: 150px;
  text-align: center;

  img {
    border-radius: 50%;
    width: 100%;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #696969;
  }
`;

export default function Authors({ auth }) {
  const authors = [
    {
      name: "Enigmo13",
      url: "https://github.com/Enigmo13",
      image: "https://github.com/Enigmo13.png"
    },
    {
      name: "Kuzdra24",
      url: "https://github.com/Kuzdra24",
      image: "https://github.com/Kuzdra24.png"
    },
    {
      name: "loudsheep",
      url: "https://github.com/loudsheep",
      image: "https://github.com/loudsheep.png"
    },
    {
      name: "zandalJ",
      url: "https://github.com/zandalJ",
      image: "https://github.com/zandalJ.png"
    },
  ];

  return (
    <>
      <Head title="Welcome" />
      <Navbar auth={auth} />

      <Header>Autorzy</Header>

      <AuthorsWrapper>
        {authors.map((value, index) => (
          <Profile key={index}>
            <a href={value.url} target="_blank">
              <div>
                <img src={value.image} alt="" />

                <h2>@{value.name}</h2>
              </div>
            </a>
          </Profile>
        ))}
      </AuthorsWrapper>

      <Header>Kod źródłowy</Header>

      <div style={{ textAlign: "center" }}>
        Zobacz na <a href="https://github.com/loudsheep/Sprzatando" target="_blank" style={{color: "blue"}}>github.com</a>
      </div>
    </>
  );
}
