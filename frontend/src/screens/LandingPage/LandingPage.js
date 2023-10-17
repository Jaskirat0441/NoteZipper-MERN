import React from 'react'
import { Button, Container,Row } from 'react-bootstrap';
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className="intro-text">
                    <div>
                        <h1 className="title">Welcome to Note Zipper</h1>
                        <p className='subtitle'>One Safe place for all your notes</p>
                    </div>
                    <div className="btn-container">
                        <a href="/login" ><Button size="lg" className='landingButton' variant="dark">Login</Button></a>
                        <a href="/register"  ><Button variant="outline-dark" size="lg" className='landingButton'>Signup</Button></a>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default LandingPage