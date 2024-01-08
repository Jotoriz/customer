import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Profile.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMoneyBill, faPaperPlane, faRightFromBracket, faUser } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  const data = [
    {
        icon: faUser,
        title: 'Profile',
        description: 'Learn what\'s unique to you',
    },
    {
        icon: faCartShopping,
        title: 'Buying',
        description: 'Active bids, In progress, Complete order',
    },
    {
        icon: faMoneyBill,
        title: 'Shelling',
        description: 'Learn what\'s unique to you',
    },
    {
        icon: faPaperPlane,
        title: 'Following',
        description: 'Following something',
    },
  ];
  const info = [
    {
        title: 'Name',
        content: 'Dat',
    },
    {
        title: 'Shoes size',
        content: 'not set',
    },
    {
        title: 'Email address',
        content: 'Admin@gmail.com',
    },
    {
        title: 'UserName',
        content: 'admin@gmail.com',
    },
  ]
    return ( 
    <div className="custom-container">
        
        <Row>
            <Col xl='3' className="Selector">
            {data.map((item, index) => (
                <Row key={index} className="select">
                    <Col xl='2' style={{ fontSize: '40px' }}>
                    <FontAwesomeIcon icon={item.icon} />
                    </Col>
                    <Col>
                    <Row>
                        <Col>
                        <h5>{item.title}</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        {item.description}
                        </Col>
                    </Row>
                    </Col>
                </Row>
            ))}
                <Row className="select">
                    <Col xl='2' style={{ fontSize: '40px' }}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    </Col>
                    <Col>
                    <Row>
                        <Col style={{marginTop: '10px'}}>
                        <h3>Logout</h3>
                        </Col>
                    </Row>
                    </Col>
                </Row>
            
            </Col>
            <Col>
                <Row>
                    <Col><h2>Profile</h2></Col>
                    <Col style={{textAlign: "right"}} ><Button variant="info">Edit</Button></Col>
                </Row>
                <hr/>
                <Row>
                {info.map((item, index) => (
                    <Col key={index} xl="4">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                    </Col>
                ))}
                <Col>
                    <h5>Reset Password</h5>
                    <Button variant="danger">Reset Password</Button>
                </Col>
                </Row>
            </Col>
        </Row>
    </div>);
}

export default Profile;