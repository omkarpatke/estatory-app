import { createContext , useState , useContext , useEffect } from "react";
import { properties as data } from '../data/Data';

const PropertiesContext = createContext('');
const useProperties = () => useContext(PropertiesContext);


const PropertiesContextProvider = ({children}) => {
    const [properties, setProperties] = useState(data);
    const [filteredProperties, setFilteredproperties] = useState([]);
    const [favouriteProperties, setFavouriteproperties] = useState([]);

    useEffect(() => {
      setFilteredproperties(properties);
    } , [properties]);

    return (<PropertiesContext.Provider value={{favouriteProperties, setFavouriteproperties, properties, setProperties ,filteredProperties, setFilteredproperties }}>{children}</PropertiesContext.Provider>)

}

export { useProperties , PropertiesContextProvider }