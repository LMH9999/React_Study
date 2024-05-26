import './App.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import './App.css';
import data from './data'
import Shoes from "./components/Shoes";
import {Link, Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./components/About";

function App() {
    let [shoes] = useState(data)
    let navigate = useNavigate()

    return (
        <div className="App">

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">LMHShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={()=>{ navigate('/')}}>Home</Nav.Link>
                        <Nav.Link onClick={()=>{ navigate('/detail')}}>Detail</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path={"/"} element={
                    <>
                        <div className={"main-bg"}/>
                        <Container>
                            <Row>
                                {
                                    shoes.map((ele) => {
                                        return (
                                            <Shoes shoes={ele}/>
                                        )
                                    })
                                }
                            </Row>
                        </Container>
                    </>
                }/>
                <Route path={"/detail/:id"} element={ <Detail shoes={shoes}/> }/>


                <Route path={"/about"} element={ <About/> }>
                    {/* nested route */}
                    <Route path={"member"} element={ <div>멤버임</div> }/>
                    <Route path={"location"} element={ <div>위치정보임</div> }/>
                </Route>

                <Route path={"*"} element={ <div>404 Not Found 페이지요</div> }/>
            </Routes>


        </div>
    );
}


export default App;
