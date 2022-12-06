import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Home = () => {
    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [userSearch, setUserSearch] = useState("")
    const [byName, setByName]= useState (true)
   
    const nextNum = () => {
        setPage(page + 1)
    }
    const prevNum = () => {
        setPage(page - 1)
    }

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location?page=${page}`)
        .then(res => setLocations(res.data.results))
    },[page])
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/location?name=${userSearch}`)
        .then(res => setLocations(res.data.results))
    },[userSearch]) 

    console.log(locations);
    // ------------------------------------------------------------------------------------

    const [location, setLocation] = useState({})
    const [search, setSearch] = useState("")

    const userIdSearch = () => {
       if(search < 126 && search >= 1) {
        return  axios.get(`https://rickandmortyapi.com/api/location/${search}`)
                .then(res => setLocation(res.data))
       }else{
        alert("Sorry, the location id number must be inbetween 1 and 126!")
       }
    }

    console.log(location);
    
    return (
        <div >
            <Header/>
            <div className='locationsContainer'>
            <h1 className='welcome'>{byName? "Location name" : "Location id"}</h1>
            <button className='byNameBtn' onClick={() => setByName(!byName)}>Search By {byName ? "Location id" : "Location Name"}</button> <br />
            {
                byName ? (
                    <>
                    <input className='inputList' type="text" value={userSearch} onChange={e => setUserSearch(e.target.value)} placeholder={byName ? "Location name" : "Location Id"} /> <br />
                        <ul className='listList'>
                            {
                                locations.map(location => (
                                        <Link className='linkList1'
                                            key={location.id}
                                            to={`/location/${location.id}`}>
                                            <h3>{location.name}</h3>
                                        </Link>

                                ))
                            }
                        </ul>
                        <div className='listBtnContainer'>
                        <button className='listBtns' onClick={prevNum} disabled={page === 1} >Prev</button>
                        <h3 className='pageNum'>{page}</h3>
                        <button className='listBtns' onClick={nextNum} disabled={page === 7}>Next</button>
                        </div>
                    </>
                ) : (
                        <>
                            
                            <input className='inputList' type="number" placeholder='Set an id number' value={search} onChange={e => setSearch(e.target.value)} />
                            <button className='byIdBtn' onClick={userIdSearch}>Search</button><br /><br />
                            <Link 
                            //    className='searchResult'
                               className='linkList'
                               to={`/location/${location.id}`}>
                               <h3 className='searchResult'>{location.name}</h3>
                            </Link>

                        </>
                )
         }
            </div>
        </div>
    );
};

export default Home;