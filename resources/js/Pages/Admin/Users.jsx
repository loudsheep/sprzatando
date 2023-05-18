import { Head } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";

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

const Searchbar = styled.input`
  max-width: 340px;
  margin: 2rem 0;
  border: none;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.lightPurple};
  border-radius: 12px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: -2px 2px 20px -6px rgba(66, 68, 90, 1);
  }
`;

export default function Dashboard({ auth, users }) {
  const [usersArray, setUsersArray] = useState(users);

  const handleInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
  
    let filteredUsers = users.filter(({ name }) =>
      name.toLowerCase().includes(searchValue)
    );
  
    setUsersArray(filteredUsers);
  };

  return (
    <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
      {/* TODO add some layout for this */}
      <Head title="Users" />

      <Cont>
        <h1>Lista użytkowników</h1>
        <Searchbar
          type="text"
          onChange={handleInputChange}
          placeholder="Znajdź po nazwie"
        />
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
            {usersArray.map((u, i) => (
              <tr key={i}>
                <td>{i + 1}.</td>
                <td>{u.email}</td>
                <td>{u.name}</td>
                <td>{u.created_offers_count}</td>
                <td>
                  {u.reviews_avg_rating ?? "-"} ({u.reviews_count ?? ""})
                </td>
                <td>{u.ban_ending !== null ? "Tak" : "Nie"}</td>
                <td>{new Date(u.created_at).toLocaleDateString("pl-PL")}</td>
              </tr>
            ))}
          </tbody>
        </UserContainer>
      </Cont>
    </AdminLayout>
  );
}
