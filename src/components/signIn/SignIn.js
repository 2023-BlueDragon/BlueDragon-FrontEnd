import * as S from "./SignInStyle"
import LogoImg from "../../asset/logo.svg"
import { useNavigate } from "react-router"
import { useState } from "react"
import API from "../../utils/API"

const SignIn = () => {
    const navigater = useNavigate()

    const [email, setEmail] = useState('')
    const [pw, setPw] = useState('')

    const Submit = () => {
        const data = {
            "id" : email,
            "passWord" : pw 
        }

        API.post('/auth/login',data)
        .then((res)=>{
            localStorage.setItem("accessToken",res.data.accessToken)
            API.get('/user/my',{headers: {
                Authorization: `Bearer ${res.data.accessToken}`,
            }})
            .then((re)=>{
                localStorage.setItem("nickName",re.data.nickName)
            })
            navigater('/')
        })
        .catch((err)=>{
            console.error(err)
        })
    }

    return(
        <S.SignInLayout>
            <S.ContentBox>
                <S.TitleImg src={LogoImg} onClick={(e)=>{navigater('/')}}/>

                <S.InputBox>
                    <S.InputLabel>이메일</S.InputLabel>
                    <S.Input placeholder="이메일을 입력하세요" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </S.InputBox>

                <S.InputBox>
                    <S.InputLabel>비밀번호</S.InputLabel>
                    <S.Input type="password" placeholder="비밀번호를 입력하세요" value={pw} onChange={(e)=>{setPw(e.target.value)}}/>
                </S.InputBox>

                <S.SubmitBox>
                    <S.SubmitBtn onClick={Submit}>로그인</S.SubmitBtn>
                    <S.DirectionBox>
                        <S.isAccountLabel>아직 계정이 없으신가요?</S.isAccountLabel>
                        <S.SignUpBtn onClick={()=>{navigater('/signUp')}}>회원가입</S.SignUpBtn>
                    </S.DirectionBox>
                </S.SubmitBox>

            </S.ContentBox>
        </S.SignInLayout>
    )
}

export default SignIn
