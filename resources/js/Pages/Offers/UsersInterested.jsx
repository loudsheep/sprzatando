import { Head, Link } from "@inertiajs/react";
import styled from "styled-components";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Atoms/Button";
import { Inertia } from "@inertiajs/inertia";
import { useState } from 'react'

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
  margin: 30px auto;
`;

const Wrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px;
  height: 100%;
  margin-bottom: 10px;
`;

const User = styled.div`
  max-width: 500px;
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
    .btn-wrapper > a{
      margin: 0 10px;
    }
  }
  img {
    height: 70%;
    border-radius: 50%;
    margin-left: 20px;
  }
`;

export default function UsersInterested({
  auth,
  errors,
  offer,
  interestedUsers,
}) {
  const handleUserSelect = (userId) => {
    Inertia.post(route('offer.user.select', [offer.id, userId]));
  };

  return (
    <>
      <Head title="Chętni" />

      <AuthenticatedLayout
        auth={auth}
        errors={errors}
        prophileImg={auth.user.profile_img}
      >

        <Wrapper>
          <StyledTitle>Chętni do oferty:</StyledTitle>
          {interestedUsers.map(({ id, name, profile_img }, i) => (
            <User key={i}>
              <div className="pic">
                {i + 1}.
                <img
                  src={profile_img}
                  style={{ borderRadius: "50%" }}
                  alt="profile img"
                />
              </div>
              <div className="name">
                <span>
                  <strong>{name}</strong>
                </span>
                <div className="btn-wrapper">
                  <Link>Szczegóły</Link>
                  <Button text="wybierz" onClick={() => handleUserSelect(id)} />
                </div>
              </div>
            </User>
          ))}

          {interestedUsers.length == 0 && (
            <>
              Brak
            </>
          )}
        </Wrapper>
      </AuthenticatedLayout>
    </>
  );
}
