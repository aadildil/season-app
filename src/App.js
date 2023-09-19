import React,{useState} from "react";
import summer from "./images/summer.jpg"
import rain from "./images/rain.jpg"
import spring from "./images/spring.jpg"
import autumn from "./images/autumn.jpg"
import winter from "./images/winter.jpg"
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  

const App=()=>{

    const [lat,setLat]=useState(null);
    const [long,setLong]=useState(null);
    const [hemisphere,setHemisphere]=useState(null);
    const [month,setMonth]=useState((new Date()).getMonth()+1)

    function getLocation()
    {
        navigator.geolocation.getCurrentPosition(
            (position)=>{
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
                if(position.coords.latitude>0)
                {
                    setHemisphere("Northern Hemipshere");
                }
                else if(position.coords.lat<0)
                {
                    setHemisphere("Southern Hemipshere");
                }
                else
                setHemisphere("Equator");
            }
        )

    }

   

    return (
      <div>
        <h1>weather app</h1>
        <h3>Latitude : {lat}</h3>
        <h3>Longitude : {long} </h3>
        <h3>Hemipshere : {hemisphere}</h3>
        <h3>Month : {months[month-1]}</h3>
        <button onClick={getLocation}>get Location</button>
        {
            hemisphere&&((hemisphere=="Northern Hemipshere" &&month>=3&&month<=5)||(hemisphere=="Southern Hemipshere" &&month>=9&&month<=11))&&
            <div>
                <h1>Summer</h1>
                <img src={summer} ></img>
            </div>

             
        }
          {
            hemisphere&&((hemisphere=="Northern Hemipshere" &&month>=6&&month<=8)||(hemisphere=="Southern Hemipshere" &&(month==12||month<=2)))&&
            <div>
                <h1>Spring</h1>
                <img src={spring} ></img>
            </div>

             
        }
         {
            hemisphere&&((hemisphere=="Northern Hemipshere" &&month>=9&&month<=11)||(hemisphere=="Southern Hemipshere" &&(month==3||month<=5)))&&
            <div>
                <h1 style={{color:"white"}}>Spring</h1>
                <img src={autumn} ></img>
            </div>

             
        }
         {
           hemisphere&&((hemisphere=="Souther Hemipshere" &&month>=6&&month<=8)||(hemisphere=="Northern Hemipshere" &&(month==12||month<=2)))&&
            <div>
                <h1 style={{color:"white"}}>Spring</h1>
                <img src={winter} ></img>
            </div>

             
        }
      
      </div>
    )
}

export default App;

