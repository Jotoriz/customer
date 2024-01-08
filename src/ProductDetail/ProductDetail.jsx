import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import "./ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeart,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

import { URL_PRODUCT } from "../API/config";
import {useNavigate, useParams } from "react-router-dom";
function ProductDetail() {
    const [products, setProducts] = useState([]);
    const { slug } = useParams();
    const navigate = useNavigate();

    console.log(slug);
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
    <Container>
      <Row>
        <Col className="Title">Sneaker</Col>
        <Col className="iconTop">
          <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>
        </Col>
      </Row>
      <Row>
        <Col className="Title">Dành cho người đã giàu</Col>
      </Row>
      {products.map((sneaker) => ((
        sneaker.slug == slug && <Row>
          <Col>
            <img
              style={{ height: "350px" }}
              src={sneaker.img_path}
            ></img>
          </Col>
          <Col>
            <Row className="thaotac">
              <Col>
                <Button variant="success">Buy or Bid</Button>
              </Col>
              <Col>
                <p>Lowest Ask</p>
                <h5>{sneaker.retail_price.toLocaleString("vi-VN", {style: "currency",currency: "VND",})}</h5>
              </Col>
            </Row>
            <Row className="thaotac">
              <Col>
                <Button variant="dark">Sell or Ask</Button>
              </Col>
              <Col>
                <p>Highiest Bid</p>
                <h5>{sneaker.retail_price.toLocaleString("vi-VN", {style: "currency",currency: "VND",})}</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      )))}
      <Row>
        <Row>Related Product</Row>
        <Row>
          {products.map((sneaker) => ((
              <Col xl="2" key={sneaker.id} onClick={() => To(sneaker.slug)}>
                <Card style={{ cursor: "pointer" }}>
                  <Card.Img
                    className="cardimg"
                    variant="top"
                    src={sneaker.img_path}
                  />
                  <Card.Body>
                    <Card.Text>{sneaker.name}</Card.Text>
                    <Card.Title>{sneaker.retail_price.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          ))}
        </Row>
      </Row>
      <hr />
      <Row>
        <Col>
        <h4>Product Detail</h4>
        {products.map((sneaker) => ((
          sneaker.slug == slug && <dl>
            <dt>Brand</dt>
            <dd>{sneaker.brand}</dd>

            <dt>Description</dt>
            <dd>{sneaker.description}</dd>

            <dt>Type</dt>
            <dd>{sneaker.type}</dd>

            <dt>Price</dt>
            <dd>{sneaker.retail_price.toLocaleString("vi-VN", {style: "currency",currency: "VND",})}</dd>
          </dl>
          )))}
        </Col>
        <Col style={{ marginTop: "50px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          reiciendis minima nobis aperiam numquam nam voluptatum quasi iusto?
          Itaque fugit eos tempore, aliquid fugiat deleniti repudiandae minus
          illum ipsum porro?
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
