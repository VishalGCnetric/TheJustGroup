import axios from 'axios'
import React, { createContext, useEffect } from 'react'
 
export const BrandContext = createContext()
const BrandContextProvider = ({children}) => {
  const [brands, setBrands] = React.useState({})
 
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/categories` );
        setBrands(response.data); // console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[])
  return (
    <BrandContext.Provider value={{brands}}>{children}</BrandContext.Provider>
  )
}

export default BrandContextProvider