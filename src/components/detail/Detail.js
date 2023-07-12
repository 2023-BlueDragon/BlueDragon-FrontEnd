import * as S from "./DetailStyle"
import LogoImg from "../../asset/logo.svg"
import SearchIconImg from "../../asset/search.svg"
import UserImg from "../../asset/profile.svg"
import QuestionIconImg from "../../asset/question.svg"
import AnswerIconImg from "../../asset/answer.svg"
import { useState } from "react"
import Answer from "./Answer"

const Detail = () => {
    const [isPostAnswerClicked, setIsPostAnswerClicked] = useState(true)

    return(
        <S.DetailLayout>
            <S.TitleLogo src={LogoImg}/>

            <S.SearchBackBox>
                <S.SearchBox>
                    <S.SearchInput placeholder="검색어를 입력해주세요"/>
                    <S.SearchIcon src={SearchIconImg}/>
                </S.SearchBox>

                <S.UserBox>
                    <S.UserName>조류 전문가</S.UserName>
                    <S.UserImg src={UserImg}/>
                </S.UserBox>
            </S.SearchBackBox>

            <S.DetailBox>
                <S.DetailContentBox>
                    <S.TopInfoBox>
                        <S.QuestionImg src={QuestionIconImg}/>
                        <S.Title>저희 새가 이상해요ㅠㅠ</S.Title>
                    </S.TopInfoBox>
                    <S.DetailContentText>
안녕하세요.. 저는 파랑새를 키운지 한달 정도 된 조류 집사인데요..<br/>
얘가 집에 잘 적응하나 싶더니.. 제가 학교 간 사이에  직접 새장 문을 열고
나와서 집안에 물건들을 다 쪼아놓더라고요...<br/>
<br/>
저희 새가 왜 그런지 알 수 있을까요?
새들도 사춘기가 있는건가요??
                    </S.DetailContentText>

                    <S.DetailWriterInfoBox>
                        <S.DetailWriterImg src={UserImg}/>
                        <S.DetailWriterName>blue bird</S.DetailWriterName>
                        <S.DetailWriteTime>2023. 07. 13</S.DetailWriteTime>
                    </S.DetailWriterInfoBox>

                </S.DetailContentBox>
            </S.DetailBox>

            <S.AnswerContentBox>
                <S.TopInfoBox>
                    <S.AnswerImg src={AnswerIconImg}/>
                    <S.Title>0개</S.Title>
                </S.TopInfoBox>

                <S.AnsweringHeaderBox>
                    <S.AnsweringHeaderUserBox>
                        <S.UserImg src={UserImg}/>
                        <S.AnsweringHeaderLabel>조류전문가님, 답변해주세요!</S.AnsweringHeaderLabel>
                    </S.AnsweringHeaderUserBox>

                    <S.PostAnswerBtn>답변하기</S.PostAnswerBtn>
                </S.AnsweringHeaderBox>

                {
                    isPostAnswerClicked && 
                    <S.PostAnswerBox>
                        <S.AnswerTextarea type="textarea" placeholder="답변을 적어주세요"/>

                        <S.AnswerBtnRow>
                            <S.ChooseFileLabel for="AnswerFile" >파일선택</S.ChooseFileLabel>
                            <S.ChooseFile type="file" id="AnswerFile"/>
                            <S.SubmitAnswer>답변등록</S.SubmitAnswer>
                        </S.AnswerBtnRow>
                    </S.PostAnswerBox>
                }

                <Answer></Answer>


            </S.AnswerContentBox>
        </S.DetailLayout>
    )
}

export default Detail
