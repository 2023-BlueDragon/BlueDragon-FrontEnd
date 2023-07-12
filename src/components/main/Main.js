import * as S from "./MainStyle"
import LogoImg from "../../asset/logo.svg"
import SearchIconImg from "../../asset/search.svg"
import UserImg from "../../asset/profile.svg"
import ArrowImg from "../../asset/arrow.svg"
import Dummy1Img from "../../asset/dummy1.svg"

const Main = () => {
    const li = [0,1,2,3]

    return(
        <S.MainLayout>
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

            <S.ContentBox>
                <S.ArrowImg src={ArrowImg} direction="left"/>

                <S.PostsBox>
                    {
                        li.map((item)=>(
                            <S.PostBox>
                                <S.PostSubnail src={Dummy1Img}/>
                                <S.PostTextBox>
                                    <S.PostTitle>저희 새가 이상해요ㅠㅠ</S.PostTitle>
                                    <S.PostWriterText>blue bird</S.PostWriterText>
                                    <S.PostContextText>새도 사춘기가 있나요?</S.PostContextText>
                                </S.PostTextBox>
                            </S.PostBox>
                        ))
                    }
                </S.PostsBox>

                <S.ArrowImg src={ArrowImg} direction="right"/>
            </S.ContentBox>

        </S.MainLayout>
    )
}

export default Main