import { useState, useContext, useCallback, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import WeatherContext from "../WeatherContextProvider.jsx";

export const SearchBar = ()=>{
    let [formData, setFormData] = useState({input: ""});
    let {data, setData} = useContext(WeatherContext)

    // Handle form input change
    const handleChange =(e)=>{ 
        setFormData((prevState)=>{
            return {...prevState, input: e.target.value}
        })
    };


     // Fetch city data from api
    const handleSubmit =  (e)=>{   
        e.preventDefault() 
        console.log("form submited")
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${formData.input}&appid=1cf442e3a43bf41aa61d93ad10825e0a&units=metric`)
        .then((res)=> res.json())
        .then((res)=> {
            if(res.cod == 404){
                return alert(res.message)
            }
            setData({temp: res.main.temp, windSpeed: res.wind.speed , humidity: res.main.humidity, city: res.name})
        })
        .catch((error)=> console.log(error))
        setFormData({input: ""});
    };

    return(
        <div className="SearchBar flex justify-center my-8">
            <form onSubmit={handleSubmit}>
                <input value={formData.input} onChange={handleChange} type="text" name="input" id="input" placeholder="Search"  className="bg-gray-100 p-2 rounded-3xl pl-6 hover:cursor-pointer text-md" required/>
                <button  className="text-2xl font-extrabold bg-gray-100 ml-4 p-3 rounded-[50%] hover:cursor-pointer  hover:bg-green-400"><IoIosSearch/></button>
            </form>
        </div>
    )
};