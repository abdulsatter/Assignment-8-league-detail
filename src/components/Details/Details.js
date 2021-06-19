import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {

    const { id } = useParams();
    const [info, setInfo] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInfo(data.leagues[0]))
    }, [id])
    return (
        <div className='main'>
            <div className='header'>
                <img src={info.strFanart1} alt="" />

            </div>
            <div className='cart'>
                <img className='logo' src={info.strBadge} alt="" />
                <h3>{info.strLeague}</h3>
                <p>event:{info.dateFirstEvent}</p>
                <p>Country:{info.strCountry}</p>
                <p>Gender:{info.strGender}</p>
                <img className='side-view' src={info.strBanner} alt="" />
            </div>
            <div className='info'>
                <p><small>{info.strDescriptionEN}</small></p>
            </div>
        </div>
    );
};

export default Details;