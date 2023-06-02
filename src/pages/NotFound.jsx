import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-5">
      <h2 className="font-raleway fw-bold">Mmm que extraño...</h2>
      <h5>Parece que no hay nada por aqui.</h5>
      <Image
        src="/bit02spa/images/dog-searching.gif"
        className="d-block my-3"
        rounded
      />
      <Button
        size="lg"
        className="font-raleway fw-600"
        onClick={() => navigate("/bit02spa/")}
      >
        Regresar a inicio
      </Button>
    </div>
  );
}
