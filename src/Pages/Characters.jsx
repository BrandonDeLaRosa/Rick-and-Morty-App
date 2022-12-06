import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [byName, setByName] = useState(false)
    const [page, setPage] = useState(1)
    
    const prevPage= () => {
        setPage(page - 1)
    }
    const nextPage= () => {
        setPage(page + 1)
    }
    
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
        .then(res => setCharacters(res.data.results))
    },[page])
    
    // console.log(characters);
    // -------------------------------------------------------------------------------------
    const [charactersFilter, setCharactersFilter] = useState([])
    const [userSearch, setUserSearch]= useState("")
    

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${userSearch}`)
         .then(res => setCharactersFilter(res.data.results))
         .catch(error => {
            if(error.response.status === 404){
                alert("Sorry, no more characters to show, please go back!")
            }else{
                console.log(error.response)
            }
         })
    },[userSearch,page])

    // console.log(charactersFilter);

    return (
        <div>
            <Header />
            <div className='charactersContainer'>
                <h1 className='welcome'>Characters List</h1> 
                <button className='byNameBtn' onClick={() => setByName(!byName)}>
                    {byName?  "Search by id" : "Search by name"}
                </button><hr /><br />

                {
                    byName ?
                        (
                            <>
                                {/* <h2>{byName? "Characters by name list" : "Characters by id list"}</h2> */}
                                <input 
                                className='inputListCharacter' type="text"
                                 placeholder='Set a character name' 
                                 value={userSearch} onChange={e => setUserSearch(e.target.value)} />
                                <ul className='charactersList'>
                                    {
                                        charactersFilter.map(character => (
                                            <Link
                                                className='lideco'
                                                key={character.id}
                                                to={`/resident/${character.id}`}>
                                                <img className='charactersImg' src={character.image} alt="characterImg" />
                                                <h3 className='characterName'>{character.id} {character.name}</h3><br />
                                            </Link>
                                        ))
                                    }
                                </ul>

                               <div className='listBtnContainer'>
                               <button className='listBtns' onClick={prevPage} disabled={page === 1} >prev</button>
                                <h3 className='pageNum'>{page}</h3>
                                <button className='listBtns' onClick={nextPage} >next</button>
                               </div>
                            </>
                        )
                        :
                        (
                            <>                          
                                <ul className='charactersList'>
                                    {
                                        characters.map(character => (
                                            <Link
                                               className='lideco'
                                                key={character.id}
                                                to={`/resident/${character.id}`}>
                                                <img className='charactersImg' src={character.image} alt="characterImg" />
                                                <h3 className='characterName'>{character.id} {character.name}</h3><br />
                                            </Link>
                                        ))
                                    }
                                </ul>
                               <div className='listBtnContainer'>
                               <button className='listBtns' onClick={prevPage} disabled={page === 1} >prev</button>
                                <h3 className='pageNum'>{page}</h3>
                                <button className='listBtns' onClick={nextPage} disabled={page === 42} >next</button>                       
                               </div>
                            </>
                        )
                }

            </div>
        </div>
    );
};

export default Characters;