import React from 'react'
import {connect} from 'react-redux'
import {Card,CardImg,CardBody,CardTitle,CardText,Container} from 'reactstrap'

class Home extends React.Component{
    render(){
        let displayItems=this.props.items.map((item)=>{
            return(
                <Card>
                    <CardImg top width="100%" src={item.img} alt="Prod Image"/>
                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardText>{item.price}</CardText>
                    </CardBody>
                </Card>
            );
        })
        return (
            <Container>
                {displayItems}
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