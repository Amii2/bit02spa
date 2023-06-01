import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { CartContext } from "../assets/utils/CartContext";
import { useContext, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
});

export default function ProductCard({ product, variant, index, count }) {
  const { cartItems, addToCart, removeFromCart, removeAllFromCart } =
    useContext(CartContext);

  const tagBadges = product.tags.map((tag, i) => (
    <Badge bg="secondary" key={`tag${i}`} className="tag-badge">
      {tag}
    </Badge>
  ));

  const handleButtonClick = () => {
    if (variant === "catalog") {
      addToCart(product);
    } else {
      removeAllFromCart(product.name);
    }
  };

  const handleDecrease = () => {
    if (count === 1) return;
    removeFromCart(index);
  };

  const handleIncrease = () => {
    addToCart(product);
  };

  return (
    <Col
      className={
        "p-0 " + (variant === "catalog" ? "product-card" : "cart-card")
      }
    >
      <Card className="w-100 h-100">
        <Card.Img src="/src/assets/images/placeholder.jpeg" height="25%" />
        <Card.Body>
          <Card.Title className="font-raleway fw-bold">
            {product.name}
          </Card.Title>
          <div className="d-flex gap-1">{tagBadges}</div>
          <Card.Text>{product.desc}</Card.Text>
          <Card.Subtitle className="fw-bold text-center">
            {currencyFormatter.format(product.price)}
          </Card.Subtitle>
          {variant === "cart" && (
            <InputGroup className="quantity-selector mx-auto my-2">
              <Button variant="outline-secondary" onClick={handleDecrease}>
                -
              </Button>
              <Form.Control
                value={count}
                className="text-center quantity-count"
                readOnly
              />
              <Button variant="outline-secondary" onClick={handleIncrease}>
                +
              </Button>
            </InputGroup>
          )}
          <Button className="d-block mx-auto" onClick={handleButtonClick}>
            {variant === "catalog"
              ? "Agregar al carrito"
              : "Remover del carrito"}
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
