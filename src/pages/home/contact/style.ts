import styled from 'styled-components';
import Image from 'next/image';
interface Type{
    isVisible: boolean;
}
interface InputType{
    isCorrect: boolean;
}
export const Section = styled.section`
    width: 100vw;
    background-color: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 130px 100px 180px;
    box-sizing: border-box;
    @media (max-width: 710px) {
        grid-template-columns: 1fr;
        padding: 80px 40px 50px;
    }
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
export const Input = styled.input<InputType>`
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
    border-bottom-color: ${(props)=>props.isCorrect == false ? '#ee5253' : props.isCorrect == true ? '#1dd1a1' : '#000'};
`;
export const Message = styled.textarea<InputType>`
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
    border-bottom-color: ${(props)=>props.isCorrect == false ? '#ee5253' : props.isCorrect == true ? '#1dd1a1' : '#000'}
`;
export const Button = styled.button`
    width: 135px;
    font-family: 'releway-regular', sans-serif;
    font-size: 1.5rem;
    background-color: ${(props)=>props.disabled ? '#b0b6ff' : '#6570ff'};
    color: #fff;
    box-sizing: border-box;
    padding: 8px;
    border: none;
    margin-top: 55px;
    box-shadow: ${(props)=>props.disabled ? 'none' : '0 8px 24px rgba(101, 112, 225, .24)'};
    cursor: ${(props)=>props.disabled ? 'not-allowed' : 'pointer'};
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
    margin-left: 0px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    &:hover{
        margin-left: ${(props)=>props.disabled ? '0px' : '15px'};
    }
    &:hover > img{
        margin-right: ${(props)=>props.disabled ? '0px' : '-15px'};
    }
`;
export const SendIcon = styled(Image)`
    transition: .5s cubic-bezier( 0.79,0.33,0,0.93 );
`;
export const InfoContactContainer = styled.div`
    display: flex;
    justify-content: end;
    @media (max-width: 710px) {
        justify-content: start;
    }
`;
export const InfoContact = styled.div`
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;
    @media (max-width: 710px) {
        align-items: flex-start;
        margin-top: 60px;
    }
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

export const Error = styled.p<Type>`
    font-family: 'raleway-bold', sans-serif;
    color: #ee5253;
    margin-bottom: 10px;
    display: ${(props)=>props.isVisible == true ? 'none' : 'block'};
`