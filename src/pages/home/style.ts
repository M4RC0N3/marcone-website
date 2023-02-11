import styled, { keyframes } from 'styled-components';
import Image from 'next/image';

export const Page = styled.main`
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    background-color: #201143;
`;

export const HomeContainer = styled.section`
    width: 100vw;
    height: 100vh;
    background: rgb(102,42,245);
    background: radial-gradient(circle, rgba(102,42,245,1) 0%, rgba(32,17,67,0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
`;

export const Header = styled.header`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    z-index: 15;
    box-sizing: border-box;
    padding: 15px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled(Image)`
    width: auto;
    height: 30px;
`;

export const NavBar = styled.nav`
    max-width: 610px;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0 100px;
    z-index: 5;
`;

export const LinkListing = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavLink = styled.a`
    font-family: 'raleway-medium';
    font-size: 1.2rem;
    text-decoration: none;
    color: #fff;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 0%;
        height: 2px;
        left: 0;
        background-color: #fff;
        top: 50%;
        transform: translateY(-50%);
        transition: width .35s cubic-bezier( 0.64, 0.13, 0.21, 0.66 );
    }
    &:hover{
        &::after{
            width: 100%;
        }
    }
`;


export const CurriculumDownloadButton = styled.button`
    min-width: 132px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    font-family: 'raleway-medium';
    font-size: 1.1rem;
    padding: 9px;
    box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
    transition: .4s ease-out;
    &:hover{
        background-color: #fff;
        color: #000;
    }
`;

export const MyPhoto = styled(Image)`
    position: absolute;
    bottom: -9%;
    left: 50%;
    transform: translateX(-54%);
    z-index: 10;
    width: auto;
    height: 108%;
`;

export const Name = styled.h1`
    position: absolute;
    font-family: 'raleway-extrabold', sans-serif;
    color: #fff;
    font-size: 32.5vh;
    z-index: 6;
`;

export const Circle = styled.div`
    width: 75vh;
    height: 75vh;
    border-radius: 100%;
    background: radial-gradient(circle, #633BC1, #662AF5);
    box-shadow: 0 0 30px rgba(102, 42, 245, .55);
    z-index: 5;
`;

export const BottomContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    z-index: 5;
    box-sizing: border-box;
    padding: 0 100px 40px;

`;

export const FollowContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Follow = styled.p`
    font-family: 'raleway-medium', sans-serif;
    writing-mode: vertical-lr;
    color: #fff;
    font-size: 1.1rem;
    margin-bottom: 25px;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 120px;
`;

export const IconBackground = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    transition: .4s ease-in-out;
    &:hover{
        background-color: #662AF5;
    }
`;
const downAnimation = keyframes`
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(30px);
    }
`
export const ScrollDownContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    opacity: .5;
    animation: ${downAnimation} 1s cubic-bezier( 0.79, 0.33, 0, 0.93 ) infinite alternate;
    transition: .6s cubic-bezier( 0.79, 0.33, 0, 0.93 );
    cursor: pointer;
    &:hover{
        opacity: 1;
    }
`;



export const ScrollDown = styled.p`
    font-family: 'raleway-medium', sans-serif;
    writing-mode: vertical-lr;
    color: #fff;
    margin-bottom: 15px;
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    padding: 10px;
`;

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1px solid #fff;
    opacity: .11;
    &:first-child{
        border-left: none;
    }
`;

export const Test = styled.section`
    width: 100vw;
    height: 100vh;
`;
