import React from 'react';
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "./context/Auth";


function PrivateRoute({ component: Component, ...rest }) {
  const {UserData} = useAuth();
  React.useEffect(() => {

    return () => {
      
    }
  }, [])

  return(
    <Route 
      {...rest} 
      render={(props) => (
        (UserData.token !== undefined && UserData.token !== null) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      )}
    />
  );
}

export default PrivateRoute;