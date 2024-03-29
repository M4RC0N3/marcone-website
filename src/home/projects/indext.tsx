import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Section, Top, Title, Subtitle, ProjectContainer, ProjectActionContainer,
    ProjectAbout, ProjectType, ProjectTitle, ProjectDescription, Button, NameButton, 
    Arrow ,ProjectPreview, ImageContainer,StackContainer, Stack
} from './style';

//icons
import arrow from 'src/assets/icons/arrow-button.svg';
import adobexd from 'src/assets/icons/adobexd.svg';
import illustrator from 'src/assets/icons/illustrator.svg';
import javascript from 'src/assets/icons/javascript.svg';
import photoshop from 'src/assets/icons/photoshop.svg';
import react from 'src/assets/icons/react.svg';
import sass from 'src/assets/icons/sass.svg';
import typescript from 'src/assets/icons/typescript.svg'; 

//banners
import corujaBanner from 'src/assets/image/coruja-banner.png';
import paymentScreenBanner from 'src/assets/image/payment-screen.png';
import vigasBanner from 'src/assets/image/vigas-banner.png';
import digipeksBanner from 'src/assets/image/digipeks-banner.png';
const Projects = () => {
  return (
    <Section id='projects'>
        <Top>
            <Title>/My Projects</Title>
            <Subtitle>I have been making it with much love for three years.</Subtitle>
        </Top>
        <ProjectContainer style={{margin: '0px'}}>
            <ProjectActionContainer>
                <ProjectAbout>
                    <ProjectType>Landig Page</ProjectType>
                    <ProjectTitle>My Project</ProjectTitle>
                    <ProjectDescription>I was amazed by the beauty of Tech Owl and its animations.</ProjectDescription>
                </ProjectAbout>
                <Link href={`https://m4rc0n3.github.io/coruja/`} target='_blank' style={{textDecoration: 'none'}}>
                    <Button>
                        <NameButton>View project</NameButton>
                        <Arrow src={arrow} width={81} height={9} alt='view project' draggable={false}></Arrow>
                    </Button>
                </Link>
            </ProjectActionContainer>
            <ProjectPreview>
                <ImageContainer>
                    <Image src={corujaBanner} width={683} height={1214} style={{width: '100%', height: 'auto'}} alt='landing page coruja banner' draggable={false}></Image>
                </ImageContainer>
                <StackContainer>
                    <Stack style={{backgroundColor: '#0093FF'}}>
                        <Image src={react} width={56} height={49} alt='react icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#FF519C'}}>
                        <Image src={sass} width={53} height={40} alt='sass icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#FFE95A'}}>
                        <Image src={javascript} width={40} height={29} alt='javascript icon' draggable={false}></Image>
                    </Stack>
                </StackContainer>
            </ProjectPreview>
        </ProjectContainer>
        <ProjectContainer>
            <ProjectActionContainer>
                <ProjectAbout>
                    <ProjectType>Web App</ProjectType>
                    <ProjectTitle>Payment screen</ProjectTitle>
                    <ProjectDescription>I made a payment knowing exactly where each content of the card is located.</ProjectDescription>
                </ProjectAbout>
                <Link href={`https://m4rc0n3.github.io/payment-screen/`} target='_blank' style={{textDecoration: 'none'}}>
                    <Button>
                        <NameButton>View project</NameButton>
                        <Arrow src={arrow} width={81} height={9} alt='view project' draggable={false}></Arrow>
                    </Button>
                </Link>
            </ProjectActionContainer>
            <ProjectPreview>
                <ImageContainer>
                    <Image src={paymentScreenBanner} width={683} height={370} style={{width: '100%', height: 'auto'}} alt='landing page coruja banner' draggable={false}></Image>
                </ImageContainer>
                <StackContainer>
                    <Stack style={{backgroundColor: '#0093FF'}}>
                        <Image src={react} width={56} height={49} alt='react icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#FF519C'}}>
                        <Image src={sass} width={53} height={40} alt='sass icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#007ACC'}}>
                        <Image src={typescript} width={43} height={28} alt='javascript icon' draggable={false}></Image>
                    </Stack>
                </StackContainer>
            </ProjectPreview>
        </ProjectContainer>
        <ProjectContainer>
            <ProjectActionContainer>
                <ProjectAbout>
                    <ProjectType>Web Design</ProjectType>
                    <ProjectTitle>Vigas imóveis</ProjectTitle>
                    <ProjectDescription>The minimalist design landing page</ProjectDescription>
                </ProjectAbout>
                <Link href={`https://www.behance.net/gallery/161792265/Vigas-landing-page`} target='_blank' style={{textDecoration: 'none'}}>
                    <Button>
                        <NameButton>View project</NameButton>
                        <Arrow src={arrow} width={81} height={9} alt='view project' draggable={false}></Arrow>
                    </Button>
                </Link>
            </ProjectActionContainer>
            <ProjectPreview>
                <ImageContainer>
                    <Image src={vigasBanner} width={683} height={370} style={{width: '100%', height: 'auto'}} alt='landing page coruja banner' draggable={false}></Image>
                </ImageContainer>
                <StackContainer>
                    <Stack style={{backgroundColor: '#FF9100'}}>
                        <Image src={illustrator} width={32} height={31} alt='illustrator icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#FF61F6'}}>
                        <Image src={adobexd} width={41} height={31} alt='adobe xd icon' draggable={false}></Image>
                    </Stack>
                    <Stack style={{backgroundColor: '#0099FF'}}>
                        <Image src={photoshop} width={35} height={31} alt='photoshop icon' draggable={false}></Image>
                    </Stack>
                </StackContainer>
            </ProjectPreview>
        </ProjectContainer>
    </Section>
  );
}

export default Projects;