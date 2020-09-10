import React from 'react';
import './App.css';
import SearchPage from './Pages/SearchPage';
import DetailsPage from './Pages/DetailsPage';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


const App: React.FC =()=> {
    // const handleClick = async()=> {
    //     const url = 'https://covid-193.p.rapidapi.com/statistics';
    //
    //     await fetch(url, {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "covid-193.p.rapidapi.com",
    //             "x-rapidapi-key": "a23e76b398mshf7a80027655c392p1bea5fjsn093dcd8ceede"
    //         }
    //     })
    //         .then(response=> response.json())
    //         .then( body => {
    //
    //             console.log(body);
    //         })
    //         .catch(err=> {
    //             console.log(err)
    //         })
    //     console.log();
    // };
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <SearchPage />
            </Route>
            <Route exact path="/details">
                <DetailsPage />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
