import styled from "styled-components";

const UserContainer = styled.table`
    border-collapse: collapse;

    th, td {
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
    width: 100%;
`;


export default function Dashboard({ users }) {
    console.log(users);
    return (
        <>
            {/* TODO add some layout for this */}

            <Cont>
                <h1>Lista użytkowników</h1>

                <UserContainer>
                    <tr>
                        <th>Lp.</th>
                        <th>Email</th>
                        <th>Nazwa</th>
                        <th>Liczba ofert</th>
                        <th>Średnia ocen</th>
                        <th>Zbanowany?</th>
                        <th>Stworzony</th>
                    </tr>
                    {users.map((u, i) => (
                        <tr>
                            <td>{i + 1}.</td>
                            <td>{u.email}</td>
                            <td>{u.name}</td>
                            <td>{u.created_offers_count}</td>
                            <td>{u.reviews_avg_rating ?? "-"}</td>
                            <td>{u.ban_ending !== null ? "Yes" : "No"}</td>
                            <td>{new Date(u.created_at).toLocaleDateString("pl-PL")}</td>
                        </tr>
                    ))}
                </UserContainer >
            </Cont>
        </>
    );
}
