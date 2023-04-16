import { MiniOffer } from "@/Components/Offer/MiniOffer/MiniOffer";
import { Head } from "@inertiajs/react";
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


export default function Dashboard({ offers }) {
    return (
        <>
            {/* TODO add some layout for this */}
            <Head title="Users" />

            <Cont>
                <h1>Zgłoszone oferty</h1>

                {offers.map((offer, i) => (
                    <MiniOffer
                        offer={offer}
                        isOwner={false}
                        key={i}
                    />
                ))}
            </Cont>
        </>
    );
}
