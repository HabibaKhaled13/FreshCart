import React, { createContext, useState, useEffect } from 'react';

export let UserContext = createContext();

export default function UserContextProvider(props) {
  const [Login, setLogin] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setLogin(token);
    }
  }, []);

  return (
    <UserContext.Provider value={{ Login, setLogin }}>
      {props.children}
    </UserContext.Provider>
  );
}
