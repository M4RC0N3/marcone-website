import styled from 'styled-components';
import Image from 'next/image';
export const Section = styled.section`
    width: 100vw;
    min-height: 1059px;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 130px 100px 0px;
    box-sizing: border-box;
`;

export const FormContainer = styled.div``;

export const Header = styled.div`
    max-width: 300px;
`;
export const Title = styled.h2`
    font-size: 2rem;
    font-family: 'raleway-semibold', sans-serif;
`;
export const Subtitle = styled.h3`
    font-size: 1.2rem;
    font-family: 'raleway-regular', sans-serif;
    margin-top: 20px;
`;
export const Form = styled.form`
    max-width: 766px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    justify-content: space-between;
`;
export const Input = styled.input`
    font-family: 'releway-regular', sans-serif;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #000;
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
    margin-bottom: 70px;
    padding-bottom: 8px;
    &:focus-visible{
        outline: none;
    }
    &:focus{
        border-bottom-color: #966aff;
    }
    &::placeholder{
        margin-bottom: 10px;
    }
`;
export const Message = styled.textarea`
    font-family: 'releway-regular', sans-serif;
    max-width: 100%;
    max-height: 210px;
    min-height: 30px;
    font-size: 1.1rem;
    border: none;
    border-bottom: 2px solid #000;
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
    &:focus-visible{
        outline: none;
    }
    &:focus{
        border-bottom-color: #966aff;
    }
`;
export const Button = styled.button`
    width: 135px;
    font-family: 'releway-regular', sans-serif;
    font-size: 1.5rem;
    background-color: #6570ff;
    color: #fff;
    box-sizing: border-box;
    padding: 8px;
    border: none;
    margin-top: 55px;
    box-shadow: 0 8px 24px rgba(101, 112, 225, .24);
    cursor: pointer;
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
    margin-left: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    &:hover{
        margin-left: 15px;
    }
    &:hover > img{
        margin-right: -15px;
    }
`;
export const SendIcon = styled(Image)`
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
`;
export const InfoContactContainer = styled.div`
    display: flex;
    justify-content: end;
`;
export const InfoContact = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
`;
export const CityName = styled.h5`
    font-family: 'quicksand-regular', sans-serif;
`;
export const Email = styled.h5`
    font-family: 'quicksand-regular', sans-serif;

`;
export const Phone = styled.h5`
    font-family: 'quicksand-regular', sans-serif;

`;
export const SocialMediaContainer = styled.div`
    width: 115px;
    justify-content: space-between;
    display: flex;
    align-items: end;
`;
export const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    transition: .3s ease-out;
    &:hover{
        background-color: #6570ff;
    }
`;
