import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
const [data, setData]=useState([])
const [rangeData, setRangeDate]=useState();
const continents=["Africa","America","Asia","Europe","Oceania"];
const [selectedRadio,setSelectRadio]=useState("");

useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((res)=>setData(res.data))
},[])


    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input type="range" min="1" max="250" defaultValue={rangeData} onChange={(e)=>{
                    setRangeDate(e.target.value)
                }}/>
                {
                   continents.map((continent)=>(
                        <li>
                            <input type="radio" name="ben"
                            checked={continent === selectedRadio}
                            id={continent} onChange={(e)=>setSelectRadio(e.target.id)
                            }/>
                            <label htmlFor={continent}>{continent}</label>
                          
                        </li>
                        
                    ))
                }
            </ul>
            {
                (selectedRadio && <button onClick={()=>setSelectRadio("")}> Reinitialiser</button>)
            }
            <ul>
                {
                    data
                    .filter((country)=>country.continents[0].includes(selectedRadio))
                    .sort((a,b)=>b.population-a.population)
                    .slice(0,rangeData)
                    .map((country,index)=>
                        <Card key={index} country={country}/>
                    )
                }
            </ul>
        </div>
    );
};

export default Countries;