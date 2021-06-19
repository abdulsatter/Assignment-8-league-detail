import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'

const Home = () => {
 
    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, []);

    return (
        <div className='grid'>
                {
                    leagues.map(lg => <League team = {lg}></League>)

  
                }
                
           
        </div>
            );
};

            export default Home;