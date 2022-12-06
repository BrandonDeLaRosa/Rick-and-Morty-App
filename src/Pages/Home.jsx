import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const randomNum = Math.ceil(Math.random() * 126)
    const randomNumChracter = Math.ceil(Math.random() * 826)

    return (
        <div className='home'>
            
            <div className='links'>
            <h1 className='welcome'>Welcome!</h1>
            <Link className='link' to="/locations">All locations</Link><br />
            <Link className='link' to={`/characters`}>All characters</Link><br />
            <Link className='link' to={`/location/${randomNum}`}>Location Info</Link><br />
            <Link className='link' to={`/resident/${randomNumChracter}`}>Character Info</Link><br />
            </div>
        </div>
    );
};

export default Home;