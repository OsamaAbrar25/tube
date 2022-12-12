import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`
    
`
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Input = styled.input`
    border: none;
    outline: none;
    border-bottom: 1px solid ${({theme})=>theme.soft};
    background-color: transparent;
    color: ${({theme})=>theme.text};
    padding: 5px;
    width: 100%;
`

const Comments = () => {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://www.superiorwallpapers.com/games/spiderman-logo_2524x2524'/>
            <Input placeholder='Add a comment...'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments