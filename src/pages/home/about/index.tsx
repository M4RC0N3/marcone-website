import React from 'react';

import { Section, TextSide, PhotoSide, Title, Content, Photo, Flag, LogoVariation, Logo } from './style';

import myPhoto from 'src/assets/image/my-photo-black.png';
import marconeLogo from 'src/assets/image/logo.svg'
import prismaLogo from 'src/assets/image/prisma.svg';
import crownLogo from 'src/assets/image/crown-black.svg';
import crownBaseLogo from 'src/assets/image/crown-base-black.svg';
const About = () =>{

    return(
        <Section>
            <TextSide>
                <Title>About</Title>
                <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non orci ornare, auctor mauris quis, ultricies lacus. Vestibulum rutrum sed turpis id mollis. Nulla pulvinar elit eu sollicitudin eleifend. Morbi pulvinar fringilla ipsum, et rhoncus velit. Donec laoreet sem suscipit felis ullamcorper, id ultrices nisi facilisis. Integer id egestas enim. Curabitur mi elit, iaculis eget nunc vel, feugiat varius risus. Integer hendrerit ultrices congue.</Content>
            </TextSide>
            <PhotoSide>
                <LogoVariation id='prisma' src={prismaLogo} width={78.65} height={50.3} alt='prisma logo variaton' draggable={false}/>
                <LogoVariation id='crown' src={crownLogo} width={97.68} height={61.22} alt='crown logo variaton' draggable={false}/>
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