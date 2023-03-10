import React from 'react';
import Image from 'next/image';

import { Section, TitleSection, Do, DesignContainer, DevContainer, AboutDevWorkContainer, AboutDesignWorkContainer,
    Text, ImageContainer, Title, Content, ToolsContainer, Tool } from './style';

import brushs from 'src/assets/image/brushs.jpg';
import code from 'src/assets/image/code.jpg'
const About = () =>{

    return(
        <Section>
            <TitleSection>WHAT <Do>I DO</Do></TitleSection>
            <DesignContainer>
                <AboutDesignWorkContainer>
                    <Text id='design'>
                        <Title>UI/UX Design</Title>
                        <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non orci ornare, auctor mauris quis, ultricies lacus. Vestibulum rutrum sed turpis id mollis. Nulla pulvinar elit eu sollicitudin eleifend. Morbi pulvinar fringilla ipsum, et rhoncus velit.</Content>
                    </Text>
                    <ImageContainer>
                        <Image src={brushs} width={833} height={833} alt='github logo' draggable={false}></Image>
                    </ImageContainer>
                </AboutDesignWorkContainer>
                <ToolsContainer id='design'>
                    <Tool id ='design'></Tool>
                    <Tool id ='design'></Tool>
                    <Tool id ='design'></Tool>
                    <Tool id ='design'></Tool>
                    <Tool id ='design'></Tool>
                </ToolsContainer>
            </DesignContainer>
            <DevContainer>
                <AboutDevWorkContainer>
                    <Text>
                        <Title>Frontend  Developing</Title>
                        <Content>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non orci ornare, auctor mauris quis, ultricies lacus. Vestibulum rutrum sed turpis id mollis. Nulla pulvinar elit eu sollicitudin eleifend. Morbi pulvinar fringilla ipsum, et rhoncus velit.</Content>
                    </Text>
                    <ImageContainer>
                        <Image src={code} width={883} height={544} alt='github logo' draggable={false}></Image>
                    </ImageContainer>
                </AboutDevWorkContainer>
                <ToolsContainer>    
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                    <Tool></Tool>
                </ToolsContainer>
            </DevContainer>
        </Section>
    );
}

export default About