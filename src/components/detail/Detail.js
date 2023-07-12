import * as S from "./DetailStyle"
import LogoImg from "../../asset/logo.svg"
import SearchIconImg from "../../asset/search.svg"
import UserImg from "../../asset/profile.svg"
import QuestionIconImg from "../../asset/question.svg"
import AnswerIconImg from "../../asset/answer.svg"
import { useEffect, useState } from "react"
import Answer from "./Answer"
import { useNavigate, useParams } from "react-router"
import API from "../../utils/API"

const Detail = () => {
    const navigater = useNavigate()

    const [isPostAnswerClicked, setIsPostAnswerClicked] = useState(false)
    const [isLodding, setIsLodding] = useState(true)

    const {detailId} = useParams()
    const nickName = localStorage.getItem("nickName")

    const [fileUrl , setFileUrl] = useState("")
    const [question,setQuestion] = useState()
    const [answers, setAnswers] = useState([])
    const [fileName, setFileName] = useState("")

    const [answerContent, setAnswerContent] = useState()
    
    useEffect(()=>{
        API.get(`/question/${detailId}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }})
        .then((res)=>{
            setQuestion(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })

        API.get(`/answer/list/question/${detailId}`,{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }})
        .then((res)=>{
            setAnswers(res.data)
            setIsLodding(false)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])

    const ChooseFileEvent = (e) => {
        const formData = new FormData();
        formData.append("fileList",e.target.files[0])

        // for (const key of formData.keys()) {
        //     console.log(key);
        //   }
        //   // FormData의 value 확인
        //   // @ts-ignore
        //   for (const value of formData.values()) {
        //     console.log(value);
        //   }
        //   console.log(formData);

        API.post(`/file/list`,formData,{
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "multipart/form-data",
            },
        })
        .then((res)=>{
            setFileUrl(res.data)
        })
        .catch((err)=>{
            console.error(err)
        })

        for (const value of formData.values()) {
            setFileName(value.name);
        }
    }

    const SubmitAnswerEvent = () => {
        console.log(fileUrl)
        API.post(`/answer`,{
            "answer" : answerContent,
            "questionId" : detailId,
            "fileUrlList" : fileUrl
        },{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            }
        })
        .then((res)=>{
            alert("등록되었습니다.")
            window.location.reload();
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    if(isLodding){
        return(
            <h1>로딩중입니다!!</h1>
        )
    }

    return(
        <S.DetailLayout>
            <S.TitleLogo src={LogoImg} onClick={()=>{navigater('/')}}/>

            <S.SearchBackBox>
                <S.SearchBox>
                    <S.SearchInput placeholder="검색어를 입력해주세요"/>
                    <S.SearchIcon src={SearchIconImg}/>
                </S.SearchBox>

                <S.UserBox>
                    <S.UserName>{nickName}</S.UserName>
                    <S.UserImg src={UserImg}/>
                </S.UserBox>
            </S.SearchBackBox>

            <S.DetailBox>
                <S.DetailContentBox>
                    <S.TopInfoBox>
                        <S.QuestionImg src={QuestionIconImg}/>
                        <S.Title>{question.title}</S.Title>
                    </S.TopInfoBox>
                    <S.DetailContentText>{question.content}</S.DetailContentText>

                    <S.DetailWriterInfoBox>                        <S.DetailWriterImg src={UserImg}/>
                        <S.DetailWriterName>{question.writer.nickName}</S.DetailWriterName>
                        <S.DetailWriteTime>{question.createdAt}</S.DetailWriteTime>
                    </S.DetailWriterInfoBox>

                </S.DetailContentBox>
            </S.DetailBox>

            <S.AnswerContentBox>
                <S.TopInfoBox>
                    <S.AnswerImg src={AnswerIconImg}/>
                    <S.Title>{answers.length}개</S.Title>
                </S.TopInfoBox>

                <S.AnsweringHeaderBox>
                    <S.AnsweringHeaderUserBox>
                        <S.UserImg src={UserImg}/>
                        <S.AnsweringHeaderLabel>{nickName}님, 답변해주세요!</S.AnsweringHeaderLabel>
                    </S.AnsweringHeaderUserBox>

                    <S.PostAnswerBtn onClick={()=>{setIsPostAnswerClicked(!isPostAnswerClicked)}}>답변하기</S.PostAnswerBtn>
                </S.AnsweringHeaderBox>

                {
                    isPostAnswerClicked && 
                    <S.PostAnswerBox>
                        <S.AnswerTextarea type="textarea" placeholder="답변을 적어주세요" value={answerContent} onChange={(e)=>{setAnswerContent(e.target.value)}}/>

                        <S.AnswerBtnRow>
                            <S.ChooseFileLabel for="AnswerFile">파일선택</S.ChooseFileLabel>
                            <S.ChooseFile type="file" id="AnswerFile" onChange={(e)=>{ChooseFileEvent(e)}}/>
                            <S.FileName placeholder="파일 선택" value={fileName}/>
                            <S.SubmitAnswer onClick={SubmitAnswerEvent}>답변등록</S.SubmitAnswer>
                        </S.AnswerBtnRow>
                    </S.PostAnswerBox>
                }

                <Answer detailId={detailId} answers={answers}></Answer>


            </S.AnswerContentBox>
        </S.DetailLayout>
    )
}

export default Detail
