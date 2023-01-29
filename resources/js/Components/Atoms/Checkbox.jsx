import styled from 'styled-components';

const Input = styled.input`
 width: 1.3rem;
 height: 1.3rem;
 border-radius: 2px;
 border-color: ${({theme}) => theme.colors.grey};
 margin-right: 5px;
 :checked{
    color: ${({theme}) => theme.colors.mainColor}
 }
`

export default function Checkbox({ name, value, handleChange, id }) {
    return (
        <Input
            type="checkbox"
            name={name}
            value={value}
            id={id}
            onChange={(e) => handleChange(e)}
        />
    );
}
