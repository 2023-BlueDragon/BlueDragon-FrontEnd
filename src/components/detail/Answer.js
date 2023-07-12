import styled from "styled-components"
import UserImg from "../../asset/profile.svg"
import { useEffect, useState } from "react"
import API from "../../utils/API"

const Answer = ({detailId,answers}) => {
    const [answersData, setAnswersData] = useState(answers)

    return(
        <>
        {
            answersData.map((item)=>(
                <AnswerLayout>
                    <ContentBox>
                        <WriterInfo>
                            <WriterImg src={UserImg}/>
                            <WriterName>{item.writer.nickName}</WriterName>
                        </WriterInfo>
        
                        <ContentText>{item.answer}</ContentText>
                        <ContentImg src={item.fileUrlList[0]}/> 
                        <WriteTime>{item.createdAt}</WriteTime>

        
                    </ContentBox>
                </AnswerLayout>
            ))
        }
        </>

    )
}

export default Answer

const AnswerLayout = styled.div`
    margin-top: 1.8rem;

    width: 100%;

    border-radius: 0.3125rem 0.3125rem 0rem 0rem;
    background: #FFF;

    text-align: start;
`

const ContentBox = styled.div`
    padding: 1.8rem 2.5rem;
`

const WriterInfo = styled.div`
    display: flex;
    align-items: center;
`

const WriterImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
`

const WriterName = styled.div`
    margin-left: 0.6rem;

    color: #2F2F32;
    font-size: 1rem;
    font-weight: 700;
`

const ContentText = styled.div`
    margin-top: 2.5rem;

    color: #2F2F32;
    font-size: 1.125rem;
    font-weight: 500;
`

const WriteTime = styled.div`
    margin-top: 2.5rem;

    color: #989898;
    font-size: 1rem;
    font-weight: 300;
`

const ContentImg = styled.img`
    width: 50rem;

`