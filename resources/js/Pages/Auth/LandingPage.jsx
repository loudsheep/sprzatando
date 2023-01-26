import GuestLayout from "@/Layouts/GuestLayout";
import styled from "styled-components";
import { Link, Head} from "@inertiajs/react";

const StyledTitle = styled.h1`
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 36px;
    margin: 25px auto;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    text-align: center;
    padding: 40px;
    
`
const StyledButton = styled(Link)`
    background-color: ${({theme, isLogin}) => isLogin ?  theme.colors.mainColor : theme.colors.darkGrey};
    width: 260px;
    margin: 10px;
    padding: 10px 0;
    color: white;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;   
    :nth-of-type(1){
     margin-top: 50px;   
    } 

`
export default function LandingPage() {
    return (
        <GuestLayout>
            <Head title="Landing" />
            <Wrapper>
                <StyledTitle>
                    Sprzatando
                </StyledTitle>
                <p>Platforma łącząca ludzi posiadających srogie hacjendy z ludźmi mającymi ręce i minimum zdolności manualnych, żeby posprzątać.</p>
            </Wrapper>
            <StyledButton href="/login" isLogin={true}  type="button">Zaloguj</StyledButton>
            <StyledButton href="/register" isLogin={false} type="button">Zarejstruj</StyledButton>
        </GuestLayout>)
}