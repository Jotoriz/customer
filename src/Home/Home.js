import {
  Button,
  Card,
  Carousel,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { URL_PRODUCT } from "../API/config";
import { useNavigate } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL_PRODUCT);

        const data = response.data;

        setProducts(data);
      } catch (error) {
        console.log("Lỗi khi gửi yêu cầu đến API:", error);
      }
    };

    fetchData();
  }, []);

  const To = (slug) => {
    navigate(`/productdetail/${slug}`);
  };
  return (
    <div className="custom-container">
      <Row className="justify-content-center picker">
        <Col xl="1">
          <a>Sneaker</a>
        </Col>
        <Col xl="1">
          <a>Apparel</a>
        </Col>
        <Col xl="1">
          <a>Electronics</a>
        </Col>
        <Col xl="1">
          <a>Trading Cards</a>
        </Col>
        <Col xl="1">
          <a>Collectiles</a>
        </Col>
        <Col xl="1">
          <a>Accessories</a>
        </Col>
        <Col xl="1">
          <a>NFTs</a>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col className="Slide">
            <Carousel fade>
              <Carousel.Item>
                <img src="https://i.pinimg.com/originals/6f/a9/c3/6fa9c33211ce7c08f2cc4fcef6144b7d.png" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://i.pinimg.com/736x/c5/40/01/c540018ca1c7b93cb1fbc218ea0c73a7.jpg" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://anhdepfree.com/wp-content/uploads/2022/12/anh-nen-chill-4k-cho-may-tinh_46844205594.jpg" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Row>
            <Col>
              <h3>Most Popular Sneakers</h3>
            </Col>
          </Row>
          <Row>
            {products.map((sneaker) => (
              <Col xl="2" key={sneaker._id} onClick={() => To(sneaker.slug)}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={sneaker.img_path}
                  />
                  <Card.Body>
                    <Card.Text>{sneaker.name}</Card.Text>
                    <Card.Title>
                      {sneaker.retail_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>

        <Row>
          <h3>Popular Brands</h3>
          {products.map((sneaker) => (
            <Col xl="2" key={sneaker.id} onClick={() => To(sneaker.slug)}>
              <Card style={{ cursor: "pointer" }}>
                <Card.Img
                  className="cardimg"
                  variant="top"
                  src={sneaker.img_path}
                />
                <Card.Body>
                  <Card.Text>{sneaker.name}</Card.Text>
                  <Card.Title>
                    {sneaker.retail_price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          <Row>
            <Col>
              <h3>Featured Shoes</h3>
            </Col>
          </Row>
          <Row>
            {products.map((sneaker) => (
              <Col xl="2" key={sneaker.id} onClick={() => To(sneaker.slug)}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={sneaker.img_path}
                  />
                  <Card.Body>
                    <Card.Text>{sneaker.name}</Card.Text>
                    <Card.Title>
                      {sneaker.retail_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
