import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Components/Header';

const CharacterInfo = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})
   
    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
         .then(res => setCharacter(res.data))
    },[id])

    console.log(character);
  

    const nextCharacter=() => {
        navigate(`/resident/${(character.id) + 1}`)
    }

    const prevCharacter= () => {
        navigate(`/resident/${(character.id) -1}`)
    }

    return (
        <div>
            <Header />
            <div className='characterInfoContainer'>
                <h1 className='welcome'>Character Info</h1>
                <div className='characterBody'>
                    <img className='characterInfoImg' src={character.image} alt="" />
                    <div className='titleContainer'>
                        <h2 className='characterInfoName'>{character.name}</h2>
                        <h3><b className='title'>Location: </b>{character.location?.name}</h3>
                        <h3><b className='title'>Entire show appearences: </b>{character.episode?.length}</h3>
                        <h3><b className='title'>Status: </b>{character.status}</h3>
                        <h3><b className='title'>Species: </b>{character.species}</h3>
                        <h3><b className='title'>Type: </b>{character.type? character.type : "Unknown"}</h3>
                        <h3><b className='title'>Gender: </b>{character.gender}</h3>
                    </div>
                </div>

                <div className='listBtnContainer'>
                    <button className='listBtns' onClick={prevCharacter} disabled={(character.id) === 1}>
                        Prev</button>
                    <h3 className='pageNum'>{id}</h3>
                    <button className='listBtns' onClick={nextCharacter} disabled={(character.id) === 826}>
                        Next</button>
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;