import React from 'react'
import {Nav,NavItem} from 'reactstrap'
import {Link} from 'react-router-dom'

const SideNav=function(){
    return(
        <>
            <b>Categories</b>
            <Nav vertical>
                <NavItem><Link to="/mens">Men</Link></NavItem>
                <NavItem>Women</NavItem>
                <NavItem>Children</NavItem>
            </Nav>
        </>
    );
}
export default SideNav