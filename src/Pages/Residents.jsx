import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Residents = ({residents}) => {

    const [resident, setResident] = useState([])

    useEffect(() => {
        axios.get(residents)
        .then(res => setResident(res.data))
        .catch(error => console.log(error.response))
    },[])

    // console.log(resident);

    return (

        <Link 
        className='residentCard'
        to={`/resident/${resident.id}`}>
            <img className='cardImg' src={resident.image} alt="ResidentImg" />
            <h3 className='cardName'>{resident.name}</h3>
        </Link>

    );
};

export default Residents;