import * as S from "./SignInStyle"
import LogoImg from "../../asset/logo.svg"

const SignIn = () => {

    return(
        <S.SignInLayout>
            <S.ContentBox>
                <S.TitleImg src={LogoImg} />

                <S.InputBox>
                    <S.InputLabel>이메일</S.InputLabel>
                    <S.Input placeholder="이메일을 입력하세요"/>
                </S.InputBox>

                <S.InputBox>
                    <S.InputLabel>비밀번호</S.InputLabel>
                    <S.Input placeholder="비밀번호를 입력하세요"/>
                </S.InputBox>

                <S.SubmitBox>
                    <S.SubmitBtn>로그인</S.SubmitBtn>
                    <S.DirectionBox>
                        <S.isAccountLabel>아직 계정이 없으신가요?</S.isAccountLabel>
                        <S.SignUpBtn>회원가입</S.SignUpBtn>
                    </S.DirectionBox>
                </S.SubmitBox>

            </S.ContentBox>
        </S.SignInLayout>
    )
}

export default SignIn
