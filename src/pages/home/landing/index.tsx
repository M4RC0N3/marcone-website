import React, { useState } from 'react';

import { Page,  HomeContainer, Header, MenuContainer, MenuTrigger, MenuLabel, MenuItem, MenuNavBar, MenuLinkListing,
  MenuNavLink, MenuCurriculumDownloadButton, Logo, NavBar, LinkListing, NavLink, CurriculumDownloadButton,
  MyPhoto, Name, Circle, BottomContainer, FollowContainer, Follow, LinksContainer, IconBackground,
  ScrollDownContainer, ScrollDown,Background, GridItem, Elipse, ElementBackground, ElementBackgroundLast,
  Crown, LogoFill, RectLogo, CrownBase } from './style';

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
import plus from 'src/assets/icons/plus.svg';

import crownBase from 'src/assets/image/crown-base.svg';
import crown from 'src/assets/image/crown.svg';
import logoFill from 'src/assets/image/logo-fill.svg';
import rectLogo from 'src/assets/image/rect-logo.svg';

const Home = () => {
  const [menuView, setMenuView] = useState(false);
  const HandleMenu = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setMenuView(event.target.checked);
  }

  const HandleScrollDown = ()=>{
    window.scrollTo(0, 800);
  }

  return (
    <Page>
      <HomeContainer>
        <MenuNavBar view={menuView}>
          <MenuLinkListing>
            <li><MenuNavLink href="#home">Home</MenuNavLink></li>
            <li><MenuNavLink href="#about">About</MenuNavLink></li>
            <li><MenuNavLink href="#projects">Projects</MenuNavLink></li>
            <li><MenuNavLink href="#contact">Contact</MenuNavLink></li>
          <MenuCurriculumDownloadButton> Download CV </MenuCurriculumDownloadButton>
          </MenuLinkListing>
        </MenuNavBar>
        <Header>
          <Logo src={marconeLogo} width={59.22} height={34.78}alt='marcone logo' draggable={false}></Logo>
          <NavBar>
            <LinkListing>
              <li><NavLink href="#home">Home</NavLink></li>
              <li><NavLink href="#about">About</NavLink></li>
              <li><NavLink href="#projects">Projects</NavLink></li>
              <li><NavLink href="#contact">Contact</NavLink></li>
            </LinkListing>
          </NavBar>
          <CurriculumDownloadButton> Download CV </CurriculumDownloadButton>
          <MenuContainer>
            <MenuTrigger type="checkbox" id='checkbox-menu' onChange={HandleMenu}/>
            <MenuLabel htmlFor="checkbox-menu">
              <MenuItem/>
              <MenuItem/>
            </MenuLabel>
          </MenuContainer>
        </Header>
        <MyPhoto src={myPhoto} width={1080} height={1142} alt='marcone photo' draggable={false} priority/>
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

              <Link href='https://www.linkedin.com/in/marcone-ribeiro-947184163/' target='_blank'>
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
          <ScrollDownContainer onClick={HandleScrollDown}>
            <ScrollDown>Scroll down</ScrollDown>
            <Image src={arrowDown} width={8} height={81} alt='scroll to down' draggable={false}/>
          </ScrollDownContainer>
        </BottomContainer>
        <Background>
          <GridItem>
            <Elipse/>
          </GridItem>
          <GridItem>
            <ElementBackground src={bar} width={8} height={14} alt='background element bar' draggable={false}/>
            <ElementBackground src={plus} width={20} height={20} alt='background element plus' draggable={false}/>
            <Crown src={crown} width={97} height={61} alt='marcone logo variation' draggable={false}/>
            <LogoFill src={logoFill} width={85} height={49} alt='marcone logo variation' draggable={false}/>
          </GridItem>
          <GridItem/>
          <GridItem/>
          <GridItem>
            <ElementBackgroundLast src={bar} width={8} height={14} alt='background element bar' draggable={false}/>
            <ElementBackgroundLast src={plus} width={20} height={20} alt='background element plus' draggable={false} />
            <RectLogo src={rectLogo} width={190} height={114} alt='marcone logo variation' draggable={false}/>
            <CrownBase src={crownBase} width={85} height={53} alt='marcone logo variation' draggable={false}/>
          </GridItem>
          <GridItem/>
        </Background>
      </HomeContainer>
    </Page>
  );
}

export default Home;