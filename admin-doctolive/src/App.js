/* 
blue daintree: #02243C |  rgb(2, 36, 60)

blue endeavour #005DB3 | rgb(0, 93, 179)

blue danube #5195CE |  rgb(81, 149, 206)

grey mercury #E6E6E6 | rgb(230, 230, 230)

grey   #F9F9F9 |  rgb(249, 249, 249) 
apple green #5BC236 | rgb(91, 194, 54)

*/





import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import PrivateRoute from './PrivateRoute';

import { AuthContext } from "./context/Auth";

import Home from './layouts/AdminHome'
import "bootstrap/dist/css/bootstrap.css";
import "assets/css/style.css";

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import AdminLayout from "layouts/Admin";


const theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#005DB3",
      main: "#9c27b0",
    },
    secondary: {
      main: '#5BC236',
    },
  },
});
function App(props) {
  let existingTokens = localStorage.getItem("userData");

  existingTokens = (existingTokens !== "undefined" && existingTokens !== null) ? JSON.parse(existingTokens) : {};
  
  const [UserData, setUserData] = useState( existingTokens);
  const setUser = (data) => {
    if(data){
      localStorage.setItem("userData", JSON.stringify(data));
      setUserData(data);
    }else{
      localStorage.setItem("userData", data);
      setUserData(data);
    }
   
  }
 

  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ UserData, setUserData: setUser }}>
        <Router>
          <div>
          <Switch>
            <PrivateRoute path="/admin" component={AdminLayout} />
            <Route path="/" component={Home} />
            <Redirect from="/" to="/admin" />
          </Switch>
          </div>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;

