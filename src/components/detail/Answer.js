import styled from "styled-components"
import UserImg from "../../asset/profile.svg"

const Answer = () => {
    return(
        <AnswerLayout>
            <ContentBox>
                <WriterInfo>
                    <WriterImg src={UserImg}/>
                    <WriterName>김조류</WriterName>
                </WriterInfo>

                <ContentText>
                일단 새가 그런 행동을 할만한 이유를 설명해드리자면.. <br/>첫번째로는 사춘기, 두번째로는 털갈이가 있습니다
                </ContentText>
                <WriteTime>2023. 07. 13</WriteTime>

            </ContentBox>
        </AnswerLayout>
    )
}

export default Answer

const AnswerLayout = styled.div`
    margin-top: 1.8rem;

    width: 100%;
    height: 24.9375rem;

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
    font-size: 0.625rem;
    font-weight: 300;
`
