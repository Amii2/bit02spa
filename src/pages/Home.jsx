import { products } from "/src/assets/utils/catalog.js";
import ProductCard from "../components/ProductCard";
import Row from "react-bootstrap/Row";

export default function Home() {
  const productElements = products.map((product) => (
    <ProductCard
      key={`product${product.id}`}
      product={product}
      variant="catalog"
    />
  ));

  return (
    <Row
      className="w-100 pt-3 pb-5 justify-content-center gap-3 card-container"
      id="home"
    >
      <h2 className="font-raleway text-center fw-600">¡Bienvenid@ a Woaf!</h2>
      {productElements}
    </Row>
  );
}
