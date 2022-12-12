import React from 'react'
import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'

const Container = styled.div`
width: 360px;
margin-bottom: 46px;
cursor: pointer;

`

const Image = styled.img`
width: 100%;
height: 202px;
`
const Details = styled.div`
margin-top: 16px;
display: flex;
gap: 10px;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: #121212;
`
const TextsContainer = styled.div`
`
// const TT = styled.div`
// flex-direction: column;
// justify-content: center;
// display: flex;
// font-size: 0px;
// `

const Title = styled.h1`
font-size: 16px;
font-weight: 500;
margin: 0px;
margin-bottom: 8px;
color: ${({theme})=>theme.text};
`

const ChannelName = styled.h2`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
margin: 0px;
margin-bottom: 2px;
`

const Info = styled.div`
font-size: 14px;
color: ${({theme})=>theme.textSoft};
`

const Card = () => {
  return (
    <NavLink to="/video/test" style={{textDecoration:"none"}}>
    <Container>
      <Image src='https://ichef.bbci.co.uk/news/976/cpsprodpb/7E51/production/_127773323_608b24d8-f298-4802-8bc7-422ec2fa5f99.jpg.webp'/>
      <Details>
        <ChannelImage src='https://www.superiorwallpapers.com/games/spiderman-logo_2524x2524'/>
        <TextsContainer>
          <Title>Elon Musk Twitter Deal</Title>
          {/* <TT> */}
          <ChannelName>Osama News</ChannelName>
          <Info>345600 views - 2 days ago</Info>
          {/* </TT> */}
        </TextsContainer>
      </Details>
    </Container>
    </NavLink>
  )
}

export default Card