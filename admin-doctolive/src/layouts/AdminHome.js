import React, {useState} from 'react'

import { Switch, Route, Link, withRouter } from "react-router-dom";

import { Navbar, Nav, Container, Row, NavItem} from 'react-bootstrap'
import Login from './../views/Login'

import  autoBind  from 'react-autobind';


export default class AdminHome  extends React.Component  {

    constructor(props){
        super(props)
        this.state = {
            sideNaveToggle: false,
        }
        autoBind(this)
    }
   
    
    openSidebar () {
        this.setState( {sideNaveToggle: !this.state.sideNaveToggle})
    }

    render(props){
        let {sideNaveToggle} = this.state
        return (
            <div className={"admin-home" }>
                {/* <HeaderWithRouter {...props} openSidebar={this.openSidebar} sideNaveToggle={sideNaveToggle} /> */}

                <div className={"main-home" + (sideNaveToggle ? " collapsed" : "")}>

                    <Switch>
                        <Route exact path={["/", "/login"]} component={Login} />
                        <Route exact path="/register" component={Login} />
                        <Route exact path="/lock-screen" component={Login} />
                        <Route exact path="/reset-password" component={Login} />
                    </Switch>

                </div>

                <Copyright />
            </div>
        )

    }

   
}

// const NavbarHome = (props) => (

//     <Navbar style={{position:"absolute", width:"100%", zIndex: 9 }} collapseOnSelect expand="lg" bg="transparent" variant="dark">
//         <Container>
//             {/* <div className="navbar-wrapper"> */}
//             <Row className={"navbar-wrapper" + (props.sideNaveToggle ? " collapsed" : "")}>
//             <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//                 <div className="navbar-toggle">
//                     <Navbar.Toggle 
//                     onClick={() => {props.openSidebar()}}
//                     children={
//                         < >
//                             <span className="navbar-toggler-bar bar1" />
//                             <span className="navbar-toggler-bar bar2" />
//                             <span className="navbar-toggler-bar bar3" />
//                         </>
//                     } 
//                     />
//                 </div>
//             </Row>
               
              
//             <Navbar.Collapse className={"" + (props.sideNaveToggle ? " collapsed" : "")}>
//                 <Nav className="mr-auto" as="ul"  >
//                     <NavItem as="li">
//                         <Nav.Link as={Link} to="/register" href="/register">Register</Nav.Link>
//                     </NavItem>
//                     <NavItem as="li">
//                         <Nav.Link as={Link} to="/login" href="/login">Login</Nav.Link>
//                     </NavItem>
//                     <NavItem as="li">
//                         <Nav.Link as={Link} to="/lock-screen" href="/lock-screen">Lock screen</Nav.Link>
//                     </NavItem>
//                 </Nav>
//                 {/* <Nav>
//                 <Nav.Link href="#deets">More deets</Nav.Link>
//                 <Nav.Link eventKey={2} href="#memes">
//                     Dank memes
//                 </Nav.Link>
//                 </Nav> */}
//             </Navbar.Collapse>
//         </Container>
        
        
//         </Navbar>
// );

// const HeaderWithRouter = withRouter(NavbarHome);
function Copyright() {
    return (
        <div style={{position:'absolute', bottom:0, width:'100%', display:'flex', justifyContent:'center',}}>
            <p style={{color: "#fff"}}>
                {'Copyright © '}
                <Link color="inherit" to="https://pelux.ma/">
                PELUX
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </p>
        </div>
     
    );
  }
  