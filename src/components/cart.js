import React from 'react'
import {Card,CardBody,CardImg,CardText,CardTitle,Row,Col,Container,Button} from 'reactstrap'
import {connect} from 'react-redux'

class Cart extends React.Component{

    constructor(props){
        super(props)
        this.card=this.card.bind(this);
        this.checkout=this.checkout.bind(this);
    }

    checkout(){
        return(
            <>
                <h3>Order Total:{this.props.total}</h3>
                <Row className="justify-content-center"><Button outline>Checkout</Button></Row>
            </>   
        );
    }

    card(item){
        return(
            <>
                <Card className="mb-3">
                    <Row className="no-gutters">
                        <Col md="4">
                            <CardImg src={item.img} alt="..."/>
                        </Col>
                        <Col md="8">
                            <CardBody >
                                <CardTitle className="card-title">{item.title}</CardTitle>
                                <CardText className="card-text">{item.quantity}</CardText>
                                <CardText className="card-text"><small className="text-muted">{item.price}</small></CardText>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>
            </>    
        );
    }

    render(){
        return(
            <Container>
                <h1>Your orders</h1> 
                <Row>
                    <Col sm="12" md="8">{this.props.cartItems.map(item=>this.card(item))}</Col>
                    <Col md="4" className="shadow">{this.checkout()}</Col>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        cartItems:state.cartItems,
        total:state.total
    }
}

export default connect(mapStateToProps)(Cart)