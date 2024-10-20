import { useState } from "react";

const Country = ({country, handelVisitedCountry}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false)
    
    const handelVisited = () => {
        setVisited(!visited)
    }
    console.log(handelVisitedCountry);
    return (
        <div className={`box ${visited ?'visited' : 'non-visited'}`}>
            <h4 style={{color: visited ? "white" : "green"}}>Name: {name?.common}</h4>
            <img src={flags.png}  alt="" />
            <p>Population: {population}</p>
            <p>area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={ () => handelVisitedCountry(country)}>Visited</button>
            <button className="btn" onClick={handelVisited}>{ visited ? 'Visited' : 'go to'}</button>
            {
                visited ? 'I have visited this country' : ' I want to visited'
            }
        </div>
    );
};

export default Country;