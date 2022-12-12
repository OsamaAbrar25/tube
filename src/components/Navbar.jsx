import React from "react";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
position:sticky;
top: 0;
background-color: ${({theme})=>theme.bgLight};
color: ${({theme})=>theme.text};
height: 56px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
/* position: relative; */
`

const Search = styled.div`
display: flex;
align-items: center;
/* background-color: red; */
position: absolute;
justify-content: space-between;
left: 0px;
right: 0px;
margin: auto;
width: 40%;
border: 1px solid #ccc;
padding: 5px;
border-radius: 3px;

`

const Input = styled.input`
width: 100%;
margin-right: 5px;
border: none;
background-color: transparent;
outline-style: none;
color: ${({theme})=>theme.text};
`

const Button = styled.button`
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
padding: 5px 15px;
font-weight: 500;
cursor: pointer;
border-radius: 3px;
align-items: center;
display: flex;
gap: 5px;
`

const Navbar = () => {
    return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder="Search"/>
                <SearchOutlinedIcon/>
            </Search>
            <Link to={'signin'} style={{textDecoration: 'none'}}>
            <Button>
            <AccountCircleOutlinedIcon/> SIGN IN
            </Button>
            </Link>
        </Wrapper>
    </Container>
    );
}

export default Navbar;