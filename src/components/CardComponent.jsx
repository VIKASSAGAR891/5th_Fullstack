import { useDispatch } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

function CardComponent() {
  const dispatch = useDispatch();

  const courses = [
    { title: "Web Development", price: 200 },
    { title: "Data Science", price: 300 },
    { title: "AI & ML", price: 400 }
  ];

  return (
    <Container className="my-5">
      <Row>
        {courses.map((course, index) => (
          <Col md={4} key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Text>Price: ${course.price}</Card.Text>

                <Button
                  onClick={() => dispatch(addItem(course))}
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponent;