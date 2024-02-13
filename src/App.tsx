import React from "react";
import "./App.css";
import funnyImg from "./assets/funnyImg.png";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Benjamin Zlatin</h1>
            <p>Hello World</p>
            <img src={funnyImg} alt="Funny image from google"></img>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container className="justify-content-center">
                <Row>
                    <Col className="d-flex justify-content-center">
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "30px",
                                width: "60px"
                            }}
                        ></div>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <div
                            style={{
                                backgroundColor: "red",
                                height: "30px",
                                width: "60px"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
