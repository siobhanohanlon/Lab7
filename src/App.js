//Import CSS
import 'bootstrap/dist/css/bootstrap.min.css'; //NavBar
import './App.css';

//Import React
import React from 'react';

//Import Navbar
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

//Import Components
import { Content } from './components/home';
import { Read } from './components/read';
import { Create } from './components/create';

//Import Router
import { BrowserRouter as Router,
         Routes,  Route } from 'react-router-dom';

//Class
class App extends React.Component {
  //Runs Code
  render(){
    //Returns after running
    return (
      <Router>
        <div className="App">
          {/* Define NavBar */}
          <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
          </Navbar>
          
          {/* Use Routing to change to page and call different components */}
          <Routes>
            <Route path = '/' element = {<Content></Content>}></Route>
            <Route path = '/read' element = {<Read></Read>}></Route>
            <Route path = '/create' element = {<Create></Create>}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;