const apiKey = import.meta.env.VITE_API_SECRETE;
import { SearchBar } from "./componets/SearchBar";
import { IoSunnySharp } from "react-icons/io5";
import { FaCloudSunRain } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import { Footer } from "./componets/Footer";
import { useContext, useEffect } from "react";
import WeatherContext from "./WeatherContextProvider";

const Home = ()=>{
    let {data, setData} = useContext(WeatherContext);

    useEffect(()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${apiKey}=metric`)
        .then((res)=> res.json())
        .then((res)=> {
            if(res.cod == 404){
                return alert(res.message)
            }
            setData({temp: res.main.temp, windSpeed: res.wind.speed , humidity: res.main.humidity, city: res.name})
        })
        .catch((error)=> console.log(error))
    }, []);


    return(
        <div className="Home flex bg-purple-200 h-dvh justify-center items-center">
            <div className="weatherApp text-center w-100 bg-[linear-gradient(54deg,#2f4680,#500ae4)] h-140 rounded-xl">
                <SearchBar/>

                <div className="card flex justify-center text-gray-200 flex-col items-center  mt-10 ">
                    {data.humidity>80? <FaCloudSunRain className="text-7xl text-gray-400"/>: data.temp>22? <IoSunnySharp className="text-7xl text-yellow-500"/>: <FaRegSnowflake className="text-7xl text-pink-500"/>}
                    <div className="heading">
                        <p className="text-6xl mt-15 font-semibold">{Math.floor(data.temp)}&deg;C.</p>
                        <p className="text-3xl mt-2 font-semibold">{data.city}</p>
                    </div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
};

export default Home