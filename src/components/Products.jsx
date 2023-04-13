import React from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Products() {
  const data = useSelector((state) => {
    return state.cart.items;
  });

  return (
    <Container className="col-12 d-flex flex-row mb-3 mt-5">
      <Row>
        {data.map((items) => {
          return (
            <ProductCard
              key={items.id}
              image={items.image}
              title={items.title}
              price={items.price}
              items={items}
            />
          );
        })}
      </Row>
    </Container>
  );
}
