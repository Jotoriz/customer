import { Button, Col, Form, Row } from "react-bootstrap";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthAction from "../actions/auth.actions";

function Header() {
  const dispatch = useDispatch();
   const auth = localStorage.getItem("authenticate") || false;
   console.log(auth);
   const navigate = useNavigate();
   const handleLogout = () => {
    dispatch(AuthAction.signout());
   }
   const GoToProfile = () =>{
    navigate("/profile")
   }
  return (
    <Row style={{ marginTop: "20px" }}>
      <Col xl="1">
        <img
          style={{ height: "80px", marginTop: "-20px" }}
          src="https://i.pinimg.com/564x/a7/b5/68/a7b56854f7699984871e0ba84e2aa5d2.jpg"
        ></img>
      </Col>
      <Col xl="5">
        <Form.Control
          type="Search"
          id="search"
          placeholder="Search for brand, Color, etc."
        />
      </Col>
      <Col xl="1">
        <Button>Search</Button>
      </Col>
      <Col xl="1" className="a1">
        <a>Product</a>
        <a>News</a>
        <a>About</a>
      </Col>
      <Col xl="4" style={{ paddingLeft: "204px" }}>

        {auth == false && <Link to="/login"><Button>Login</Button></Link>}
        {auth && <Button onClick={handleLogout}>Logout</Button>}
        {auth && <Button onClick={GoToProfile} style={{ marginLeft: "10px" }}>Profile</Button>}
        
        <Button style={{ marginLeft: "10px" }}>Sell</Button>
      </Col>
      <hr />
    </Row>
  );
}

export default Header;
