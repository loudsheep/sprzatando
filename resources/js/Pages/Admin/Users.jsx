import { Head, router } from "@inertiajs/react";
import styled from "styled-components";
import AdminLayout from "@/Layouts/AdminLayout";
import { useState } from "react";
import Button from "../../Components/Atoms/Button";
import { notify } from "@/contants/notify";
import { ToastContainer } from "react-toastify";
import { useWidth } from "@/hooks/useWidth";

const TableContainer = styled.div`
  overflow-x: auto;
  margin-top: 4rem;
`;

const UserContainer = styled.table`
  border-collapse: collapse;
  min-width: 100%;

  th,
  td {
    padding: 1rem;
    max-width: 240px;
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
  padding: 20px;
  overflow-x: hidden;
  width: 90%;
  min-height: 90%;
`;

const Searchbar = styled.input`
  width: 100%;
  margin-bottom: 1rem;
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
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 992px) {
    flex-direction: row;

    ${Searchbar}:nth-of-type(1) {
      margin-right: 2rem;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 992px) {
    justify-content: flex-start;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 2.4rem;
  color: ${({ theme, error }) =>
    error ? theme.colors.error : theme.colors.dark};
`;
const BanBtn = styled.button`
  color: ${({ theme, unban }) =>
    unban ? theme.colors.success : theme.colors.error};
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

  const width = useWidth();

  const handleInputChange = (e) => {
    setShowWorst(false);
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

  const handleUserBan = (event, user) => {
    event.preventDefault();
    router.post(route("user.ban", user.id), null, {
      onSuccess: (x) => {
        setUsersArray(x.props.users);
        if (user.ban_ending == null) {
          notify(
            <p>
              Zbanowano użutkownika <strong>{user.name}</strong> na okres 7
              dni🚫
            </p>
          );
        } else {
          notify(
            <p>
              Odbanowano użutkownika <strong>{user.name}</strong>💪🏽
            </p>
          );
        }
      },
    });
  };

  return (
    <>
      <ToastContainer />
      <AdminLayout auth={auth} prophileImg={auth.user.profile_img}>
        <Head title="Users" />

        <Cont>
          <StyledTitle>Lista użytkowników</StyledTitle>
          <SearchWrapper>
            <InputWrapper>
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
                value={userId}
              />
              {showWorst && (
                <ShowWorstDiv onClick={handleClear}>
                  Najgorsi użytkownicy (&lt;2.5★)
                </ShowWorstDiv>
              )}
            </InputWrapper>
            <ButtonWrapper>
              <Button
                onClick={handleClear}
                text={"Wyczyść"}
                style={
                  width >= 992 ? { marginRight: "2rem" } : { marginRight: "0" }
                }
              ></Button>
              <Button
                text="Najgorsi"
                color={"err"}
                onClick={showTheWorst}
                title="Uzytkownicy ze średnią poniżej 2.5"
              />
            </ButtonWrapper>
          </SearchWrapper>

          {usersArray.length !== 0 ? (
            <TableContainer>
              <UserContainer>
                <thead>
                  <tr>
                    <th>Id.</th>
                    <th>Email</th>
                    <th>Nazwa</th>
                    <th>Liczba ofert</th>
                    <th>Średnia ocen</th>
                    <th>Ostatnia ocena</th>
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
                      <td>{u.latest_review ? u.latest_review.rating : "-"}</td>
                      <td>
                        {new Date(u.created_at).toLocaleDateString("pl-PL")}
                      </td>
                      <td>
                        <form onSubmit={(e) => handleUserBan(e, u)}>
                          <BanBtn unban={u.ban_ending != null}>
                            {u.ban_ending !== null ? "Odbanuj" : "Banuj"}
                          </BanBtn>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </UserContainer>
            </TableContainer>
          ) : (
            <StyledTitle error={true}>Brak Użytkowników 🙄</StyledTitle>
          )}
        </Cont>
      </AdminLayout>
    </>
  );
}
