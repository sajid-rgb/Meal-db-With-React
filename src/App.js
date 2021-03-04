import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Contact from './Components/Contact/Contact';
import Foods from './Components/Foods/Foods';
import Form from './Components/Form/Form';

const App=()=>{



  return (
    <div className="App">
    <Header></Header>
    <Router>
      <Switch>
      <Route path='/Home'>
        <Foods></Foods>
        </Route>
        <Route exact path='/'>
        <Foods></Foods>
        </Route>
        <Route path='/Food'>
        <Foods></Foods>
        </Route>
        <Route path='/Contacts'>
        <Contact></Contact>
        </Route>
      </Switch>
    </Router>

    
    


 </div>

  );
  }

export default App;
