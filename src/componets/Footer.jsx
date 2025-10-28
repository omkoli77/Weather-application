import { MdOutlineWaves } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import WeatherContext from "../WeatherContextProvider";
import { useContext } from "react";

export const Footer = () => {
    let { data } = useContext(WeatherContext);

    return (
        <div className="footer flex justify-between w-full mt-10 h-40">
            <div className="1 m-4">
                <div className="1 flex text-xl">
                    <MdOutlineWaves className="text-3xl mr-2" />
                    {data.humidity}%
                </div>
                <p className="ml-10 text-lg">Humidity</p>
            </div>
            <div className="1 m-4">
                <div className="1 flex text-xl justify-end">
                    <FaWind className="text-3xl mt-1 mr-2" />
                    {data.windSpeed} Km/h
                </div>
                <p className="mr-10 mt-1 text-lg">Wind Speed</p>
            </div>
        </div>
    )
}