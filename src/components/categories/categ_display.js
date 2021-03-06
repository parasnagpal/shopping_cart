import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardText,Container,Row,Col,Button,Spinner} from 'reactstrap'
import {MdAddShoppingCart} from 'react-icons/md'
import {addtocart} from '../actions/cartAction'

class Category extends React.Component{
    render(){
        let displayItems=this.props.items.map((item)=>{
            return(
                <Col key={item.id} xs="12" sm="6" md="3" lg="2" className="align-items-stretch">
                    <Card className="align-self-stretch shadow">
                        <CardImg top width="100%" src={item.img} alt="Prod Image"/>
                        <CardBody>
                            <CardTitle className="text-small ellipsis">{item.title}</CardTitle>
                            <Row>
                                <Col className="align-self-center"><CardText className="bold">₹{item.price}</CardText></Col>
                                <Col><Button color="dark" outline onClick={()=>this.props.addtocart(item.id,item.category)} className="rounded-circle"><MdAddShoppingCart/></Button></Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            );
        })
        return (
            <Container>
                <div className="d-flex justify-content-center">
                    <h1>Our Items</h1>
                </div>    
                <Row>
                    {displayItems}
                </Row>
            </Container>
        );
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        addtocart:function(id,category){
            dispatch(addtocart(id,category));
        }
    }
}

export {
    Category,
    mapDispatchToProps
}