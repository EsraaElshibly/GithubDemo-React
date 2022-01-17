
import React from 'react';
import Link from '../link/link'
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'

//class component  >>>>lifecycle hooks  , state

class Header extends React.Component {

  constructor() {

    super();
    this.state = {
      counter: 1,
      colorClass: "nav",
      x: ""
    }
    console.log("from constructor")//1
  }

  componentDidMount() {

    // console.log("from componentDidMount")//3

  }
  componentDidUpdate() {//update


    // console.log("from componentDidUpdate");


  }
  componentWillUnmount() {
    //clean up
    // console.log("from componentWillUnmount")

  }
  handleIncreament = (y) => {
    console.log(y)
    this.setState({ counter: ++this.state.counter });
    this.setState({ colorClass: "nav1" });

    //this.setState({x:50})

  }

  render() {

    console.log(this.props)
    console.log("from render")//2
    return (
      <>
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>

    )



  }



}


export default Header;