import { Head } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";

const UserContainer = styled.table`
  border-collapse: collapse;

  th,
  td {
    border: 1px solid black;
    text-align: center;
    max-width: 240px;
    word-break: break-word;
  }

  tr:nth-child(even) {
    background: #eee;
  }
`;

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-x: hidden;
  width: 90%;
  min-height: 90%;
`;

export default function Dashboard({ auth, users }) {
  return (
    <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
      {/* TODO add some layout for this */}
      <Head title="Users" />

      <Cont>
        <h1>Lista użytkowników</h1>

        <UserContainer>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Email</th>
              <th>Nazwa</th>
              <th>Liczba ofert</th>
              <th>Średnia ocen</th>
              <th>Zbanowany?</th>
              <th>Stworzony</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>{u.email}</td>
                <td>{u.name}</td>
                <td>{u.created_offers_count}</td>
                <td>
                  {u.reviews_avg_rating ?? "-"} ({u.reviews_count ?? ""})
                </td>
                <td>{u.ban_ending !== null ? "Yes" : "No"}</td>
                <td>{new Date(u.created_at).toLocaleDateString("pl-PL")}</td>
              </tr>
            ))}
          </tbody>
        </UserContainer>
      </Cont>
    </AdminLayout>
  );
}
