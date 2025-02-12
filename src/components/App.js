import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <Child isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
  );
}

export default Parent;
