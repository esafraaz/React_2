import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
	const [countries, setCountries] = useState([]);
	const [visitedCountries, setVisitedCountries] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((res) => res.json())
			.then((data) => setCountries(data));
	}, []);
    const handleVisitedCountries = country => {
        console.log('yes . i came to you.')
        const newVisited = [...visitedCountries, country];
        setVisitedCountries(newVisited)

    }
	return (
		<div>
			<h2> Total Countries: {countries.length} </h2>
            <div>
                <ul>
                    {
                        visitedCountries.map(country =><li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
			<div className="countries-container">
				{countries.map((country) => (
					<Country key={country.opulation} handleVisitedCountries={handleVisitedCountries} country={country}></Country>
				))}
			</div>
		</div>
	);
};

export default Countries;
