import React from 'react'
import {Navbar,NavbarBrand,NavItem,NavLink,NavbarText,Nav,Container} from 'reactstrap'

class NavBar extends React.Component{
    render(){
        return(
            <Navbar color='dark' dark>
                <Container>
                    <NavbarBrand>Shopping Cart</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <NavLink className='white'>Cart</NavLink>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}
export default NavBar;