import styled from "styled-components";

export const SignUpLayout = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    width: 63.125rem;
`

export const TitleImg = styled.img`
    margin-bottom: 3vh;

    width: 8.75rem;
    height: 4.375rem;
`

export const InputRow = styled.div`
    margin-top: 2.5rem;

    display: flex;
    justify-content: space-between;
`

export const InputBox = styled.div``

export const InputLabel = styled.p`
    display: flex;
    justify-content: start;

    color: #2F2F32;
    font-size: 1.125rem;
    font-weight: 400;
`

export const Input = styled.input`
    width: calc(30rem - 1.25rem);
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

export const FileInputBox = styled.div`
    width: 30rem;

    display: flex;
    justify-content: space-between;
`

export const FileInput = styled.input`
    width: calc(25rem - 1.25rem);
    height: 4.375rem;

    border-radius: 15px;
    border: 1px solid;
    padding-left: 1.25rem;
`

export const FileLabelBox = styled.div`
    width: 4.375rem;
    height: 4.375rem;

    border-radius: 0.9375rem;
    background: #5567D3;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const FileLabel = styled.label`
    color: #FFF;
    font-size: 0.75rem;
    font-weight: 500;
`

export const FileInputBtn = styled.input`
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
`

export const SubmitBox = styled.div`
    padding-top: 4.38rem;

    margin: auto;
    width: 30rem;
`

export const SubmitBtn = styled.button`
    width: 30rem;
    height: 5rem;

    border: none;
    border-radius: 0.9375rem;
    background: #3F53CC;

    color: #FFF;
    font-size: 1.5rem;
    font-weight: 700;
`

export const DirectionBox = styled.div`
    display: flex;

`

export const isAccountLabel = styled.p`
    font-size: 0.875rem;
    font-weight: 500;
`   

export const SignInBtn = styled.button`
    border: none;
    background-color: #fff;
    color: #2D47E5;
    font-size: 0.875rem;
    font-weight: 500;
    text-decoration-line: underline;
`



