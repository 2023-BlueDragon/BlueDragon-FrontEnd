import styled from "styled-components";

export const MainLayout = styled.div`
    position: relative;

    width: 100vw;
    height: 100vh;

    background: #F0F2F4;
`

export const TitleLogo = styled.img`
    width: 8.75rem;
    height: 4.375rem;

    position: absolute;
    top: 1.88rem;
    left: 3.13rem;
`

export const SearchBackBox = styled.div`
    margin-bottom: 10vh;

    width: 100vw;
    height: 12.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
`

export const SearchBox = styled.div`
    width: 50vw;
    height: 4.375rem;

    border: none;
    border-radius: 3.125rem;
    background: #EDF0FF;

    display: flex;
    align-items: center;

    position: relative;
`

export const SearchInput = styled.input`
    margin-left: 2.1rem;
    margin-right: 5rem;

    border: none;
    background: none;

    flex: 1;

    font-size: 1.125rem;
    font-weight: 400;
    
    ::placeholder{
        color: rgba(128, 128, 128, 0.50);
    }

    &:focus{
        outline: none;
    }
`

export const SearchIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;

    margin-right: 2.1rem;
`

export const UserBox = styled.div`
    position: absolute;
    right: 8.5rem;

    display: flex;
    align-items: center;
`

export const isNotLoginBox = styled.div`
    display: flex;
`

export const UserName = styled.p`
    margin-right: 0.5rem;

    color: #2F2F32;
    font-size: 1rem;
    font-weight: 700;
`

export const UserImg = styled.img`
    width: 2.8125rem;
    height: 2.8125rem;
`

export const ContentBox = styled.div`
    margin: auto;

    width: 93.75rem;
    // height: 21.875rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ArrowImg = styled.img`
    width: 3.125rem;
    height: 3.125rem;
    
    ${(props) => (props.direction==="right" ? "transform: rotate(180deg)" : "")};

    cursor: pointer;
`

export const PostsBox = styled.div`
    width: 79.375rem;

    display: flex;
    justify-content: space-between;
`

export const PostBox = styled.div`
    width: 17.5rem;
    height: 21.875rem;
    background-color: #fff;
`

export const PostSubnail = styled.img`
    width: 100%;
    height: 13.75rem;
`

export const PostTextBox = styled.div`
    text-align: start;
    margin-left: 0.9rem;
`

export const PostTitle = styled.div`
    margin-top: 1.25rem;

    color: #2F2F32;
    font-size: 1rem;
    font-weight: 700;
`

export const PostWriterText = styled.div`
    margin-top: 0.3rem;

    color: #2F2F32;
    font-size: 0.75rem;
    font-weight: 400;
`

export const PostContextText = styled.div`
    margin-top: 0.9rem;

    color: #2F2F32;
    font-size: 0.75rem;
    font-weight: 400;

    overflow: hidden;
`
