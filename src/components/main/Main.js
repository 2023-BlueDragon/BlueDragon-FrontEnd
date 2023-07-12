import * as S from "./MainStyle"
import LogoImg from "../../asset/logo.svg"
import SearchIconImg from "../../asset/search.svg"
import UserImg from "../../asset/profile.svg"
import ArrowImg from "../../asset/arrow.svg"
import Dummy1Img from "../../asset/dummy1.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import API from "../../utils/API"
import { Link } from "react-router-dom"

const Main = () => {
    const navigater = useNavigate()
    const li = [0,1,2,3]
    const nickName = localStorage.getItem("nickName")

    const [keyWord, setKeyWord] = useState('')
    const [token, setToken] = useState(null)
    const [quests, setQuests] = useState([])
    const [page,setPage] = useState(0)
    const QUEST_SIZE = 4

    useEffect(()=>{
        
        if(localStorage.getItem("accessToken") != null) {
            
            setToken(localStorage.getItem("accessToken"))

            API.get('/question/all',{
                params:{
                    "size" : QUEST_SIZE,
                    "page" : page,
                },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            })
            .then((res)=>{
                console.log(res.data)
                setQuests(res.data.content)
            })
            .catch((err)=>{
                console.error(err)
            })

            console.log(1)
        }
    },[page])

    const Search = (e) => {
        setKeyWord(e.target.value)

        API.get(`/question/search?keyWord=${e.target.value}&page=${0}&size=${QUEST_SIZE}`,{
            headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          }})
        .then((res)=>{
            setQuests(res.data.content)
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    return(
        <S.MainLayout>
            <S.TitleLogo src={LogoImg}/>

            <S.SearchBackBox>
                <S.SearchBox>
                    <S.SearchInput placeholder="검색어를 입력해주세요" onChange={(e)=>{Search(e)}} value={keyWord}/>
                    <S.SearchIcon src={SearchIconImg}/>
                </S.SearchBox>

                <S.UserBox>
                    {
                        token == null ?
                        <S.isNotLoginBox>
                            <S.UserName onClick={()=>{navigater('/signUp')}}>회원가입</S.UserName>
                            <S.UserName>|</S.UserName>
                            <S.UserName onClick={()=>{navigater('/signIn')}}>로그인</S.UserName>
                        </S.isNotLoginBox>
                        :
                        <S.UserName>{nickName}</S.UserName>
                    }
                    <S.UserImg src={UserImg}/>
                </S.UserBox>
            </S.SearchBackBox>

            <S.ContentBox>
                <S.ArrowImg src={ArrowImg} direction="left" onClick={()=>{setPage(page-1)}}/>

                <S.PostsBox>
                    {
                        token == null ?
                        li.map((item,index)=>(
                            <S.PostBox key={index}>
                                <S.PostTextBox>
                                    <S.PostTitle>로그인을 해주세요.</S.PostTitle>
                                </S.PostTextBox>
                            </S.PostBox>
                        ))
                        :
                        quests.map((item,index)=>(
                            <Link to={`/detail/${item.id}`} key={index}>
                                <S.PostBox>
                                    <S.PostSubnail src={Dummy1Img}/>
                                    <S.PostTextBox>
                                        <S.PostTitle>{item.title}</S.PostTitle>
                                        <S.PostWriterText>{item.writer.nickName}</S.PostWriterText>
                                        <S.PostContextText>{item.content}</S.PostContextText>
                                    </S.PostTextBox>
                                </S.PostBox>
                            </Link>
                        ))
                    }
                </S.PostsBox>

                <S.ArrowImg src={ArrowImg} direction="right" onClick={()=>{setPage(page+1)}}/>
            </S.ContentBox>

        </S.MainLayout>
    )
}

export default Main