import React from 'react';

import { Background, Card, CardTitle, CardDescription } from './style';
import Image from 'next/image';

import SentImage from 'src/assets/image/sent.svg';
const Sent = ()=>{
    return(
        <Background>
            <Card>
                <CardTitle>Email successfully sent!</CardTitle>
                <Image style={{width: '100%'}} width={247} height={222} src={SentImage} alt='email sent' draggable={false}/>
                <CardDescription>Thank you, I will contact you soon.</CardDescription>
            </Card>
        </Background>
    );
}

export default Sent;