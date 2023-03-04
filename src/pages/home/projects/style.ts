import styled from "styled-components";
import Image from "next/image";
export const Section = styled.section`
    width: 100%;
    height: auto;
    padding: 70px 85px;
    box-sizing: border-box;
`;
export const Top = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 130px;
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
`;
export const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
    justify-content: space-between;
    margin-top: 200px;
    
`;
export const ProjectActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const ProjectAbout = styled.div`

`;

export const ProjectType = styled.h5`
    font-family: 'raleway-regular', sans-serif;
`;
export const ProjectTitle = styled.h4`
    font-size: 2rem;
    font-family: 'raleway-bold', sans-serif;
    margin: 15px 0;
`;
export const ProjectDescription = styled.h5`
    max-width: 420px;
    font-size: 1.15rem;
    font-family: 'raleway-regular', sans-serif;
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
    background-color: blue;
    position: relative;
    border-radius: 5px;
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
    bottom: -11%;
    right: 30px;
    gap: 30px;
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
`;



