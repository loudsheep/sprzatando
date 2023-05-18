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
  margin: 2rem 1rem;
  border: none;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.4) 0px 8px 24px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 12px;
  font-size: 16px;
  &:focus {
    outline: none;
    box-shadow: -2px 2px 20px -6px rgba(66, 68, 90, 1);
  }
`;
const InputWrapper = styled.div`
  display: flex;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.dark};
`;

export default function Dashboard({ auth, users }) {
  const [usersArray, setUsersArray] = useState(users);

  const handleInputChange = (e) => {
    if (e.target.type === "text") {
      let filteredUsers = users.filter(({ name }) =>
        name.includes(e.target.value)
      );
      setUsersArray(filteredUsers);
    } else if(e.target.type === "number"){
      let filteredUsers = users.filter(({ id }) =>
        id == e.target.value
      );
      setUsersArray(filteredUsers);
    }
  };

  return (
    <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
      {/* TODO add some layout for this */}
      <Head title="Users" />

      <Cont>
        <StyledTitle>Lista użytkowników</StyledTitle>
        <InputWrapper>
          <Searchbar
            type="text"
            onChange={handleInputChange}
            placeholder="Znajdź po nazwie"
          />
          <Searchbar
            type="number"
            onChange={handleInputChange}
            placeholder="Znajdź po id"
            max={`${users.length}`}
            min="0"
            style={{ width: "130px" }}
          />
        </InputWrapper>
        {usersArray.length !== 0 ? (
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
                  <td>{u.id}. </td>
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
        ) : (
          <StyledTitle error={true}>Brak Użytkowników 🙄</StyledTitle>
        )}
      </Cont>
    </AdminLayout>
  );
}
