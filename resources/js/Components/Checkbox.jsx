import styled from 'styled-components';

const Input = styled.input`
 
 border-radius: 2px;
 border-color: ${({theme}) => theme.colors.grey};
 :checked{
    color: ${({theme}) => theme.colors.mainColor}
 }
`

export default function Checkbox({ name, value, handleChange }) {
    return (
        <Input
            type="checkbox"
            name={name}
            value={value}
            
            onChange={(e) => handleChange(e)}
        />
    );
}
