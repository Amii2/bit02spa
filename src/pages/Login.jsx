import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const schema = yup.object({
    email: yup
      .string()
      .required("Por favor ingresa un valor.")
      .email("Por favor ingresa una direccion de correo valida."),
    password: yup.string().required("Por favor ingresa un valor."),
  });

  const navigate = useNavigate();

  return (
    <Card className="align-self-center justify-self-center my-auto login-card">
      <Row className="flex-fill h-100">
        <Col className="d-none h-100 d-lg-inline" xs={6}>
          <Card.Img
            src="/public/images/login-card-image.jpg"
            alt="Perro con ropa y gafas, imagen de la carta login."
            height="100%"
            className="object-fit-cover login-card-image horizontal-flip rounded-0 rounded-end"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Title>
              <h2 className="text-center h1 font-raleway fw-bold">Ingresar</h2>
            </Card.Title>
            <Card.Text>
              Ingresa tus datos de usuario en los siguientes campos, para entrar
              a Tu Woaf.
            </Card.Text>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={schema}
              onSubmit={(result) => console.log(result)}
            >
              {({ handleSubmit, touched, errors, getFieldProps }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="fw-bold">
                      Correo electronico
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Ingresa tu correo aqui"
                      {...getFieldProps("email")}
                      isInvalid={touched.email && errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                    {!(touched.email && errors.email) && (
                      <Form.Text className="text-muted ms-1">
                        Recuerda utilizar los mismos datos de registro.
                      </Form.Text>
                    )}
                  </Form.Group>

                  <Form.Group controlId="validationFormik01">
                    <Form.Label className="fw-bold">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Ingresa tu contraseña aqui"
                      {...getFieldProps("password")}
                      isInvalid={touched.password && errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                    {!(touched.password && errors.password) && (
                      <Form.Text className="text-muted ms-1">
                        No compartiremos tus datos personales.
                      </Form.Text>
                    )}
                  </Form.Group>
                  <Button
                    className="d-block mx-auto mt-4 mb-3 fw-bold font-raleway"
                    size="lg"
                    type="submit"
                  >
                    Ingresa a Tu Woaf
                  </Button>
                </Form>
              )}
            </Formik>

            <Card.Link
              onClick={() => navigate("/bit02spa/register")}
              className="clickable-item d-block text-center"
            >
              Registrate
            </Card.Link>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
