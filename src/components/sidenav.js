import React from 'react'
import {Nav,NavItem,Row,NavLink} from 'reactstrap'

const SideNav=function(){
    return(
        <div>
            <h3><b>Categories</b></h3>
            <Nav vertical>
                <Row><NavItem><NavLink href="/men" className="color-black">Men</NavLink></NavItem></Row>
                <Row><NavItem><NavLink href="/women" className="color-black">Women</NavLink></NavItem></Row>
                <Row><NavItem><NavLink href="/children" className="color-black">Children</NavLink></NavItem></Row>
            </Nav>
        </div>
    );
}
export default SideNav