import styled from "styled-components";
import Image from 'next/image';

export const Section = styled.section`
    width: 100vw;
    height: auto;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;
    padding: 0 100px;

    @media (max-width: 960px){
        grid-template-columns: 1fr;
        padding: 10px;
    }
`;

export const TextSide = styled.div`
    width: 100%;
    max-width: 555px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 960px){
        max-width: 580px;
        justify-self: center;
        box-sizing: border-box;
        padding: 20px 10px;
    }
`;

export const Title = styled.h2`
    font-family: 'raleway-bold', sans-serif;
    font-size: 1.1rem;
    margin-bottom: 15px;
`

export const Content = styled.p`
    font-family: 'raleway-medium', sans-serif;
    line-height: 24px;
    font-size: 1rem;
    text-align: justify;
`

export const PhotoSide = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    align-items: end;
`

export const Photo = styled(Image)`
    width: 100%;
    max-width: 776px;
    min-width: 505px;
    height: auto;
    z-index: 10;
    position: relative;
    top: 50px;

    @media (max-width: 960px){
        min-width: initial;
    }
`

export const Flag = styled.div`
    width: 50%;
    max-width: 360px;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(102,50,229,1) 0%, rgba(51,25,115,1) 100%);
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 960px){
        background: linear-gradient(180deg, rgb(255, 255, 255, 1) 0%, rgba(125, 47, 255, 1) 100%);
    }
`;

export const LogoVariation = styled(Image)`
    position: absolute;
    top: ${props=>props.id == 'prisma' ? '43%' : props=>props.id == 'crown' ? '33%' : props=>props.id == 'crown-base' ? '20%' : ''};
    left: ${props=>props.id == 'prisma' ? '5%' : props=>props.id == 'crown' ? '82%' : props=>props.id == 'crown-base' ? '6%' : ''};
`

export const Logo = styled(Image)`
    width: auto;
    height: 40%;
    opacity: .14;
    margin-top: 10%;

    @media (max-width: 960px){
        opacity: .54;
    }
`
