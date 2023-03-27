import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import Link from 'next/link';
import Image from 'next/image';

import { Section, FormContainer, Header, Title, Subtitle, Form, Input, Message, Button,
    InfoContactContainer, InfoContact, CityName, Email, Phone, SocialMediaContainer, 
    IconContainer, SendIcon, Error
} from './style';

import gitubLogo from 'src/assets/icons/github.svg';
import linkedinLogo from 'src/assets/icons/linkedin.svg';
import behanceLogo from 'src/assets/icons/behance.svg';
import sendIcon from 'src/assets/icons/send.svg';



const Contact = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    
    const [nameValidation, setNameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [subjectValidation, setSubjectValidation] = useState(false);
    const [messageValidation, setMessageValidation] = useState(false);
    const [buttonIsDisable, setButtonIsDisable] = useState(true);

    const handleName = ()=>{
        let regex:any = /^[a-z ,.'-]+$/i;
        return regex.test(name);
    }

    const handleEmail = ()=>{
        let regex:any = /\S+@\S+\.\S+/;
        return regex.test(email);
    }

    useEffect(()=>{
        if(handleName() == true && name.length >=5){
            setNameValidation(true);
        }
        else{
            setNameValidation(false);
        }

        if(handleEmail()){
            setEmailValidation(true);
        }
        else{
            setEmailValidation(false);
        }

        if(subject.length >= 2){
            setSubjectValidation(true);
        }
        else{
            setSubjectValidation(false);
        }

        if(message.length >= 10){
            setMessageValidation(true);
        }
        else{
            setMessageValidation(false);
        }

        if(nameValidation == true && emailValidation == true && subjectValidation == true && messageValidation == true){
            setButtonIsDisable(false);
        }
        else{
            setButtonIsDisable(true);
        }
    })
    const templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }
   function sendEmail(event:any){
        event.preventDefault();
        emailjs.send('service_tryj8io', 'template_87n509o', templateParams, 'k8NhC-4hAtENSx6B4')
            .then((result)=>{
                console.log(result.text);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            },
            (error)=>{
                console.log(error.text);
            });
    }
    return(
        <Section id='contact'>
            <FormContainer>
                <Header>
                    <Title>Let's talk</Title>
                    <Subtitle>Let's make something innovative and creative?</Subtitle>
                </Header>
                <Form onSubmit={sendEmail}>
                    <Error isVisible={nameValidation}>*Please tell me your name</Error>
                    <Input isCorrect={nameValidation} placeholder='Name' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setName(event.target.value)}} required value={name}/>

                    <Error isVisible={emailValidation}>*Enter the valid email. Ex: name@server.com</Error>
                    <Input isCorrect={emailValidation} placeholder='Email' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setEmail(event.target.value)}} required value={email}/>

                    <Error isVisible={subjectValidation}>*Enter the valid subject</Error>
                    <Input isCorrect={subjectValidation} placeholder='Subject' onChange={(event:React.ChangeEvent<HTMLInputElement>)=>{setSubject(event.target.value)}} required value={subject}/>

                    <Error isVisible={messageValidation}>*Your message must be more than 10 characters</Error>
                    <Message isCorrect={messageValidation} placeholder='Message' onChange={(event:any)=>{setMessage(event.target.value)}} required value={message}/>
                    <Button type='submit' disabled={buttonIsDisable}>
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

                        <Link href='https://www.linkedin.com/in/marcone-ribeiro-947184163/' target='_blank'>
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