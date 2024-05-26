import React from 'react';
import {useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
    background: ${props => props.bg};
    color:  ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding: 10px;
`
let NewBtn = styled.button(YellowBtn)`
 // 이런식으로 원래 버튼의 코드를 가져올 수 있다
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`

function Detail(props) {

    let {id} = useParams()
    let find = props.shoes.find((x)=>x.id == id)

    return (
        <div className={"container"}>
            <Box>
                <YellowBtn bg={"blue"}>버튼</YellowBtn>
                <YellowBtn bg={"orange"}>버튼</YellowBtn>
            </Box>

            <div className={"row"}>
                <div className={"col-md-6"}>
                    <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"} width={"100%"}/>
                </div>
                <div className={"col-md-6"}>
                    <h4 className={"pt-5"}>{find.title}</h4>
                    <p>{find.content}</p>
                    <p>{find.price}원</p>
                    <button className={"btn btn-danger"}>주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;