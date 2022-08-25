import { createContext , useState , useContext , useEffect } from "react";
import { properties as data } from '../data/Data';

const PropertiesContext = createContext('');
const useProperties = () => useContext(PropertiesContext);


const PropertiesContextProvider = ({children}) => {
    const [properties, setProperties] = useState(data);
    const [filteredProperties, setFilteredproperties] = useState([]);

    useEffect(() => {
      setFilteredproperties(properties);
    } , []);

    return (<PropertiesContext.Provider value={{ properties, setProperties ,filteredProperties, setFilteredproperties }}>{children}</PropertiesContext.Provider>)

}

export { useProperties , PropertiesContextProvider }