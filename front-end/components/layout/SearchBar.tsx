import { Row, Col, Card, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <Card>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form>
      </Row>
    </Card>
  );
};

export default SearchBar;
