import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Admin = () => {
  return (
    <div>
      <Container>
        <Row className='my-5 py-5 justify-content-center'>
          <Col lg={6}>
            <h1 className='fs-1 text-center'>ADMIN PAGE</h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Admin
