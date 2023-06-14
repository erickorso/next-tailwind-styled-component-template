import styled from 'styled-components'

export const XFooterStyled = styled.footer`
    .footer__logo{
        margin-top: 18px;
    }

    .footer-links{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 20px;

        .footer__link{
            flex: 1;
            max-width: 400px;
            min-width: 300px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            h3{
                margin: 10px 0;
            }

            &__item{
                display: flex;
                flex-direction: column;
                padding: 2px;
            }
        }
    }

    .footer__rights{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

        &__link{
            margin: 0 10px;
        }
        &__copy{
            font-style: italic;
            font-weight: bolder;
            font-size: 12px;
        }
    }

    @media (max-width: 1440px) {
        .footer__wrapper{
            flex-direction: column-reverse !important;
        }
        .footer-links{
            justify-content: flex-start;
        }

        .footer__link{
            align-items: flex-start !important;
        }
        .footer__logo{
            padding: 0 20px;
        }
        .footer__rights{
            width: 100%;
            flex-direction: column;
            align-items: center;
        }
    }
`