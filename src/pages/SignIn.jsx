import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 56px);
    color: ${({theme})=>theme.text};
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: ${({theme})=>theme.bgLight};
    color: ${({theme})=>theme.text};
    padding: 20px 50px;
    border: 1px solid ${({theme})=>theme.soft};
`

const Title = styled.h1`
    font-size: 24px;
`
const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
    margin: 0;
    margin-bottom: 10px;
`
const Input = styled.input`
    background-color: transparent;
    border: 1px solid ${({theme})=>theme.soft};
    padding: 10px;
    border-radius: 3px;
    width: 100%;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text};

`
const Button = styled.button`
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    background-color: ${({theme})=>theme.soft};
    color: ${({theme})=>theme.textSoft};
`
const More = styled.div`
    display: flex;
    font-size: 10px;
    margin-top: 5px;
    color: ${({theme})=>theme.textSoft};
`
const Links = styled.div`
    margin-left: 50px;
`
const Link = styled.span`
    margin-left: 30px;
    
`

const SignIn = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Sign In</Title>
            <SubTitle>to continue to OsamaTube</SubTitle>
            <Input placeholder='username'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign In</Button>
            <Title>OR</Title>
            <Input placeholder='username'/>
            <Input placeholder='email'/>
            <Input type='password' placeholder='password'/>
            <Button>Sign Up</Button>
        </Wrapper>
        <More>English(US)
            <Links>
            <Link>Help</Link>
            <Link>Privacy</Link>
            <Link>Terms</Link>
            </Links>
        </More>
    </Container>

  )
}

export default SignIn