
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';
import Authprovider from './context/Authprovider';



function App() {
  return (
    <div className="App">
      <Authprovider>
        
       <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
                 <Home></Home>
            </Route>
             <Route exact path='/home'>
                 <Home></Home>
             </Route>
             <Route exact path='/login'>
               <Login></Login>
             </Route>
             <Route exact path='/register'>
               <Register></Register>
             </Route>
             <PrivateRoute exact path='/shipping'>
               <Shipping></Shipping>
             </PrivateRoute>

          </Switch>
        </BrowserRouter>
      
      </Authprovider>
    </div>
  );
}

export default App;
