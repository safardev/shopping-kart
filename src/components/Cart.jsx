import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  getTotal,
  removeFromCart,
  removeItem,
  addToCart,
} from "../store/slices/cartSlice";

export default function Cart() {
  const cartItem = useSelector((state) => state.cart.cart);
  const cart = useSelector((state) => state.cart);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const addItems = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <div
            className="cartDetails"
            style={{
              backgroundColor: "#ffff",
              marginTop: "2em",
              borderRadius: "5px",
            }}
          >
            <p style={{ padding: "10px 0 0 25px" }}>
              Cart - <b>{cartItem.length} items </b>
            </p>
            <hr></hr>
            {cartItem.length !== 0 ? (
              cartItem.map((item) => {
                return (
                  <div
                    className="cartItem"
                    key={item.id}
                    style={{
                      display: "flex",
                      margin: "2em 1em 2em 2em",
                      paddingBottom: "25px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt=""
                      style={{ width: "150px", height: "180px" }}
                    />
                    <div
                      className="itemDetails"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "2em 0 0 3em",
                      }}
                    >
                      <span>{item.title}</span>
                      <div className="qp" style={{ margin: "1em 0 0 0" }}>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => dispatch(removeItem(item))}
                        >
                          -
                        </Button>
                        <span style={{ letterSpacing: "10px" }}>
                          {" "}
                          {item.quantity}
                        </span>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => addItems(item)}
                        >
                          +
                        </Button>
                        <span style={{ marginLeft: "20px" }}>
                          {" "}
                          ₹ {item.price} x <b>{item.quantity}</b> = ₹{" "}
                          {item.price * item.quantity}
                        </span>
                      </div>
                      <Button
                        size="sm"
                        variant="danger "
                        style={{ width: "70px", margin: "1em 0 0 0" }}
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="fs-2 text-center p-2">Cart is empty!</p>
            )}
          </div>
        </Col>
        <Col>
          <div
            className="summary"
            style={{
              backgroundColor: "#ffff",
              display: "flex",
              flexDirection: "column",
              margin: "2em",
              borderRadius: "5px",
            }}
          >
            <p style={{ margin: "10px 0 0 25px" }}>
              <b>Summary</b>
            </p>
            <hr></hr>
            <div
              className="tQuan"
              style={{
                margin: "1em 0em 0em 2em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Total Quantity </p>
              <span style={{ marginRight: "25px" }}>
                <b>{totalQuantity}</b>
              </span>
            </div>
            <div
              className="tAmt"
              style={{
                margin: "0em 0em 1em 2em",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>Total Amount </p>
              <span style={{ marginRight: "25px" }}>
                <b>₹ {totalAmount}</b>
              </span>
            </div>
            <Button
              variant="warning"
              style={{ color: "#ffff", margin: "0 2em 1em 2em" }}
            >
              <b>GO TO CHECKOUT</b>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
