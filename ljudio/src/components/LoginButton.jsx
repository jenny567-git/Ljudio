import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();
    
    const logoutWithRedirect = () =>
      logout({
        returnTo: window.location.origin,
    });
    console.log(user);
    return (
        <div>
            {!isAuthenticated && ( <button onClick={() => loginWithRedirect()}>Log In</button>)}
            {isAuthenticated && (<p>Welcome {user.nickname}</p>)}
            {isAuthenticated && (<button onClick={() => logoutWithRedirect()}>Log out</button>)}
        </div>
    )
}

export default LoginButton