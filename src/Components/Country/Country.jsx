import { useState } from 'react';
import './Country.css'


const Country = ({country , handleVisitedCountries}) => {
    const [visited, setVisited] = useState(false)
    const handleVisited = () =>{
        setVisited(!visited)
    } 
    const {name, flags} = country
    console.log(handleVisitedCountries)
    return (
        <div className = {`country ${visited && `visited-countries`}`}>
            <img src= {flags.png} alt="" />
            <h4>Name : {name?.common} </h4>
            <button onClick={handleVisited}>visited</button>
            <br />
            <button onClick={() => handleVisitedCountries(country)}>Add To list.</button>
        </div>
    );
};

export default Country;