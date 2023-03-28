
//Sections
import Home from 'src/home/landing/index';
import About from 'src/home/about/index';
import Tolls from 'src/home/tools/index';
import Projects from 'src/home/projects/indext';
import Contact from 'src/home/contact/index';

import Head from 'next/head';

export default function Test() {
  return (
    <>
      <Head>
        <title>Marcone Portfolio</title>
        <meta name="description" content="This website was created with the purpose of sharing information about my professional life and showcasing my work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#090513" />
        <meta name="description" content="Free Web tutorials"/>
        <meta name="author" content="Marcone Ribeiro"/>
        <meta name="keywords" content="ReactJs, ReactNative, Sass, javascript, typescript, firebase, styled-components, ionic, NextJs, HMTL, Git, github, gitlab, vercel, Figma, Photoshop, AdobeXd, Adobe Illustrator, React developer, front-end developer, developer, desenolvedor frontend, desenvolvedor, user experience, user interface, UI/UX, landing page, webapp, web design, brazilian developer"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home/>
      <About/>
      <Tolls/>
      <Projects/>
      <Contact/>
    </>
  )
}

