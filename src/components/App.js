import React, { useState } from 'react';
import index from './index.js';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
}

export default Parent;
