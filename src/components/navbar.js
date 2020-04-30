import React from 'react'
import {Navbar,NavbarBrand,NavItem,NavLink,Nav,Container} from 'reactstrap'
import {Link} from 'react-router-dom'
import {FiShoppingCart} from 'react-icons/fi'

class NavBar extends React.Component{
    render(){
        return(
            <Navbar color='dark' dark>
                <Container>
                    <NavbarBrand>Shopping Cart</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <Link to="/cart"><NavLink className='white'>Cart <FiShoppingCart/></NavLink></Link>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
export default NavBar;