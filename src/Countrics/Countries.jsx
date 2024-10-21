import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countries, setCounters] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    const [visitFlag, setVisitFlag] = useState([])

    const handelFlag = (flag) => {
        console.log('hello ji keso ho')
        const newFlag = [...visitFlag, flag]
        setVisitFlag(newFlag)
    }


    const handelVisitedCountry = country => {
        // console.log('hello i am devoloper')
        const newVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(newVisitedCountry);
    }

    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCounters(data))
    },[])
    return (
        <div>
            <div>
                <h6>Visited countries: {visitedCountry.length}</h6>
                <ul>
                  {
                    visitedCountry.map(country => <li key={country.cca3}>{country.name.common}</li>)
                  }
                </ul>
            </div>
            {/* display flags show */}
            <div className="flag">
                {
                    visitFlag.map((flag, index) => <img className="img" key={index} src={flag}></img>)
                }

            </div>
            <h4>Countries: {countries.length}</h4>
           <div className="container">
           {
                countries.map(countrie => <Country key={countrie.cca3} handelFlag={handelFlag} handelVisitedCountry={handelVisitedCountry} country={countrie}></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;