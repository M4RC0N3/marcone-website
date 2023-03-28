import React from 'react';
import Image from 'next/image';

import { Section, TitleSection, Do, DesignContainer, DevContainer, AboutDevWorkContainer, AboutDesignWorkContainer,
    Text, ImageContainer, Title, Content, ToolsContainer, Tool } from './style';

import brushs from 'src/assets/image/brushs.jpg';
import code from 'src/assets/image/code.jpg';

//dev icons
import ReactIcon from 'src/assets/icons/react-color.svg';
import SassIcon from 'src/assets/icons/sass-color.svg';
import JavascriptIcon from 'src/assets/icons/javascript-color.svg';
import TypescriptIcon from 'src/assets/icons/typescript-color.svg';
import FirebaseIcon from 'src/assets/icons/firebase.svg';
import IonicIcon from 'src/assets/icons/ionic.svg';
import NextJsIcon from 'src/assets/icons/next-js.svg';
import HtmlIcon from 'src/assets/icons/html.svg';
import GitIcon from 'src/assets/icons/git.svg';

//design icons
import FigmaIcon from 'src/assets/icons/figma.svg';
import PhotoshopIcon from 'src/assets/icons/photoshop-color.svg';
import AdobeXdIcon from 'src/assets/icons/adobexd-color.svg';
import IllustratorIcon from 'src/assets/icons/illustrator-color.svg';

const About = () =>{

    return(
        <Section>
            <TitleSection>WHAT <Do>I DO</Do></TitleSection>
            <DesignContainer>
                <AboutDesignWorkContainer>
                    <Text id='design'>
                        <Title>UI/UX Design</Title>
                        <Content>As a UI/UX designer, I am very demanding when it comes to accuracy and practicality. My goal is always to reach the desired audience for a particular function, whether it&apos;s a specific group or a more general one. To achieve this accuracy, I conduct extensive research and study cases to ensure that I am on the right track. To compose my work, I use some of the tools listed below:</Content>
                    </Text>
                    <ImageContainer>
                        <Image src={brushs} width={833} height={833} alt='github logo' draggable={false}></Image>
                    </ImageContainer>
                </AboutDesignWorkContainer>
                <ToolsContainer id='design'>
                    <Tool id ='design'>
                        <Image src={FigmaIcon} width={24} height={36} alt='Figma logo' draggable={false}></Image>
                    </Tool>
                    <Tool id ='design'>
                        <Image src={PhotoshopIcon} width={35} height={31} alt='Photoshop logo' draggable={false}></Image>
                    </Tool>
                    <Tool id ='design'>
                        <Image src={AdobeXdIcon} width={41} height={31} alt='AdobeXd logo' draggable={false}></Image>
                    </Tool>
                    <Tool id ='design'>
                        <Image src={IllustratorIcon} width={32} height={31} alt='Illustrator logo' draggable={false}></Image>
                    </Tool>
                </ToolsContainer>
            </DesignContainer>
            <DevContainer>
                <AboutDevWorkContainer>
                    <Text>
                        <Title>Frontend  Developing</Title>
                        <Content>I strongly believe that in order to develop a good front-end project, it is necessary to be directly aligned with the UI/UX design thinking. I like to maintain alignment within the team to ensure that the project is performative, accessible, and easily understood. To compose my work, I use some of the tools listed below:</Content>
                    </Text>
                    <ImageContainer>
                        <Image src={code} width={883} height={544} alt='github logo' draggable={false}></Image>
                    </ImageContainer>
                </AboutDevWorkContainer>
                <ToolsContainer>    
                    <Tool>
                        <Image src={ReactIcon} width={57} height={50} alt='React logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={SassIcon} width={53} height={40} alt='Sass logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                    <Image src={JavascriptIcon} width={40} height={29} alt='Javacsript logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={TypescriptIcon} width={43} height={28} alt='Typescript logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={FirebaseIcon} width={29} height={40} alt='Firebase logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <p style={{fontSize: '2rem'}}>💅</p>
                    </Tool>
                    <Tool>
                        <Image src={IonicIcon} width={45} height={45} alt='Ionic logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={NextJsIcon} width={45} height={45} alt='NextJs logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={HtmlIcon} width={38} height={45} alt='Html logo' draggable={false}></Image>
                    </Tool>
                    <Tool>
                        <Image src={GitIcon} width={45} height={45} alt='Git logo' draggable={false}></Image>
                    </Tool>
                </ToolsContainer>
            </DevContainer>
        </Section>
    );
}

export default About