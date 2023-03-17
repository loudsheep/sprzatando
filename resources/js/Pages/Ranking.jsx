import styled from "styled-components";
import { Head } from "@inertiajs/react";
import { Navbar } from "@/Components/Navigations/Navbar";
import linePath from "../assets/img/Lines.svg";
import Button from "@/Components/Atoms/Button";

const SectionFilterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 10rem auto 0 auto;
  padding: 0 100px;
  position: relative;
  
  @media (min-width: 992px) {
    margin: 15rem auto 0 auto;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 576px) {
    padding: 0 50px;
  }
`;

const TextWrapper = styled.div`
  width: 30%;

  @media (max-width: 992px){
    width: 40%;
  }

  @media (max-width: 768px){
    width: 100%;
    margin-bottom: 5rem;
  }
`;

const HeaderText = styled.h1`
  line-height: 120%;
  font-size: 3.5rem;
  font-weight: bold;
  color: #000;
`;

const Text = styled.p`
  font-size: 1.4rem;
  margin: 1rem 0 2rem 0;
  color: ${({ theme }) => theme.colors.darkGrey};
  @media (max-width: 768px) {
    margin: .5rem 0 1rem 0;
  }
`;

const UsersWrapper = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
`;

const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: 1px solid ${({ theme }) => theme.colors.lightPurple};
    margin: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    border-radius: 15px;
    height: 8rem;
    width: 100%;

    .pic {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 2.5rem;
    }
    .name {
        width: 60%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img {
        height: 70%;
        border-radius: 50%;
        margin-left: 20px;
    }
`;

export default function Welcome({ auth, users }) {
    return (
        <>
            <Head title="Welcome" />
            <Navbar auth={auth} />

            <SectionFilterWrapper>
                <TextWrapper>
                    <HeaderText>Nasi najlepsi wykonawcy</HeaderText>
                    <Text>Żadne zadanie im nie straszne</Text>
                    <Button text={"Sprawdź"} />
                </TextWrapper>

                <div style={{ flex: 1 }}></div>

                <UsersWrapper>
                    {users.map((user, i) => (
                        <User style={{backgroundColor: auth.user?.id == user.id ? "#b3ff99": "", borderColor: auth.user?.id == user.id ? "#66d450": ""}}>
                            <div className="pic">
                                {i + 1}.
                                <img src={user.profile_img} alt="" />
                            </div>
                            <div className="name">
                                <p>
                                    {user.name}
                                </p>
                                <p>
                                    {Number(user.reviews_avg_rating).toFixed(1)}★
                                </p>
                            </div>
                        </User>
                    ))}
                </UsersWrapper>
            </SectionFilterWrapper>
        </>
    );
}
