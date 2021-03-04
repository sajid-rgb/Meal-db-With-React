import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="d-flex justify-content-between bg-info">
                
                <div>
                <Navbar >
                <Navbar.Brand href="/Home" style={{fontSize:'35px',color:'red',fontWeight:'bold'}}>MealDb</Navbar.Brand>
                </Navbar>
                </div>
                <div>
                <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav >
                    <Nav.Link href='/Food' style={{color: 'blue',fontSize:'20px'}}>Foods</Nav.Link>
                    <Nav.Link href='/Order' style={{color: 'blue',fontSize:'20px'}}>Order</Nav.Link>
                    <Nav.Link href='/Contacts' style={{color: 'blue',fontSize:'20px'}}>Contacts</Nav.Link>

                </Nav>
    
                </Navbar.Collapse>
                </Navbar>
                </div>
            </div>
    );
};

export default Header;