import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { AppContext } from "../assets/utils/AppContext";
import { CartContext } from "../assets/utils/CartContext";
import ProductCard from "../components/ProductCard";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import colombianPesoFormat from "../assets/utils/colombianPesoFormat";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const { cartItems, getTotalPrice, clearCart } = useContext(CartContext);
  const { addAppContext, getAppContext } = useContext(AppContext);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
    clearCart();
  };

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
      <Row className="w-100 my-0 cart justify-content-center gap-3 card-container">
        <p className="text-center mb-0">
          {cartItemElements.length > 0
            ? `Productos: ${
                cartItemElements.length
              } Total: ${colombianPesoFormat(getTotalPrice())}`
            : "Agrega productos a tu carrito para poder verlos aquí... 🐾"}
        </p>
        {cartItemElements.length > 0 && cartItemElements}
      </Row>
      {cartItemElements.length > 0 && (
        <div className="position-fixed bg-white bottom-0 py-4 d-flex vw-100 justify-content-center gap-3 z-last">
          <Button variant="primary" onClick={handleShow}>
            Realizar comprar
          </Button>
          <Button variant="outline-primary" onClick={clearCart}>
            Limpiar carrito
          </Button>
        </div>
      )}
      <Modal
        size="lg"
        show={showModal}
        onHide={handleClose}
        className="text-center"
        centered
      >
        <Modal.Body className="my-2">
          <h2 className="mb-3 font-raleway display-6">
            🎉 ¡Gracias por tu compra! 🎊
          </h2>
          <p className="mx-10">
            Tu compra ha sido realizada con éxito, en breve recibirás un correo
            con la información de tu compra.
          </p>
          <Image
            src="/public/images/dancing-dog.gif"
            className="dancing-dog-img"
            rounded
          />
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button size="lg" variant="primary" onClick={handleClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
