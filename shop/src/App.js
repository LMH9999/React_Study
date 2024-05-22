import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import './App.css';
import data from './data'
import Shoes from "./components/Shoes";

function App() {
    let [shoes] = useState(data)

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
            <Container>
                <Row>
                    {
                        shoes.map((ele)=>{
                            return (
                                <Shoes shoes={ele}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </div>
    );
}


export default App;
