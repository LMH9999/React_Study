import './App.css';
import {useState} from "react";

function App() {

    let [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학'])
    let [thumb, setThumb] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false)
    let [modalTitle, setModalTitle] = useState(0)
    let [input, setInput] = useState('')

    const changeTitle = () => {
        let copy = [...title]
        copy[0] = '여자 코트 추천'
        setTitle(copy)
    }

    return (
        <div className="App">
            <div className={"black-nav"}>
                <h4 style={{color: 'white', fontSize: '16px'}}>블로그임</h4>
            </div>

            <button onClick={changeTitle}>글수정
            </button>

            <button onClick={() => {
                let copy = [...title]
                copy.sort()
                setTitle(copy)
            }}>가나다순정렬
            </button>

            {/*<div className={"list"}>*/}
            {/*    <h4 onClick={()=>{setModal(!modal)}}>{title[0]} <span onClick={() => {*/}
            {/*        setThumb(thumb + 1)*/}
            {/*    }}>👍</span> {thumb} </h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className={"list"}>*/}
            {/*    <h4>{title[1]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}
            {/*<div className={"list"}>*/}
            {/*    <h4>{title[2]}</h4>*/}
            {/*    <p>2월 17일 발행</p>*/}
            {/*</div>*/}

            {
                title.map(function (e, i) {
                    return (
                        <div className={"list"} key={i}>
                            <h4 onClick={() => {
                                if (modalTitle === i) {
                                    setModal(!modal)
                                }
                                setModalTitle(i)
                            }}>{e}
                                <span onClick={(e) => {
                                    e.stopPropagation()
                                    let copy = [...thumb]
                                    copy[i] += 1
                                    setThumb(copy)
                                }}>👍</span> {thumb[i]} </h4>
                            <p>2월 17일 발행</p>
                            <button onClick={() => {
                                let temp = [...title]
                                temp.splice(i, 1)
                                setTitle(temp)
                                if (modalTitle === i) {
                                    setModal(!modal)
                                }
                            }}>삭제
                            </button>
                        </div>
                    )
                })
            }

            <input onChange={(e) => {
                setInput(e.target.value)
                console.log(input)
            }}/>
            <button onClick={() => {
                setTitle([...title, input])
                setThumb([...thumb, 0])
            }}>글작성
            </button>

            {
                modal === true ? <Modal title={title} modalTitle={modalTitle} changeTitle={changeTitle}/> : null
            }

        </div>
    );
}

function Modal(props) {
    return (
        <div className={"modal"}>
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={props.changeTitle}>글수정</button>
        </div>
    )
}

export default App;
