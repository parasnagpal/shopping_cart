import React from 'react'
import {connect} from 'react-redux'
import {Card,CardImg,CardBody,CardTitle,CardText,Container,Row,Col} from 'reactstrap'

class Home extends React.Component{
    render(){
        let displayItems=this.props.items.map((item)=>{
            return(
                <Col key={item.id} xs="12" sm="6" md="3" lg="2" className="align-items-stretch">
                    <Card className="align-self-stretch shadow">
                        <CardImg top width="100%" src={item.img} alt="Prod Image"/>
                        <CardBody>
                            <CardTitle className="text-small">{item.title}</CardTitle>
                            <CardText className="bold">{item.price}</CardText>
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

const mapStateToProps=(state)=>{
    return {
        items:state.items
    }
}

export default connect(mapStateToProps)(Home)