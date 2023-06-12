import styled from 'styled-components'

type HeroStyledType = {
    
}

export const HeroStyled = styled.div<HeroStyledType>`
    margin-top: 80px !important;
    min-height: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 1440px;

    
    .hero__title{
        font-size: 60px;
    }
    .hero__subtitle{
        font-size: 30px;
    }
    .hero{
        &__side{
            max-height: 600px;
            min-height: 400px;
            max-width: 600px;
            min-width: 400px;
            flex: 2;
            position: relative;
            overflow: visible;
            
            &--right{
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                flex: 3;
                max-width: 800px;

                .hero__image-overlay{
                    transform: scale(1.5);
                    z-index: 0;
                    position: absolute;
                    top: -50px;
                    left: 200px;
                    right: 0;
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        &__image{
            z-index: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            img{
                width: 100%;
                height: auto;
                max-height: 100%;
            }
        }
    }

    @media (max-width: 1366px) {
        width: 100vw;
        flex-wrap: wrap;
        flex-direction: column;
        .hero{
        &__side{
            margin: 0 auto;
            width: auto;
            max-height: inherit;
            min-height: 250px;
            max-width:  1000px;
            min-width: inherit;
            width: 100%;
            &--right{

                .hero__image-overlay{
                    transform: scale(0.9);
                }
            }
        }

        &__image{
            img{
                width: 100%;
                max-width: 1000px;
            }
        }
    }
    }

`