/* 
blue daintree: #02243C |  rgb(2, 36, 60)

blue endeavour #005DB3 | rgb(0, 93, 179)

blue danube #5195CE |  rgb(81, 149, 206)

grey mercury #E6E6E6 | rgb(230, 230, 230)

grey   #F9F9F9 |  rgb(249, 249, 249) 
apple green #5BC236 | rgb(91, 194, 54)

*/





import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import { AuthContext } from "./context/Auth";

import "bootstrap/dist/css/bootstrap.css";

import 'react-fancybox/lib/fancybox.css'

import "assets/css/style.css";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MedecinPro from "./layouts/Layout";
import NotFound from './layouts/notFound';
import Login from "views/Login";

// import Admin from './layouts/Admin'
import moment from 'moment'
import MomentLangue from './MomentLangu'
import Cookies from 'js-cookie'


moment.locale("fr",  MomentLangue["fr"]); // it is required to select default locale manually


const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#005DB3",
      main: "#1AB9B9",
    },
    secondary: {
      main: '#5BC236',
    },
    warning:{
      main: '#5BC236',
    }
  },
  typography: {
    fontFamily: [
      '"Poppins"',
      'Roboto',
      'sans-serif',

    ].join(','),

  },
});
function App() {
  let existingTokens = Cookies.get("userData");

  existingTokens = (existingTokens && existingTokens !== null) ? JSON.parse(existingTokens) : {};
  
  const [UserData, setUserData] = useState( existingTokens);
  
  const setUser = (data) => {
    if(data){
      Cookies.set("userData", JSON.stringify(data));
      setUserData(data);
    }else{
      Cookies.remove("userData");
      setUserData({});
    }
   
  } 
 

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ UserData, setUserData: setUser }}>
        <Router>
          <div>
          <Switch>
            <Route path="/signin" component={Login} />
            <PrivateRoute path="/" component={MedecinPro} />
            <Route path="/not-found" render={props => <NotFound {...props} />} />
          </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;

