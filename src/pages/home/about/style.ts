import styled from "styled-components";
import Image from 'next/image';

type ProtoType = {
    logoType: string;
};

export const Page = styled.section`
    width: 100vw;
    min-height: 1059px;
    overflow: hidden;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 100px;
    box-sizing: border-box;
`;

export const TextSide = styled.div`
    width: 100%;
    max-width: 555px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    width: auto;
    height: 89%;
    z-index: 10;
    position: relative;
    top: 50px;
`

export const Flag = styled.div`
    width: 360px;
    height: 100%;
    position: absolute;
    background: linear-gradient(180deg, rgba(102,50,229,1) 0%, rgba(51,25,115,1) 100%);
    display: flex;
    justify-content: center;

`;

export const LogoVariation = styled(Image)`
    position: absolute;
    top: ${props=>props.id == 'prisma' ? '539px' : props=>props.id == 'crown' ? '456px' : props=>props.id == 'crown-base' ? '306px' : ''};
    left: ${props=>props.id == 'prisma' ? '9%' : props=>props.id == 'crown' ? '78%' : props=>props.id == 'crown-base' ? '12%' : ''};
`

export const Logo = styled(Image)`
    opacity: .14;
    margin-top: 70px;
`
