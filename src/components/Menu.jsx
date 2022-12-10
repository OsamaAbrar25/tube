import React from "react"
import styled from "styled-components";
import LogoYT from "../img/yt-logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessOutlinedIcon from '@mui/icons-material/SettingsBrightnessOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Container = styled.div`
flex: 1;
background-color: ${({theme}) => theme.bgLight};
height: 100vh;
color: ${({theme}) => theme.text};
font-size: 14px;
position: sticky;
top: 0;
`
const Wrapper = styled.div`
    padding: 18px 26px;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 5px;
    margin-bottom: 25px;
`

const Img = styled.img`
    height: 20px;
`

const Item = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    gap: 20px;
    padding: 7.5px 0px;
`
const Hr = styled.hr`
    margin: 15px 0px;
    border: 0.5px solid ${({theme}) => theme.soft};
`
const Login = styled.div``

const Button = styled.button`
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
padding: 5px 15px;
margin-top: 10px;
font-weight: 500;
cursor: pointer;
border-radius: 3px;
align-items: center;
display: flex;
gap: 5px;
`

const Menu = (props) => {
    return (
    <Container>
        <Wrapper>
            <Logo>
            <Img src={LogoYT}/>OsamaTube
            </Logo>
            <Item><HomeIcon/>Home</Item>
            <Item><ExploreOutlinedIcon/>Explore</Item>
            <Item><SubscriptionsOutlinedIcon/>Subscriptions</Item>
            <Hr/>
            <Item><VideoLibraryOutlinedIcon/>Library</Item>
            <Item><HistoryOutlinedIcon/>History</Item>
            <Hr/>
            <Login> Sign in to like videos, comment & subscribe!
                <Button><AccountCircleOutlinedIcon/>
                    SIGN IN
                </Button>
            </Login>
            <Hr/>
            <Item><SettingsOutlinedIcon/>Settings</Item>
            <Item><FlagOutlinedIcon/>Report</Item>
            <Item><HelpOutlineOutlinedIcon/>Help</Item>
            <Item onClick={() => props.setDarkMode(!props.darkMode)}><SettingsBrightnessOutlinedIcon/>Light Mode</Item>

        </Wrapper>
    </Container>
    );
}   

export default Menu;