import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import Residents from './Residents';

const LocationInfo = () => {

    const [locationInfo, setLocationInfo] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()

    const nextNum = () => {
        navigate(`/location/${(locationInfo.id) + 1}`)
    }
    const prevNum = () => {
        navigate(`/location/${(locationInfo.id) - 1}`)
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
         .then(res => setLocationInfo(res.data))
         .catch(error => console.log(error.response))
    },[id,nextNum,prevNum])

    // console.log(searchByNum);
    // console.log(locationInfo); 

    // ======================== Pagination ============================

    const [page,setPage] = useState(1) 
    const residentsPerPage= 10

    const lastIndex= page * residentsPerPage
    const firstIndex= lastIndex - residentsPerPage
    const residentsPaginated = locationInfo.residents?.slice(firstIndex, lastIndex)

    const totalPages= Math.ceil(locationInfo.residents?.length / residentsPerPage)
    
    const numbers= []
    for(let i = 1; i < totalPages; i++){
        numbers.push(i)
    }

    return (
        <div>
            <Header />
            <div className='locationInfo'>
                <h1 className='welcome'>Location Info</h1>
                <div className='locationText'>
                    <h2 className='titleFlex'><b className='title'>Location Id: </b> {id}</h2>
                    <h2 className='titleFlex'><b className='title'>Name: </b>{locationInfo.name}</h2>
                    <h2 className='titleFlex'><b className='title'>Dimension: </b>{locationInfo.dimension}</h2>
                    <h2 className='titleFlex'><b className='title'>Type: </b>{locationInfo.type}</h2>
                    <h2 className='titleFlex'><b className='title'>Population: </b>{locationInfo.residents?.length}</h2>
                </div>

                <div className='residentsBtns'>
                    <button  className='pagesBtns' onClick={() => setPage(page - 1)} disabled={page === 1}>
                        prev
                    </button>
                    {numbers.map(number => (
                        <button className='pagesBtn' onClick={() => setPage(number)}>
                            {number}
                        </button>
                    ))}
                    <button className='pagesBtns'  onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                        next
                    </button>

                </div>
                <ul className='cardsF'>
                    {
                        // locationInfo.residents?.map(resident => (
                        residentsPaginated?.map(resident => (
                            <Residents
                                key={resident}
                                residents={resident}
                            />
                        ))
                    }
                </ul>

                <div className='listBtnContainer'>
                    <button className='listBtns' onClick={prevNum} disabled={id === 1} >Prev Locations</button>
                    <h3 className='pageNum'>{id}</h3>
                    <button className='listBtns' onClick={nextNum} disabled={id === 126}>Next Location</button>
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;

 // const residents = locationInfo.residents?.length
    // const message = () => {
    //     if ( residents === 0) {
    //         return <h2>Sorry, this  locations has ZERO Residents!</h2>
    //     }else{
    //         return residents
    //     }
    // }


     {/* <button onClick={newLocation}>Search Location</button> */}