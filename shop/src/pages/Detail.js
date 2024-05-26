import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
// import styled from "styled-components";

/*let YellowBtn = styled.button`
    background: ${props => props.bg};
    color:  ${props => props.bg === 'blue' ? 'white' : 'black'};
    padding: 10px;
`
let NewBtn = styled.button(YellowBtn)`
 // 이런식으로 원래 버튼의 코드를 가져올 수 있다
`

let Box = styled.div`
    background: grey;
    padding: 20px;
`*/

function Detail(props) {

    let [count,setCount] = useState(0)
    let [alert,setAlert] = useState(true)

    let {id} = useParams()
    let find = props.shoes.find((x)=> String(x.id) === String(id))

    useEffect(() => {
        let a = setTimeout(()=>{ setAlert(false) },2000)
        return ()=>{
            //useEffect가 실행 되기 전에 실행되는 코드
            clearTimeout(a)
        }
    },[]);


    return (
        <div className={"container"}>
            {/*<Box>*/}
            {/*    <YellowBtn bg={"blue"}>버튼</YellowBtn>*/}
            {/*    <YellowBtn bg={"orange"}>버튼</YellowBtn>*/}
            {/*</Box>*/}
            {
                alert == true
                    ?   <div className={"alert alert-warning"}>
                            2초 이내 구매시 할인
                        </div>
                    : null
            }

            {count}
            <button onClick={() => {
                setCount(count + 1)
            }}>버튼</button>

            <div className={"row"}>
                <div className={"col-md-6"}>
                    <img src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"} width={"100%"} alt={"사진"}/>
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