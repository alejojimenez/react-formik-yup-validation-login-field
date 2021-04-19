import { Container, Row, Col } from 'react-bootstrap';
import FormLogin from './components/formLogin';
import './App.css';

function App() {
  return (
    <Container className="mt-5">
      <Row className="w-100 d-flex justify-content-center">
        <Col xs="12" lg="8">
          
          <FormLogin />
        
        </Col>
      </Row>
    </Container>
  );
}

export default App;
