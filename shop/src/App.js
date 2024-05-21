import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import shoes1 from './img/shoes1.jpg'
import clothe1 from './img/clothe1.jpg'
import watch1 from './img/watch1.jpg'

function App() {
  return (
    <div className="App">

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">LMHShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <div className={"main-bg"}/>
        <div></div>
        <Container>
            <Row>
                <Col>
                    <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width={"80%"}/>
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
                <Col>
                    <img src={"https://codingapple1.github.io/shop/shoes2.jpg"} width={"80%"}/>
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
                <Col>
                    <img src={"https://codingapple1.github.io/shop/shoes3.jpg"} width={"80%"}/>
                    <h4>상품명</h4>
                    <p>상품설명</p>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default App;
