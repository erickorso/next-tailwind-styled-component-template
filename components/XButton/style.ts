import styled from 'styled-components'

export const ButtonStyled = styled.button`
    background: rgb(19, 82, 199);
    color: white;
    border: solid 2px rgb(236, 230, 230);
    border-radius: 10px;
    padding: 10px 15px;
    transition: ease-in-out all 0.3s;

    &.small{
        padding: 5px;
        span{
            font-size: 16px;
        }
    }

    span{
        font-weight: bolder;
        font-size: 20px;
        text-transform: uppercase;
    }

    &:hover{
        background: #efe;
        color: rgb(19, 82, 199);
        border: solid 2px rgb(236, 230, 230);
    }
`