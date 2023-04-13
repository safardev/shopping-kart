import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

export default function ProductCard(props) {
  const { id, title, price, image, items } = props;

  const dispatch = useDispatch();

  const addItems = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <Card
      style={{
        width: "15rem",
        height: "25rem",
        margin: "25px 0px 25px 5em",
        alignItems: "center",
        textAlign: "center",
      }}
      key={id}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ height: "150px", width: "150px", marginTop: "10px" }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text>₹ {price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => addItems(items)}
          style={{ float: "" }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
