import { useState } from "react";

function ParentComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-6 max-w-md mx-auto text-center border rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>
      <ChildComponent isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} />
    </div>
  );
}

function ChildComponent({ isLoggedIn, onLogin }) {
  if (isLoggedIn) {
    return <p className="text-green-500">You are logged in!</p>;
  }

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      onClick={onLogin}
    >
      Log In
    </button>
  );
}

export default ParentComponent;
