import React,{ useState, useEffect } from 'react';
import { Page,  HomeContainer, Header, Logo, NavBar, LinkListing, Link, CurriculumDownloadButton, MyPhoto, 
Name, Circle, FollowContainer, Follow, Background, GridItem,  Test } from './style';
import myPhoto from '../../assets/image/my-photo.png';
import marconeLogo from '../../assets/image/logo.svg';
const Home = () => {

  return (
    <Page>
      <HomeContainer>
        <Header>
          <Logo src={marconeLogo} width={59.22} height={34.78}alt='marcone logo' draggable={false}></Logo>
          <NavBar>
            <LinkListing>
              <li><Link href="home">Home</Link></li>
              <li><Link href="about">About</Link></li>
              <li><Link href="contact">Contact</Link></li>
              <li><Link href="projects">Projects</Link></li>
            </LinkListing>
          </NavBar>
          <CurriculumDownloadButton> Download CV </CurriculumDownloadButton>
        </Header>
        <MyPhoto src={myPhoto} width={914} height={977} alt='marcone photo' draggable={false}></MyPhoto>
        <Name>MARCONE</Name>
        <Circle></Circle>
        <FollowContainer>
          <Follow>Follow</Follow>
        </FollowContainer>
        <Background>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
          <GridItem/>
        </Background>
      </HomeContainer>
      {<Test></Test>}
    </Page>
  );
}

export default Home;