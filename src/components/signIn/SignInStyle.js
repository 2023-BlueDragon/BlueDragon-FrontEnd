import styled from "styled-components";

export const SignInLayout = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    margin-bottom: 10vh;

    width: 30rem;
    height: 33.125rem;
`

export const TitleImg = styled.img`
    width: 8.75rem;
    height: 4.375rem;
`

export const InputBox = styled.div`
    margin-top: 2.5rem; 
`

export const InputLabel = styled.p`
    display: flex;
    justify-content: start;

    color: #2F2F32;
    font-size: 1.125rem;
    font-weight: 400;
`

export const Input = styled.input`
    width: 100%;
    height: 4.375rem;

    border-radius: 15px;
    border: 1px solid;
    padding-left: 1.25rem;

    font-size: 1.25rem;
    
    ::placeholder{
        color: rgba(128, 128, 128, 0.50);
        font-weight: 800;
    }
`

export const SubmitBox = styled.div`
    margin-top: 4.38rem;
`

export const SubmitBtn = styled.button`
    width: 100%;
    height: 5rem;

    border-radius: 0.9375rem;
    background: #3F53CC;

    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;
`

export const DirectionBox = styled.div`
    margin-top: 0.6rem;

    display: flex;

`

export const isAccountLabel = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
`

export const SignUpBtn = styled.button`
    margin-left: 0.6rem;

    border: none;
    background-color: #fff;
    color: #2D47E5;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration-line: underline;

    cursor: pointer;
`
