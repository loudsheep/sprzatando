import { MiniOffer } from "@/Components/Offer/MiniOffer/MiniOffer";
import { Head } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";
import { StyledTitle } from "./Users";

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90%;
`;

export default function Banned({ auth, offers }) {
  return (
    <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
      <Head title="Users" />
      <Cont>
        <StyledTitle style={{ margin: "15px" }}>Zbanowane oferty:</StyledTitle>
        {offers.length > 0 ? (
          offers.map((offer, i) => (
            <MiniOffer
              offer={offer}
              isOwner={false}
              key={i}
              isBan={true}
            />
          ))
        ) : (
          <StyledTitle error={true}>
            Brak zbanowanych ofert
          </StyledTitle>
        )}
      </Cont>
    </AdminLayout>
  );
}
