import './App.css';
import {Container, Nav, Navbar, Row} from "react-bootstrap";
import {useState} from "react";
import './App.css';
import data from './data'
import Shoes from "./components/Shoes";
import {Route, Routes, useNavigate} from "react-router-dom";
import Detail from "./pages/Detail";
import About from "./components/About";
import axios from "axios";

function App() {
    let [shoes,setShoes] = useState(data)
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
                        <button onClick={()=>{
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                                .then((result)=>{
                                    console.log(result.data)
                                    let copy = [...shoes,...result.data]
                                    setShoes(copy)
                                })
                                .catch(()=>{
                                    console.log("실패")
                                })


                            /*Promise.all([axios.get('/url1'),axios.get('/url2')])
                                .then(()=>{

                                })*/

                            // axios.post('/asdasd',{name : 'kim'})

                        }}>더보기</button>
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
