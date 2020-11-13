import Col from "../components/Col"
import Container from "../components/Container"
import Row from "../components/Row"

const Page404 = () => {
  return (
    <Container className='h-100'>
      <Row className='h-100 align-items-center justify-content-center'>
        <Col sm={12} md={10} lg={8} xl={6}>
          <h1 className='text-center'>Page not found</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default Page404
