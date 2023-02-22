import React from "react";
import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Search from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Container = styled.div`
  flex: 1;
  display: flex;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
`;
const Circle = styled.div``;
const Image = styled.img`
  height: 75%;
`;
const InfoContainer = styled.div``;
const Icon = styled.div``;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteIcon />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;
