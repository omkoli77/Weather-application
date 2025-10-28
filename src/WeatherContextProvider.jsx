import { createContext, useState } from "react";
const WeatherContext = createContext();

export const WeatherContextProvider = ({children})=>{
    let [data, setData] = useState({temp: 0, windSpeed: 0 , humidity: 0, city: ""});

    return(
       <WeatherContext.Provider value={{data, setData}}>
        {children}
       </WeatherContext.Provider>
    )
}

export default WeatherContext;
