import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Head from './components/Head';
import Contacts from './components/Contacts';
import Foot from './components/Foot';
import ContactDetail from './components/ContactDetail';
import AddContact from './components/AddContact';
import Favorites from './components/Favorites'

function App() {
  return (
    <Router>
      <div>
        <Head />
        <Switch>
          <Route path="/" exact component={Contacts} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/addContact" exact component={AddContact} />
          <Route path="/contactDetail/:id" exact component={ContactDetail} />
        </Switch>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
