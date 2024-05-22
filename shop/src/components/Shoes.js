import React from 'react';
import {Col} from "react-bootstrap";

function Shoes({shoes}) {
    return (
        <Col>
            <img src={"https://codingapple1.github.io/shop/shoes"+(shoes.id+1)+".jpg"} width={"80%"} alt={"사진"}/>
            <h4>{shoes.title}</h4>
            <p>{shoes.content}</p>
        </Col>
    );
}

export default Shoes;