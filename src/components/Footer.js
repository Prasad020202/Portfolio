import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <p className="mt-3 ml-3">p1440666@gmail.com</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>2023 by p</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
