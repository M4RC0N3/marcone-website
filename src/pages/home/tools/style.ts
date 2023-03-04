import styled from "styled-components";

export const Section = styled.section`
    width: 100vw;
    height: auto;
    overflow: hidden;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    box-sizing: border-box;
`;

export const TitleSection = styled.h2`
    position: absolute;
    left: 50%;
    transform: translateX(-56.5%);
    font-family: 'raleway-extrabold', sans-serif;
    font-size: 3.5rem;
    margin-top: 55px;
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
    padding: 0px 40px 20px 85px;
`;

export const DevContainer = styled(Job)`
    background-color: #0F0F0F;
    padding: 0px 85px 20px 40px;
   
`;

export const AboutWorkContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    margin-top: 160px;
    box-sizing: border-box;
    padding-bottom: 15px;
`;
export const AboutDesignWorkContainer = styled(AboutWorkContainer)`
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
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
    margin: ${props=>props.id == 'design' ?  '0px 0px 0px 15px' : '0px 15px 0px 0px'}
`;

export const ImageContainer = styled.div`
    min-width: 215px;
    max-width: 215px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    height: 544px;
`

export const Title = styled.h3`
    font-family: 'raleway-bold', sans-serif;
`;

export const Content = styled.p`
    margin-top: 8px;
    font-family: 'raleway-medium', sans-serif;
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
`;

export const Tool = styled.div`
    width: 65px;
    height: 65px;
    background-color: ${props=>props.id == 'design' ? '#000000' : '#fff'};
`


