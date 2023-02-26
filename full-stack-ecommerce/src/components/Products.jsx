import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  //fetch data

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  //every time i change filter
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(response.data);
      } catch (error) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  return (
    <Container>
      {filteredProducts.map((item) => (
        <Product key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
