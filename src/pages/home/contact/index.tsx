import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { Section, FormContainer, Header, Title, Subtitle, Form, Input, Message, Button,
    InfoContactContainer, InfoContact, CityName, Email, Phone, SocialMediaContainer, 
    IconContainer, SendIcon
} from './style';

import gitubLogo from 'src/assets/icons/github.svg';
import linkedinLogo from 'src/assets/icons/linkedin.svg';
import behanceLogo from 'src/assets/icons/behance.svg';
import sendIcon from 'src/assets/icons/send.svg';

const Contact = () =>{

    return(
        <Section>
            <FormContainer>
                <Header>
                    <Title>Let's talk</Title>
                    <Subtitle>Let's make something innovative and creative?</Subtitle>
                </Header>
                <Form>
                    <Input placeholder='Name' required/>

                    <Input placeholder='Email' required/>

                    <Input placeholder='Subject' required/>

                    <Message placeholder='Message' required/>
                    <Button>
                        Send
                        <SendIcon src={sendIcon} width={20} height={20} alt='send icon' draggable={false}/>
                    </Button>
                </Form>
            </FormContainer>
            
            <InfoContactContainer>
                <InfoContact>
                    <CityName>Lauro de Freitas, BA - Br</CityName>
                    <Email>marconeribeiro22@gmail.com</Email>
                    <Phone>+55 71 98709-6256</Phone>
                    
                    <SocialMediaContainer>
                        <Link href='https://github.com/M4RC0N3' target='_blank'>
                            <IconContainer>
                                <Image src={gitubLogo} width={20} height={20} alt='github logo' draggable={false}/>
                            </IconContainer>
                        </Link>

                        <Link href='https://www.behance.net/marconeribeiro1' target='_blank'>
                            <IconContainer>
                                <Image src={behanceLogo} width={20} height={13} alt='behance logo' draggable={false}/>
                            </IconContainer>
                        </Link>

                        <Link href='https://www.linkedin.com/feed/' target='_blank'>
                            <IconContainer>
                                <Image src={linkedinLogo} width={20} height={18} alt='linkedin logo' draggable={false}/>
                            </IconContainer>
                        </Link>
                    </SocialMediaContainer>
                </InfoContact>
            </InfoContactContainer>
        </Section>
    );
}

export default Contact;