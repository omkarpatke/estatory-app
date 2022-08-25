import { createContext , useState , useContext } from "react";
import { properties as data } from '../data/Data';

const PropertiesContext = createContext('');
const useProperties = () => useContext(PropertiesContext);


const PropertiesContextProvider = ({children}) => {
    const [properties, setProperties] = useState(data);
    return (<PropertiesContext.Provider value={{properties, setProperties}}>{children}</PropertiesContext.Provider>)

}

export { useProperties , PropertiesContextProvider }