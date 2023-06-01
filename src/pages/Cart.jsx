import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { AppContext } from "../assets/utils/AppContext";
import { CartContext } from "../assets/utils/CartContext";
import ProductCard from "../components/ProductCard";
import colombianPesoFormat from "../assets/utils/colombianPesoFormat";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const { addAppContext, getAppContext } = useContext(AppContext);
  const itemsMap = new Map();
  for (const item of cartItems) {
    itemsMap.set(item.name, (itemsMap.get(item.name) || 0) + 1);
  }

  const cartItemElements = [];
  itemsMap.forEach((quantity, itemName) => {
    const index = cartItems.findLastIndex((item) => item.name === itemName);
    cartItemElements.push(
      <ProductCard
        key={`item${cartItemElements.length + 1}`}
        product={cartItems[index]}
        variant="cart"
        index={index}
        count={quantity}
      />
    );
  });

  const showAlert = getAppContext("showAlert");

  return (
    <>
      <h1 className="text-center mt-2">Carrito</h1>
      <Row className="w-100 cart justify-content-center gap-3 card-container">
        <p className="text-center">
          {cartItemElements.length > 0
            ? `Productos: ${
                cartItemElements.length
              } Total: ${colombianPesoFormat(getTotalPrice())}`
            : "No hay productos en el carrito"}
        </p>
        {cartItemElements.length > 0 && cartItemElements}
      </Row>
      {cartItemElements.length > 0 && (
        <div className="position-fixed bg-white bottom-0 py-4 d-flex vw-100 justify-content-center gap-3 z-last">
          <Button variant="primary">Realizar comprar</Button>
          <Button variant="outline-primary" onClick={clearCart}>
            Limpiar carrito
          </Button>
        </div>
      )}
    </>
  );
}
