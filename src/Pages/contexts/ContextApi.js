import React, { createContext,useContext,useState ,useEffect} from 'react'

const Estado = createContext();


const ContextApi = ({ children }) => {
  //hook da currency e do simbolo 
  const [estado, setEstado] = useState(false);
 
  return (
    //return dos valores para toda a app da currency , symbol e setcurrency .
    <Estado.Provider value={{estado,setEstado}}>
      {children}
    </Estado.Provider>
  );
};

export default ContextApi;

export const ContextState = () => {
    return useContext(Estado);
};
