import { Page,  HomeContainer, Header, Logo, NavBar, LinkListing, NavLink, CurriculumDownloadButton,
  MyPhoto, Name, Circle, BottomContainer, FollowContainer, Follow, LinksContainer, IconBackground,
  ScrollDownContainer, ScrollDown,Background, GridItem, Elipse, ElementBackground, ElementBackgroundLast,
  Test } from './style';
import React,{ useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';


//images
import myPhoto from 'src/assets/image/my-photo.png';
import marconeLogo from 'src/assets/image/logo.svg';

//icons
import gitubLogo from 'src/assets/icons/github.svg';
import linkedinLogo from 'src/assets/icons/linkedin.svg';
import behanceLogo from 'src/assets/icons/behance.svg';
import arrowDown from 'src/assets/icons/arrow-down.svg';

//elements
import bar from 'src/assets/icons/bar.svg';
import plus from 'src/assets/icons/plus.svg'
const Home = () => {

  return (
    <Page>
      <HomeContainer>
        <Header>
          <Logo src={marconeLogo} width={59.22} height={34.78}alt='marcone logo' draggable={false}></Logo>
          <NavBar>
            <LinkListing>
              <li><NavLink href="home">Home</NavLink></li>
              <li><NavLink href="about">About</NavLink></li>
              <li><NavLink href="contact">Contact</NavLink></li>
              <li><NavLink href="projects">Projects</NavLink></li>
            </LinkListing>
          </NavBar>
          <CurriculumDownloadButton> Download CV </CurriculumDownloadButton>
        </Header>
        <MyPhoto src={myPhoto} width={1080} height={1142} alt='marcone photo' draggable={false}></MyPhoto>
        <Name>MARCONE</Name>
        <Circle></Circle>
        <BottomContainer>
          <FollowContainer>
            <Follow>Follow</Follow>
            <LinksContainer>
              <Link href='https://github.com/M4RC0N3' target='_blank'>
                <IconBackground>
                  <Image src={gitubLogo} width={20} height={20} alt='github logo' draggable={false}/>
                </IconBackground>
              </Link>

              <Link href='https://www.linkedin.com/feed/' target='_blank'>
                <IconBackground>
                  <Image src={linkedinLogo} width={20} height={18} alt='linkedin logo' draggable={false}/>
                </IconBackground>
              </Link>

              <Link href='https://www.behance.net/marconeribeiro1' target='_blank'>
                <IconBackground>
                  <Image src={behanceLogo} width={20} height={13} alt='behance logo' draggable={false}/>
                </IconBackground>
              </Link>
            </LinksContainer>
          </FollowContainer>
          <ScrollDownContainer>
            <ScrollDown>Scroll down</ScrollDown>
            <Image src={arrowDown} width={8} height={81} alt='scroll to down' draggable={false}/>
          </ScrollDownContainer>
        </BottomContainer>
        <Background>
          <GridItem>
            <Elipse></Elipse>
          </GridItem>
          <GridItem>
            <ElementBackground src={bar} width={8} height={14} alt='background element bar' draggable={false}/>
            <ElementBackground src={plus} width={20} height={20} alt='background element plus' draggable={false}/>
          </GridItem>
          <GridItem/>
          <GridItem/>
          <GridItem>
            <ElementBackgroundLast src={bar} width={8} height={14} alt='background element bar' draggable={false}/>
            <ElementBackgroundLast src={plus} width={20} height={20} alt='background element plus' draggable={false} />
          </GridItem>
          <GridItem/>
        </Background>
      </HomeContainer>
      {<Test></Test>}
    </Page>
  );
}

export default Home;