import { MiniOffer } from "@/Components/Offer/MiniOffer/MiniOffer";
import { Head } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";

const UserContainer = styled.table`
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    text-align: center;
  }

  tr:nth-child(even) {
    background: #eee;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90%;
`;

export default function Dashboard({auth, offers }) {
  return (
    <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
      {/* TODO add some layout for this */}
      <Head title="Users" />

      <Cont>
        <h1>Zgłoszone oferty</h1>

        {offers.map((offer, i) => (
          <MiniOffer offer={offer} isOwner={false} key={i} isAdminView={true}/>
        ))}
      </Cont>
    </AdminLayout>
  );
}
