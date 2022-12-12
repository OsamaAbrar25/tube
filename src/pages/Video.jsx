import React from 'react'
import styled from 'styled-components'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import Comments from '../components/Comments';
import Card from '../Card'

const Container = styled.div`
  display: flex;
  gap: 5px;
`
const Content = styled.div`
flex: 5;
  
`
const VideoContainer = styled.div`
  
`
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme})=>theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.div`
color: ${({theme})=>theme.textSoft};
`

const VideoButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme})=>theme.text};
`

const VideoButton = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-size: 14px;
font-weight: 500;
cursor: pointer;
`
const Hr = styled.div`
  margin: 15px 0px;
  border: 0.5px solid ${({theme})=>theme.soft};
`
const Recommendations = styled.div`
  margin-left: 20px;
`

const ChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
const ChannelInfo = styled.div`
display: flex;
gap: 20px;
  
`
const Subscribe = styled.button`
  background-color: #cc1a00;
  border: none;
  color: white;
  font-weight: 500;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`
const ChannelName = styled.span`
  font-weight: 500;
`
const SubscribersCounter = styled.span`
  margin-top: 5px;
  /* margin-bottom: 20px; */
  color: ${({theme})=>theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
  font-size: 14px;
`
const ChannelDetails = styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=>theme.text};
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoContainer>
          <iframe width='100%'
          height='420'
          src='https://www.youtube.com/embed/_fqpk3cXG-U'
          title='YouTube Video Player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          >
          </iframe>
        </VideoContainer>
        <Title>Elon Musk bought Twitter</Title>
        <Details>
          <Info>5646164 views - 2 days ago</Info>
          <VideoButtonsContainer>
            <VideoButton><ThumbUpAltOutlinedIcon fontSize='small'/>Like</VideoButton>
            <VideoButton><ThumbDownAltOutlinedIcon fontSize='small'/>Dislike</VideoButton>
            <VideoButton><ShareOutlinedIcon fontSize='small'/>Share</VideoButton>
            <VideoButton><VolunteerActivismOutlinedIcon fontSize='small'/>Donate</VideoButton>
          </VideoButtonsContainer>
        </Details>
        <Hr/>
        <ChannelContainer>
          <ChannelInfo>
            <ChannelImage src='https://www.superiorwallpapers.com/games/spiderman-logo_2524x2524'></ChannelImage>
            <ChannelDetails>
              <ChannelName>Osama news</ChannelName>
              <SubscribersCounter>452K subscribers</SubscribersCounter>
              <Description>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </ChannelContainer>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendations>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
       <Card type='sm'/>
      </Recommendations>
    </Container>
  )
}

export default Video