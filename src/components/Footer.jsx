import styled from 'styled-components'
import {Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline} from '@material-ui/icons'
import { mobile } from '../responsive'

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
` 

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`

const Logo = styled.h1`

`
const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>WHISKEY SHARE SOCIETY</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis debitis nisi suscipit consequuntur explicabo magni ad itaque, maxime alias esse?</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Groups</ListItem>
                    <ListItem>Reviews</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Favorites</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/>
                    1234 Main St, Atlanta, GA 302471
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}}/>
                    404-111-1111
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}}/>
                    seth@evrstdesign.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png/" />
            </Right>
        </Container>
    )
}

export default Footer