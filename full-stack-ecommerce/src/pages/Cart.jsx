import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Announcement, Footer, Navbar } from "../components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from "../requestMethod";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { clearCart, decrease, increase, remove } from "../redux/cartRedux";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  ${mobile({ fontSize: "9px" })}
`;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s ease;
  &:hover {
    color: black;
    background-color: white;
  }
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  //send payment data to server

  const [stripeToken, setstripeToken] = useState(null);
  const navigate = useNavigate();

  //stripe token function
  const onToken = (token) => {
    setstripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        navigate("/success", { data: res.data, products: cart });
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && cart.total >= 1 && makeRequest();
  }, [stripeToken, cart.total, navigate, cart]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate(-2)}>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled" onClick={() => dispatch(clearCart())}>
            CLEAR CART
          </TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product, index) => (
              <Product key={index}>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <CloseIcon
                      style={{ marginTop: "-10px", cursor: "pointer" }}
                      onClick={() =>
                        dispatch(
                          remove(product._id && product.size && product.color)
                        )
                      }
                    />
                    <ProductName>
                      <b>Product:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b>
                      {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b>Size:</b> {product.size}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <AddIcon onClick={() => dispatch(increase(product._id))} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <RemoveIcon
                      onClick={() => dispatch(decrease(product._id))}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    {product.price * product.quantity} €
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice> {cart.total} €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice> 5.90 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice> -5.90 €</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>
                {cart.total > 20 ? cart.total - 5.9 : 0} €
              </SummaryItemPrice>
            </SummaryItem>

            <StripeCheckout
              name="EverStore"
              image="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60"
              billingAddress
              shippingAddress
              description={`Your Total is  ${
                cart.total > 20 ? cart.total - 5.9 : 0
              } €`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
