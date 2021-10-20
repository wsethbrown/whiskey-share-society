import React from "react"
import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    background-color: #FAF0CA;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
`
const Center = styled.div`
    flex: 2;
    text-align: center;
`
const Logo = styled.h1`
    margin: auto;
    font-size: 32px;
    font-weight: bold;
    color: #CC8E69;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    margin: auto;
    align-items: space-between;
    justify-content: flex-end;
`

const Login = styled.span`
    margin-right: 2rem;
`
const CreateAccount = styled.span`
    margin-right: 2rem;
`

const Navbar = () => {
    return(
        <Container>
            <Wrapper>
                <Left></Left>
                <Center>
                    <Logo>Whiskey Share Society</Logo>
                </Center>
                <Right>
                    <Login>Login</Login>
                    <CreateAccount>Create Account</CreateAccount>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar