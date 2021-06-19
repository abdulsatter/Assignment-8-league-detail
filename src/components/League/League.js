import React from 'react';
import { Link } from 'react-router-dom';
import './League.css'


const League = (props) => {
    const {strLeague,idLeague,strSport} = props.team;
    return (
        <div className='league-container'>
            <h2>{strLeague}</h2>
            <p>TeamID:{idLeague}</p>
            <p>{strSport}</p>
            <Link to ={ `/info/${idLeague}`}><button className='btn'>Explore</button></Link>
        </div>
    );
};

export default League;