import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import React from 'react';

function Child({ isLoggedIn, setIsLoggedIn }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <h2>Welcome, you are logged in!</h2>;
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default index;

ReactDOM.render(<App />, document.getElementById("root"));
