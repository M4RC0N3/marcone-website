import styled, {keyframes} from "styled-components";

const backgroundOpacity = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const cardAnimation = keyframes`
    from{
        opacity: 0;
        transform: scale(.9);
    }
    to{
        opacity: 1;
        transform: scale(1);
    }
`;
export const Background = styled.div`
    position: fixed;
    top: 0;
    z-index: 20;
    background-color: rgba(0, 0, 0, .70);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: ${backgroundOpacity} 1s cubic-bezier( 0.79,0.33,0,0.93 ) forwards;
`;
export const Card = styled.div`
    min-height: 325px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    justify-content: space-between;
    text-align: center;
    margin: 20px;
    opacity: 0;
    transform: scale(.9);
    animation: ${cardAnimation} 1s cubic-bezier( 0.79,0.33,0,0.93 ) forwards;

`;
export const CardTitle = styled.p`
    font-size: 2rem;
    font-family: 'raleway-semibold', sans-serif;
    margin-bottom: 25px;
`;
export const CardDescription = styled.p`
    font-size: 1.5rem;
    font-family: 'raleway-medium', sans-serif;
    margin-top: 25px;
`;