import React from 'react'
import {Navbar,NavbarBrand,NavItem,NavLink,Nav,Container} from 'reactstrap'
import {FiShoppingCart} from 'react-icons/fi'

class NavBar extends React.Component{
    render(){
        return(
            <Navbar color='dark' dark>
                <Container>
                    <NavbarBrand>Shopping Cart</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className='white'>Cart <FiShoppingCart/></NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
export default NavBar;