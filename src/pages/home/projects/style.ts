import styled from "styled-components";
import Image from "next/image";
export const Section = styled.section`
    width: 100%;
    height: auto;
    padding: 70px 85px;
    box-sizing: border-box;
    @media (max-width: 1130px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 710px) {
        padding: 70px 0px;
    }
`;
export const Top = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 130px;
    @media (max-width: 1130px) {
        margin: 0 15px 100px 15px;
    }
`;
export const Title = styled.h2`
    font-family: 'raleway-bold', sans-serif;
`;
export const Subtitle = styled.h3`
    max-width: 290px;
    font-family: 'raleway-medium', sans-serif;
    border-left: 2px solid #000;
    box-sizing: border-box;
    padding-left: 10px;
    line-height: 25px;
    font-size: 1.15rem;
    justify-self: end;
    margin-right: 245px;
    @media (max-width: 1130px) {
        margin-right: 0;
    }
`;
export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    justify-content: space-between;
    margin-top: 200px;
    @media (max-width: 710px) {
        width: 100%;
        margin-top: 90px;
        grid-template-columns: 1fr;
    }
`;
export const ProjectActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 1130px) {
        margin-top: 50px;
        grid-row-start: 2;
        grid-row-end: 3;
    }
    @media (max-width: 710px) {
        width: 100%;
        margin-top: 60px;
        padding: 0 10px 0px 20px;
    }
`;
export const ProjectAbout = styled.div`

`;

export const ProjectType = styled.h5`
    font-family: 'raleway-regular', sans-serif;
    @media (max-width: 1130px) {
        display: none;
    }
`;
export const ProjectTitle = styled.h4`
    font-size: 2rem;
    font-family: 'raleway-bold', sans-serif;
    margin: 15px 0;
    @media (max-width: 1130px) {
        font-size: 1.8rem;
        margin: 0;
        margin-bottom: 10px;
    }
    @media (max-width: 710px) {
        font-size: 1.6rem;
        margin-bottom: 8px;
    }
`;
export const ProjectDescription = styled.h5`
    max-width: 420px;
    font-size: 1.15rem;
    font-family: 'raleway-regular', sans-serif;
    line-height: 25px;
    @media (max-width: 1130px) {
        font-size: 1rem;
        margin-bottom: 20px;
    }
`;
export const Button = styled.button`
    width: 215px;
    height: 45px;
    background-color: transparent;
    cursor: pointer;
    border: none;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    left: 0;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 21%;
        height: 100%;
        background-color: #CFCFCF;
        z-index: 0;
        transition: .6s cubic-bezier( 0.79,0.33,0,0.93 );
    }
    transition: .6s cubic-bezier( 0.79,0.33,0,0.93 );
    &:hover{
        left: 20px;
        &::before{
            width: 100%;
        }
    }
`;

export const NameButton = styled.p`
    font-family: 'raleway-semibold', sans-serif;
    font-size: 1.1rem;
    z-index: 10;
    text-decoration: none;
`;

export const Arrow = styled(Image)`
    z-index: 10;
`;

export const ProjectPreview = styled.div`
    width: 535px;
    height: 290px;
    justify-self: end;
    position: relative;
    border-radius: 5px;
    @media (max-width: 1130px) {
        justify-self: center;
    }
    @media (max-width: 710px) {
        width: 100%;
        height: auto;
    }
`;
export const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const StackContainer = styled.div`
    width: fit-content;
    height: auto;
    display: flex;
    position: absolute;
    bottom: -9%;
    right: 30px;
    gap: 30px;
    @media (max-width: 1130px) {
        left: 50%;
        transform: translateX(-50%);
        right: 0;
    }
`;

export const Stack = styled.div`
    width: 65px;
    height: 65px;
    background-color: #FFE95A;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    @media (max-width: 710px) {
        width: 55px;
        height: 55px;
        & > img{
            width: 90%;
            height: auto;
        }
    }
`;



