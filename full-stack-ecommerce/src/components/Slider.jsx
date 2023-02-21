import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin-top: 10px;
  position: relative;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  margin-left: ${(props) => (props.direction === "left" ? "3vw" : "93vw")};
  opacity: 0.5;
`;

const SlideContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 100;
  letter-spacing: 3px;
`;

const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowBackIosIcon style={{ marginLeft: "6px" }} />
      </Arrow>
      <Wrapper>
        <SlideContainer>
          <ImageContainer>
            <Image src="https://cdn.pixabay.com/photo/2017/08/01/11/48/woman-2564660_960_720.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>SUMMER SALES</Title>
            <Description>
              DON'T COMPROMISE ON STYLE ! GET 40% OFF FOR NEW ARRIVALS
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </SlideContainer>
      </Wrapper>
      <Arrow>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
