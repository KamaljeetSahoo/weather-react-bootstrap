import React, {useState} from 'react';
import {Card, FormControl, Button} from 'react-bootstrap';

function Weather() {
    const api = {
        key: "3b062d61eae461840bf564ad91bc268a",
        base: "https://api.openweathermap.org/data/2.5/"
    }

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = (q) => {
        console.log(q);
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }

    return (
        <div className="container mt-5">
            <Card>
                <div className="mt-5 mb-2">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={e => setQuery(e.target.value)} value={query}/>
                </div>
                <div className="text-center">
                    <Button onClick={() => search({query})}>Search</Button>
                </div>
                <div className="mt-5 text-center mb-5">
                    <Card.Body>This is some text within a card body.</Card.Body>
                </div>
            </Card>
        </div>
    )
}

export default Weather
