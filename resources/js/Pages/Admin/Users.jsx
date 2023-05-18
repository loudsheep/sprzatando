import { Head } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import Button from "../../Components/Atoms/Button";
import { Inertia } from "@inertiajs/inertia";


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
  align-items: center;
  justify-content: space-between;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.dark};
`;
const BanBtn = styled.button`
  color: ${({ theme }) => theme.colors.error};
  &:hover {
    text-decoration: underline;
  }
`;

const ShowWorstDiv = styled.div`
  background-color: #ffb6b6;
  color: #a10000;
  margin: 0 1rem;
  border: 1px solid red;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
`;

export default function Dashboard({ auth, users }) {
  const [usersArray, setUsersArray] = useState(users);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState();
  const [showWorst, setShowWorst] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.type === "text") {
      setUserName(e.target.value);
      let filteredUsers = users.filter(({ name }) =>
        name.includes(e.target.value)
      );
      setUsersArray(filteredUsers);
      setUserId("");
    } else if (e.target.type === "number") {
      setUserId(e.target.value);
      let filteredUsers = users.filter(({ id }) => id == e.target.value);
      setUsersArray(filteredUsers);
      setUserName("");
    }
  };

  const showTheWorst = () => {
    let filteredUsers = users.filter(
      ({ reviews_avg_rating }) =>
        reviews_avg_rating < 2.5 && reviews_avg_rating !== null
    );
    setShowWorst(true);
    setUsersArray(filteredUsers);
  };

  const handleClear = () => {
    setUserName("");
    setUserId("");
    setShowWorst(false);
    setUsersArray(users);
  };

  const handleUserBan = (userId) => {
    Inertia.post(route('user.ban', userId));
  };

  return (
    
      <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
        {/* TODO add some layout for this */}
        <Head title="Users" />

      <Cont>
        <StyledTitle>Lista użytkowników</StyledTitle>
        <InputWrapper>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Searchbar
              type="text"
              onChange={handleInputChange}
              placeholder="Znajdź po nazwie"
              value={userName}
            />
            <Searchbar
              type="number"
              onChange={handleInputChange}
              placeholder="Znajdź po id"
              max={`${users.length}`}
              min="0"
              style={{ width: "130px" }}
              value={userId}
            />
            {showWorst && (
              <ShowWorstDiv onClick={handleClear}>
                Najgorsi użytkownicy (&lt;2.5★)
              </ShowWorstDiv>
            )}
            <button onClick={handleClear}>Wyczyść</button>
          </div>
          <Button
            text="Najgorsi"
            color={"err"}
            onClick={showTheWorst}
            title="Uzytkownicy ze średnią poniżej 2.5"
          />
        </InputWrapper>
        {usersArray.length !== 0 ? (
          <UserContainer>
            <thead>
              <tr>
                <th>Id.</th>
                <th>Email</th>
                <th>Nazwa</th>
                <th>Liczba ofert</th>
                <th>Średnia ocen</th>
                <th>Zbanowany?</th>
                <th>Stworzony</th>
                <th>Ban</th>
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
                  <td>
                    {/* tuttaj ban usera */}
                    <BanBtn onClick={() => { handleUserBan(u.id) }}>{u.ban_ending !== null ? "Odbanuj" : "Banuj"}</BanBtn>
                  </td>
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
