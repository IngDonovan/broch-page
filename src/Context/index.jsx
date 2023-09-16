import { createContext, useState, useEffect } from "react";

const EdnaContext = createContext();

const EdnaProvider = ({ children }) => {
  //Get Products
//   const [items, setItems] = useState(null);



  return (
    <EdnaContext.Provider
      value={{
        
      }}
    >
      {children}
    </EdnaContext.Provider>
  );
};

export { EdnaContext, EdnaProvider };
