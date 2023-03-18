import { Head, router } from "@inertiajs/react";
import styled from "styled-components";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Button from "@/Components/Atoms/Button";
import { Inertia } from "@inertiajs/inertia";

const StyledTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: bold;
  color: #303030;
  margin: 30px auto;
`;

const UserInfo = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 15px;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  box-shadow: -3px 3px 17px -6px rgba(66, 68, 90, 1);
  background-color: ${({ theme }) => theme.colors.lightGrey};
  img {
    width: 60px;
    height: 60px;
  }
  span {
    color: ${({ theme }) => theme.colors.dark};
    font-size: 2rem;
    margin: 0 20px;
  }
  .btn-wrapper{
    display: flex
  }

`;

export default function UsersInterested({ auth, errors, offer, interestedUsers }) {

  const handleUserSelect = () => {
    console.log("click");
    // Inertia.post(`/offer/${offer.id}/select/${userId}`);
  };

  return (
    <>
      <Head title="Chętni" />

      <AuthenticatedLayout
        auth={auth}
        errors={errors}
        prophileImg={auth.user.profile_img}
      >
        <StyledTitle>Chętni do oferty:</StyledTitle>
        {interestedUsers.map(({ id, name, profile_img }, i) => (
          <UserInfo key={i}>
            <img src={profile_img} style={{ 'borderRadius': '50%' }} alt="profile img" />
            <span>
              {i + 1}. <strong>{name}</strong>
            </span>
            <div className="btn-wrapper">
              <Button text="wybierz" onClick={handleUserSelect} />
              <Button text="odrzuć" color='error' />
            </div>
          </UserInfo>
        ))}
        <Button text="TEST" onClick={() => console.log("DEWX")}></Button>

      </AuthenticatedLayout>
    </>
  );
}
