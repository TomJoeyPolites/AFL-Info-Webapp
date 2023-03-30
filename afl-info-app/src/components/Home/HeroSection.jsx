import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function HeroSection() {
    return (
        <div className='heroImg'>
            <Container className='heroSection text-center'>
                <Row className='row-cols-1 align-content-center' >
                    <Col>
                        <h1>Welcome to White Line Fever</h1>
                    </Col>
                    <Col>
                        <h3>Your new home of information for all AFL games, teams and ladders!</h3>
                    </Col>
                    <Row>
                        <Col className="text-start">
                            <h5>
                                For those who suffer from an AFL induced addiction - White Line Fever is a web application built with React to display the Squiggle API
                            </h5>
                        </Col>
                        <Col className="col-5" />
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default HeroSection