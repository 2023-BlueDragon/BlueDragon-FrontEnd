import * as S from "./SignUpStyle"
import LogoImg from "../../asset/logo.svg"
import { useNavigate } from "react-router"
import { useState } from "react"
import API from "../../utils/API"

const SignUp = () => {
    const navigater = useNavigate()

    const [email,setEmail] = useState("");
    const [pw,setPw] = useState();
    const [name,setName] = useState();
    const [nick,setNick] = useState();
    const [major,setMajor] = useState();
    const [fileUrl , setFileUrl] = useState("")
    const [fileName, setFileName] = useState("")

    const ChooseFileEvent = (e) => {
        const formData = new FormData();
        formData.append("fileList",e.target.files[0])

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

    const Submit = () => {
        const data = {
            "email": email,
            "passWord": pw,
            "name": name,
            "nickName": nick,
            "major": major,
            "fileUrlList" : fileUrl
        }

        API.post('/user/expert',data)
            .then((res)=>{
                console.log(res)
                navigater('/signIn')
            })
            .catch((err)=>{
                console.error(err)
            })
    }

    return(
        <S.SignUpLayout>
            <S.ContentBox>
                <S.TitleImg src={LogoImg} onClick={(e)=>{navigater('/')}}/>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>이메일</S.InputLabel>
                        <S.Input placeholder="이메일을 입력하세요" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>비밀번호</S.InputLabel>
                        <S.Input placeholder="8자 이상 비밀번호을 입력하세요" onChange={(e)=>{setPw(e.target.value)}} value={pw}/>
                    </S.InputBox>
                </S.InputRow>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>이름</S.InputLabel>
                        <S.Input placeholder="이름을 입력하세요" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>닉네임</S.InputLabel>
                        <S.Input placeholder="닉네임을 입력하세요" onChange={(e)=>{setNick(e.target.value)}} value={nick}/>
                    </S.InputBox>
                </S.InputRow>

                <S.InputRow>
                    <S.InputBox>
                        <S.InputLabel>대학 전공 분야</S.InputLabel>
                        <S.Input placeholder="전공 분야을 입력하세요" onChange={(e)=>{setMajor(e.target.value)}} value={major}/>
                    </S.InputBox>

                    <S.InputBox>
                        <S.InputLabel>졸업 증명서</S.InputLabel>
                        
                        <S.FileInputBox>
                            <S.FileInput placeholder="파일을 선택해주세요" value={fileName}/>
                            <S.FileLabelBox>
                                <S.FileLabel for="fileInput">파일선택</S.FileLabel>
                            </S.FileLabelBox>
                            <S.FileInputBtn id="fileInput" type="file" onChange={(e)=>{ChooseFileEvent(e)}}/>
                        </S.FileInputBox>

                    </S.InputBox>
                </S.InputRow>

                <S.SubmitBox>
                    <S.SubmitBtn onClick={Submit}>회원가입</S.SubmitBtn>
                    <S.DirectionBox>
                        <S.isAccountLabel>이미 계정이 있으신가요?</S.isAccountLabel>
                        <S.SignInBtn onClick={()=>{navigater('/signin')}}>로그인</S.SignInBtn>
                    </S.DirectionBox>
                </S.SubmitBox>
                

            </S.ContentBox>
        </S.SignUpLayout>
    )
}

export default SignUp;