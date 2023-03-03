import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MapIcon from "@mui/icons-material/Map";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  text-decoration: none;
  color: inherit;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EVERSTORE.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eos,
          dicta quasi inventore facilis itaque labore eligendi. Consequatur cum
          odit eligendi! Cum sit illo ea animi recusandae enim earum explicabo?
        </Description>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
            </a>
          </SocialIcon>
          <SocialIcon color="e4405f">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
          </SocialIcon>
          <SocialIcon color="55acee">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </SocialIcon>
          <SocialIcon color="e60023">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <PinterestIcon />
            </a>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem to="/">Home</ListItem>
          <ListItem to="/cart">Cart</ListItem>
          <ListItem to="/products/man">Man Fashion</ListItem>
          <ListItem to="/products/kid">Kids Fashion</ListItem>
          <ListItem to="/products/accessories">Accessories</ListItem>
          <ListItem to="/account">My Account</ListItem>
          <ListItem to="/orderTracking">Order Tracking</ListItem>
          <ListItem to="/wishlist">Wishlist</ListItem>
          <ListItem to="/terms">Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <MapIcon style={{ marginRight: "10px" }} />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="https://goo.gl/maps/vxMEzbARgffuTEU48"
            target="_blank"
            rel="noreferrer"
          >
            W Houston St, New York, NY 10012, USA
          </a>
        </ContactItem>
        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="tel:+1 234 56 78"
          >
            +1 234 56 78
          </a>
        </ContactItem>
        <ContactItem>
          <MailOutlineOutlinedIcon style={{ marginRight: "10px" }} />
          <a
            style={{ textDecoration: "none", color: "inherit" }}
            href="mailto:contact@everstore.dev"
          >
            contact@everstore.dev
          </a>
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
