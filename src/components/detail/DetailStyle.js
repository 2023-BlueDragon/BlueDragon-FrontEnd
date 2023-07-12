import styled from "styled-components"

export const DetailLayout = styled.div`
    padding-bottom: 1.8rem;

    background: #F0F2F4;
`

export const TitleLogo = styled.img`
    width: 8.75rem;
    height: 4.375rem;

    position: absolute;
    top: 1.88rem;
    left: 3.13rem;
`

export const SearchBackBox = styled.div`
    width: 100%;
    height: 12.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
`

export const SearchBox = styled.div`
    width: 62.5rem;
    height: 4.375rem;

    border: none;
    border-radius: 3.125rem;
    background: #EDF0FF;

    display: flex;
    align-items: center;

    position: relative;
`

export const SearchInput = styled.input`
    margin-left: 2.1rem;
    margin-right: 5rem;

    border: none;
    background: none;

    flex: 1;

    font-size: 1.125rem;
    font-weight: 400;
    
    ::placeholder{
        color: rgba(128, 128, 128, 0.50);
    }

    &:focus{
        outline: none;
    }
`

export const SearchIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    margin-right: 2.1rem;
`

export const UserBox = styled.div`
    position: absolute;
    right: 8.5rem;

    display: flex;
`

export const UserName = styled.p`
    margin-right: 0.5rem;

    color: #2F2F32;
    font-size: 1rem;
    font-weight: 700;
`

export const UserImg = styled.img`
    width: 2.8125rem;
    height: 2.8125rem;
`

export const DetailBox = styled.div`
    margin-bottom: 2.5rem;

    width: 100%;

    background-color: #fff;

    display: flex;
    justify-content: center;
`

export const DetailContentBox = styled.div`
    width: 62.5rem;
`

export const TopInfoBox = styled.div`
    display: flex;
    align-items: center;
`

export const QuestionImg = styled.img`
    width: 3.125rem;
    height: 3.125rem;
`

export const Title = styled.div`
    margin-left: 1.5rem;

    color: #2F2F32;
    font-size: 1.5rem;
    font-weight: 700;
`

export const DetailContentText = styled.div`
    margin-top: 3.1rem;

    color: #2F2F32;
    font-size: 1.125rem;
    font-weight: 500;

    text-align: start;
`

export const DetailWriterInfoBox = styled.div`
    margin-top: 3.5rem;
    margin-bottom: 2.5rem;

    display: flex;
    align-items: center;

`

export const DetailWriterImg = styled.img`
    width: 1.25rem;
    height: 1.25rem;
`

export const DetailWriterName = styled.div`
    margin-left: 0.6rem;

    color: #2F2F32;
    font-size: 0.75rem;
    font-weight: 400;
`

export const DetailWriteTime = styled.div`
    margin: 0.3rem;

    color: #989898;
    font-size: 0.625rem;
    font-weight: 300;
`

export const AnswerContentBox = styled.div`
    width: 62.5rem;

    margin: auto;
`

export const AnswerImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

export const AnsweringHeaderBox = styled.div`
    margin-top: 1.8rem;
    
    padding: 1.8rem 2.5rem;

    display: flex;
    justify-content: space-between;

    width: 100%;
    height: 6.25rem;

    background-color: #fff;
`

export const AnsweringHeaderLabel = styled.p`
    margin-left: 0.9rem;

    color: #2F2F32;
    font-size: 0.875rem;
    font-weight: 400;
`

export const AnsweringHeaderUserBox = styled.div`
    display: flex;
    align-items: center;
`

export const PostAnswerBtn = styled.button`
    width: 6.25rem;
    height: 2.5rem;

    border: none;
    border-radius: 0.3125rem;
    background: #3F53CC;

    color: #FFF;
    font-size: 0.875rem;
    font-weight: 700;

`

export const PostAnswerBox = styled.div`
    width: 100%;

    background-color: #fff;

`

export const AnswerTextarea = styled.textarea`
    margin: 1.5rem 2.5rem;
    width: 90%;

    min-height: 11rem;
    resize: none;
    border: none;

    ::placeholder{
        color: #C1C1C1;
        font-size: 0.875rem;
        font-weight: 400;
    }
`

export const AnswerBtnRow = styled.div`
padding: 1.5rem 2.5rem;

display: flex;
justify-content: space-between;
`

export const ChooseFileLabel = styled.label`
    display: inline-block;

    width: 6.25rem;
    height: 2.5rem;
    border-radius: 0.3125rem;
    background: #D9D9D9;

    line-height: 2.5rem;
`

export const ChooseFile = styled.input`
    width: 0;
    height: 0;
`

export const FileName = styled.input`
    border: none;
    background: none;
`

export const SubmitAnswer = styled.button`
    width: 6.25rem;
    height: 2.5rem;

    color: #FFF;
    font-size: 0.875rem;
    font-weight: 700;

    border: none;
    border-radius: 0.3125rem;
    background: #643FCC;
`
