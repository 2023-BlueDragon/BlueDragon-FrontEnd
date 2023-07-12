import * as S from "./SignUpStyle"
import LogoImg from "../../asset/logo.svg"

const SignUp = () => {
    return(
        <S.SignUpLayout>
            <S.ContentBox>
                <S.TitleImg src={LogoImg}/>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>이메일</S.InputLabel>
                        <S.Input placeholder="이메일을 입력하세요"/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>비밀번호</S.InputLabel>
                        <S.Input placeholder="비밀번호을 입력하세요"/>
                    </S.InputBox>
                </S.InputRow>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>이름</S.InputLabel>
                        <S.Input placeholder="이름을 입력하세요"/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>닉네임</S.InputLabel>
                        <S.Input placeholder="닉네임을 입력하세요"/>
                    </S.InputBox>
                </S.InputRow>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>대학 전공 분야</S.InputLabel>
                        <S.Input placeholder="전공 분야을 입력하세요"/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>졸업 증명서</S.InputLabel>
                        
                        <S.FileInputBox>
                            <S.FileInput placeholder="파일을 선택해주세요"/>
                            <S.FileLabelBox>
                                <S.FileLabel for="fileInput">파일선택</S.FileLabel>
                            </S.FileLabelBox>
                            <S.FileInputBtn id="fileInput" type="file"/>
                        </S.FileInputBox>

                    </S.InputBox>
                </S.InputRow>

                <S.SubmitBox>
                    <S.SubmitBtn>회원가입</S.SubmitBtn>
                    <S.DirectionBox>
                        <S.isAccountLabel>이미 계정이 있으신가요?</S.isAccountLabel>
                        <S.SignInBtn>로그인</S.SignInBtn>
                    </S.DirectionBox>
                </S.SubmitBox>
                

            </S.ContentBox>
        </S.SignUpLayout>
    )
}

export default SignUp;