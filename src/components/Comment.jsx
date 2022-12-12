import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 20px;
    margin: 30px 0px;
`
const Avatar = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const Details = styled.div`
    color: ${({theme})=>theme.text};
`
const Title = styled.span`
    font-size: 12px;
    font-weight: 500;
`
const Date = styled.span`
    font-size: 11px;
    font-weight: 400;
    color: ${({theme})=>theme.textSoft};
    margin-left: 5px;
`
const Text = styled.p`
    font-size: 14px;
`
const Comment = () => {
  return (
    <Container>
            <Avatar src='https://www.superiorwallpapers.com/games/spiderman-logo_2524x2524'/>
            <Details>
                <Title>Nigella Lawson <Date>1 day ago</Date></Title>
                <Text>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </Details>
    </Container>
  )
}

export default Comment