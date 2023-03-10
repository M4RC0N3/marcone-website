import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    box-sizing: border-box;

    @media (max-width: 1030px){
        grid-template-columns: 1fr;
    }
`;

export const TitleSection = styled.h2`
    position: absolute;
    left: 50%;
    transform: translateX(-56.5%);
    font-family: 'raleway-extrabold', sans-serif;
    font-size: 3.5rem;
    margin-top: 55px;
    @media (max-width: 1030px){
        width: 100%;
        text-align: center;
        color: #fff;
        transform: translateX(-50%);
    }
    @media (max-width: 710px){
        font-size: 2.5rem;
    }
`;

export const Do = styled.span`
    color: #fff;
`;

export const Job = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.7fr 0.2fr;
    box-sizing: border-box;
`;

export const DesignContainer = styled(Job)`
    padding: 0px 40px 30px 40px;

    @media (max-width: 710px){
        padding: 0;
    }
`;

export const DevContainer = styled(Job)`
    background-color: #0F0F0F;
    padding: 0px 85px 20px 40px;

    @media (max-width: 1030px){
        grid-row-start: 1;
        grid-row-end: 2;
        padding: 0px 40px 30px 40px;
    }

    @media (max-width: 710px){
        box-sizing: border-box;
        padding:  0px 0px 50px 0px !important;
    }
`;

export const AboutWorkContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: 160px;
    box-sizing: border-box;
    padding-bottom: 15px;

    @media (max-width: 710px){
        flex-direction: column-reverse !important;
    }
`;
export const AboutDesignWorkContainer = styled(AboutWorkContainer)`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    @media(max-width: 710px){
        margin-top: 0;
    }
`;

export const AboutDevWorkContainer = styled(AboutWorkContainer)`
    display: flex;
    align-items: center;
    color: #fff;
`;

export const Text = styled.div`
    max-width: 430px;
    line-height: 24px;
    font-size: 1rem;
    text-align: ${props=>props.id == 'design' ? 'end' : 'start'};
    margin: ${props=>props.id == 'design' ?  '0px 0px 0px 15px' : '0px 15px 0px 0px'};

    @media (max-width: 1030px){
        margin: ${props=>props.id == 'design' ?  '0px 0px 0px 20px' : '0px 20px 0px 0px'};
    };

    @media (max-width: 710px){
        width: 100%;
        max-width: initial;
        margin: 0;
        box-sizing: border-box;
        padding: 20px;
    }
`;

export const ImageContainer = styled.div`
    width: 215px;
    height: 544px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media (max-width: 710px){
        width: 100vw;
        height: auto;
        max-height: 315px;
    }
`

export const Title = styled.h3`
    font-family: 'raleway-bold', sans-serif;

    @media (max-width: 710px){
        text-align: center;
    }
`;

export const Content = styled.p`
    margin-top: 8px;
    font-family: 'raleway-medium', sans-serif;
    text-align: justify;
`;

export const ToolsContainer = styled.div`
    grid-row-start: 2;
    grid-row-end: 3;
    max-width: 405px;
    display: flex;
    flex-wrap: wrap;
    justify-self: ${props=>props.id == 'design' ? 'end' : 'none'};
    justify-content: ${props=>props.id == 'design' ? 'end' : 'start'};
    gap: 20px;

    @media (max-width: 710px){
        width: 100%;
        justify-self: center !important;
        justify-content: center;
        box-sizing: border-box;
        padding: 0 10px;
    }
`;

export const Tool = styled.div`
    width: 65px;
    height: 65px;
    background-color: ${props=>props.id == 'design' ? '#000000' : '#fff'};

    @media (max-width: 710px) {
        width: 55px;
        height: 55px;
    }
`


