import React from 'react'
import { mobile } from '../responsive'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.6), 
                                rgba(255, 255, 255, 0.5)
                ), 
                url('https://images.unsplash.com/photo-1526357515029-329456cc1c6a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2676&q=80') 
                center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    ${mobile({width: "75%"})}
`
const Title = styled.h1`
    font-size: 26px;
    color: white;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    margin-top: 20px;
    padding: 15px 20px;
    background-color: white;
    color: black;
    cursor: pointer;
`

const Register = () => {
    return(
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="first name"></Input>
                    <Input placeholder="last name"></Input>
                    <Input placeholder="email"></Input>
                    <Input placeholder="username"></Input>
                    <Input placeholder="password"></Input>
                    <Input placeholder="confirm password"></Input>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register