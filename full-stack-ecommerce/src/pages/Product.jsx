import React from "react";
import styled from "styled-components";
import { Navbar, Announcement, Newsletter, Footer } from "../components";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div``;

const Title = styled.h1``;

const Description = styled.p``;

const Price = styled.span``;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            possimus. Fugiat provident molestias harum tenetur cumque magnam,
            eveniet ad est soluta illum qui obcaecati quisquam corrupti totam
            distinctio quo dolorem accusamus, placeat ipsam nemo optio sed
            perferendis. Dolores, ratione vitae!
          </Description>
          <Price>40 €</Price>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
