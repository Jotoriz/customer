import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Pruduct.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { URL_PRODUCT } from "../API/config";
import { useNavigate } from "react-router-dom";


function Product() {
  const Size = [];
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  for (let i = 1; i <= 18; i += 0.5) {
    Size.push({
      Number: i,
    });
  }

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
    <div>
      <Container>
        <Row>
          <img
            className="img1"
            src="https://anhdepfree.com/wp-content/uploads/2022/12/anh-nen-chill-4k-cho-may-tinh_46844205594.jpg"
          ></img>
        </Row>
        <Row>
          <Row className="Content">
            <Col xl="3">
              <h4>SNEAKER</h4>
              <h6>ADIDAS</h6> <h6>AIRJORDAN</h6> <h6>NIKE</h6>
              <h6>NEW BALANCE</h6> <h6>REEBOK</h6> <h6>OTHER BRAND</h6>
              <h6>LUXURY BRANDS</h6> <h6>COLLECTIONS</h6>
              <Row>
                <h4>SIZE TYPE</h4>

                <label>
                  <input type="checkbox" name="sizeType" value="Men" />
                  Men
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Women" />
                  Women
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Child" />
                  Child
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Presschool" />
                  Presschool
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Infant" />
                  Infant
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Toddler" />
                  Toddler
                </label>
              </Row>
              <Row>
                <Col xl="6">
                  {Size.map((item, index) => (
                    <Button key={index} className="size">
                      {item.Number}
                    </Button>
                  ))}
                </Col>
              </Row>
              <Row>
                <h4>PRICE</h4>

                <label>
                  <input type="checkbox" name="sizeType" value="Men" />
                  Under $100
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Women" />
                  $100 - $200
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Child" />
                  $200 - $300
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Presschool" />
                  $300 - $400
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Infant" />
                  $500 - $600
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Toddler" />
                  $700 +
                </label>
              </Row>
              <Row>
                <h4>RELEASE YEARS</h4>

                <label>
                  <input type="checkbox" name="sizeType" value="Men" />
                  2022
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Women" />
                  2021
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Child" />
                  2020
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Presschool" />
                  2019
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Infant" />
                  2018
                </label>

                <label>
                  <input type="checkbox" name="sizeType" value="Toddler" />
                  2017
                </label>
              </Row>
            </Col>
            <Col xl="9">
              <Row>
                <Col>
                  <h3>Product List</h3>
                </Col>
              </Row>
              <Row>
                {products.map((sneaker) => (
                  <Col xl="3" key={sneaker.id} onClick={() => To(sneaker.slug)}>
                    <Card style={{ cursor: "pointer", marginTop: "10px" }}>
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
                ))}
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
