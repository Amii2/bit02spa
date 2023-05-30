import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function Login() {
  return (
    /*<Container className="text-center flex-fill">
      <Row className="h-100">
        <Col className="h-100 d-flex flex-column">
          <Image
            src="/src/assets/images/login-card-image.jpg"
            alt=""
            className="flex-fill object-fit-cover login-card-image"
            height="0px"
            rounded
          />
        </Col>
        <Col>Login card</Col>
      </Row>
    </Container>*/
    <Card className="h-50">
      <Row className="flex-fill h-100">
        <Col className="h-100" xs={2}>
          <Card.Img
            variant="top"
            src="/src/assets/images/login-card-image.jpg"
            height="100%"
            width="12%"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>Ingresar</Card.Title>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
