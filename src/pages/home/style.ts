import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
const EmergeTime = '1s cubic-bezier( 0.38, 0.54, 0.17, 0.97 )   1.5s forwards';
export const Page = styled.main`
    width: 100vw;
    height: auto;
    overflow-x: hidden;
    background-color: #070410;
`;

export const HomeContainer = styled.section`
    width: 100vw;
    height: 100vh;
    min-height: 600px;
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
        transition: width .45s cubic-bezier( 0.79, 0.33, 0, 0.93 );
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
const MyPhotoAnimation = keyframes`
    from{
        opacity: 0;
        filter: blur(10px);
        scale: 1.06;
    }
    to{
        opacity: 1;
        filter: blur(0);
        scale: 1;
    }

`
export const MyPhoto = styled(Image)`
    position: absolute;
    bottom: -9%;
    left: 50%;
    transform: translateX(-54%);
    z-index: 10;
    width: auto;
    height: 108%;
    opacity: 0;
    filter: blur(10px);
    scale: 1.1;
    animation: ${MyPhotoAnimation} 1s cubic-bezier( 0.38, 0.54, 0.17, 0.97 ) 1s forwards;
`;

const NameAnimation = keyframes`
    from{
        opacity: 0;
        transform: translateY(3%);
    }
    to{
        opacity: 1;
        transform: translateY(0%);

    }

`

export const Name = styled.h1`
    position: absolute;
    font-family: 'raleway-extrabold', sans-serif;
    color: #fff;
    font-size: 32.5vh;
    z-index: 6;
    opacity: 0;
    transform: translateY(1%);
    animation: ${NameAnimation} 1s cubic-bezier( 0.38, 0.54, 0.17, 0.97 ) .5s forwards;
`;

const CircleAnimation = keyframes`
    from{
        opacity: 0;
        scale: .8;
    }
    to{
        opacity: 1;
        scale: 1;

    }

`

export const Circle = styled.div`
    width: 75vh;
    height: 75vh;
    border-radius: 100%;
    background: radial-gradient(circle, #633BC1, #662AF5);
    box-shadow: 0 0 30px rgba(102, 42, 245, .55);
    z-index: 5;
    opacity: 0;
    scale: .9;
    animation: ${CircleAnimation} 1s cubic-bezier( 0.38, 0.54, 0.17, 0.97 ) 1.5s forwards;
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
    transition: .4s ease-in-out;
    &:hover{
        background-color: #776fff;
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
    opacity: .11;
`;

export const GridItem = styled.div`
    width: 100%;
    height: 100%;
    border-left: 1px solid #fff;
    position: relative;
    &:first-child{
        border-left: none;
    }
`;
const ElipseAnimation = keyframes`
    from{
        opacity: 0;
        scale: .7;
    }

    to{
        opacity: .4;
        scale: 1;
    }
`

export const Elipse = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 100%;
    border: 100px solid #fff;
    position: absolute;
    opacity: 0;
    scale: .7;
    left: -168px;
    top: -228px;
    animation: ${ElipseAnimation} 1s cubic-bezier( 0.38, 0.54, 0.17, 0.97 ) 1.5s forwards;
`;

const ElementBackgroundAnimation = keyframes`
    from{
        
        top: 20%;
    }

    to{
        top: 80%;
    }
`
const ElementBackgroundRotation = keyframes`
    from{
        rotate: 45deg;
    }
    to{
        rotate: 315deg;
    }
`

export const ElementBackground = styled(Image)`
    position: absolute;
    &:nth-child(1){
        left: -3.9px;
        animation: ${ElementBackgroundAnimation} 2s cubic-bezier( 0.55, 0.05, 0.4, 0.98 ) 3s alternate infinite ;
    }

    &:nth-child(2){
        right: -9.25px;
        rotate: 45deg;
        top: 76px;
        animation: ${ElementBackgroundRotation} 1.5s cubic-bezier( 0.55, 0.05, 0.4, 0.98 ) 3s alternate infinite;
    }
`;

const ElementBackgroundLastAnimation = keyframes`
    from{
        
        bottom: 29%;
    }

    to{
        bottom: 88%;
    }
`

const ElementBackgroundLastRotation = keyframes`
    from{
        rotate: 45deg;
    }
    to{
        rotate: 315deg;
    }
`
export const ElementBackgroundLast = styled(Image)`
    position: absolute;
    &:nth-child(1){
        left: -4px;
        animation: ${ElementBackgroundLastAnimation} 2.5s cubic-bezier( 0.55, 0.05, 0.4, 0.98 ) 3s alternate infinite ;
    }

    &:nth-child(2){
        right: -9.25px;
        bottom: 167px;
        animation: ${ElementBackgroundLastRotation} 1.5s cubic-bezier( 0.55, 0.05, 0.4, 0.98 ) 3s alternate infinite;
    }
`;


const EmergeCrown = keyframes`
    from{
        opacity: 0;
        bottom: 26%;
        left: 86%;
    }
    to{
        bottom: 15%;
        left: 5%;
        opacity: 1;
    }
`;

export const Crown = styled(Image)`
    width: auto;
    height: auto;
    position: absolute;
    opacity: 0;
    bottom: 26%;
    left: 86%;
    height: 100px;
    animation: ${EmergeCrown} ${EmergeTime};
`;

const EmergeLogoFill = keyframes`
    from{
        opacity: 0;
        right: -19%;
        top: 23%;
    }
    to{
        right: 10%;
        top: 11%;
        opacity: 1;
    }
`;

export const LogoFill = styled(Image)`
    position: absolute;
    opacity: 0;
    right: -19%;
    top: 23%;
    height: 88px;
    width: auto;
    animation: ${EmergeLogoFill} ${EmergeTime};
`

const EmergeRectLogo = keyframes`
    from{
        top: 21%;
        left: -45%;
        opacity: 0;
    }
    to{
        top: 10%;
        left: 17%;
        opacity: 1;
    }
`

export const RectLogo = styled(Image)`
    position: absolute;
    height: 108px;
    width: auto;
    top: 21%;
    left: -45%;
    opacity: 0;
    animation: ${EmergeRectLogo} ${EmergeTime};
`
const EmergeCrownBase = keyframes`
    from{
        bottom: 23%;
        left: -21%;
        opacity: 0;
    }
    to{
        bottom: 10%;
        left: 21%;
        opacity: 1;
    }
`

export const CrownBase = styled(Image)`
    position: absolute;
    width: auto;
    height: auto;
    bottom: 23%;
    left: -21%;
    opacity: 0;
    animation: ${EmergeCrownBase} ${EmergeTime};
`

export const Test = styled.section`
    width: 100vw;
    height: 100vh;
`;
