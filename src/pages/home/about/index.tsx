import React from 'react';

import { Section, TextSide, PhotoSide, Title, Content, Photo, Flag, LogoVariation, Logo } from './style';

import myPhoto from 'src/assets/image/my-photo-black.png';
import marconeLogo from 'src/assets/image/logo.svg'
import prismaLogo from 'src/assets/image/prisma.svg';
import crownLogo from 'src/assets/image/crown-black.svg';
import crownBaseLogo from 'src/assets/image/crown-base-black.svg';
const About = () =>{

    return(
        <Section id='about'>
            <TextSide>
                <Title>About</Title>
                <Content>I am a React Js and React Native developer, focused on making the user experience amazing. I have been programming for 5 years and working with frontend development for 3 years, and since then I have been specializing more and more in what I do.To achieve my goal of making the development and user experience amazing and scalable, I take advantage of the great possibility that frontend offers of mixing logic and creativity, combining these two points I can give assertiveness to the projects I work on.</Content>
            </TextSide>
            <PhotoSide>
                <LogoVariation id='prisma' src={prismaLogo} width={78.65} height={50.3} alt='prisma logo variaton' draggable={false}/>
                <LogoVariation id='crown' src={crownLogo} width={54.68} height={61.22} alt='crown logo variaton' draggable={false}/>
                <LogoVariation id='crown-base' src={crownBaseLogo} width={85.77} height={53.95} alt='crown base logo variaton' draggable={false}/>
                
                <Photo src={myPhoto} width={1061} height={1239} alt='minha logo' draggable={false}/>
                <Flag>
                    <Logo src={marconeLogo} width={650.21} height={398.78}alt='marcone logo' draggable={false}/>
                </Flag>
            </PhotoSide>
        </Section>
    );
}

export default About