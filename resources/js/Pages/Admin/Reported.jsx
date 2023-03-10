import { Offer } from "@/Components/Offer";
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
    console.log(offers);
    return (
        <>
            {/* TODO add some layout for this */}
            <Head title="Users" />

            <Cont>
                <h1>Zgłoszone oferty</h1>

                {offers.map((offer, i) => (
                    <Offer
                        id={offer.id}
                        title={offer.title}
                        description={offer.description}
                        price={offer.price}
                        image={offer.main_image}
                        owner={offer.creator.name}
                        category={offer.category}
                        city={offer.city}
                        createdAt={offer.created_at}
                        key={i}
                    />
                ))}
            </Cont>
        </>
    );
}