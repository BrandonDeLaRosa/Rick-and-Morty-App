import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/backGroundRick.jpg'

const Header = () => {
    const randomNum = Math.ceil(Math.random() * 126)
    const randomNumChracter = Math.ceil(Math.random() * 826)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className='header'>
            <button className='menuBtn' onClick={() => setIsVisible(!isVisible)}>
                <img className='iconImg'
                    style={{ height: "90px", }}
                    src={menu} alt="menuIcon"
                />
            </button><br />
            {
                isVisible ? (
                    <>
                        <div className='menu'>
                            <Link className='link' to="/">Home</Link> <br />
                            <Link className='link' to="/locations">All locations</Link><br />
                            <Link className='link' to={`/characters`}>All characters</Link><br />
                            <Link className='link' to={`/location/${randomNum}`}>Location Info</Link><br />
                            <Link className='link' to={`/resident/${randomNumChracter}`}>Character Info</Link><br />
                        </div>
                    </>
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default Header;


/*

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from '../assets/backGroundRick.jpg'

const Header = () => {
    const randomNum = Math.ceil(Math.random() * 126)
    const randomNumChracter = Math.ceil(Math.random() * 826)
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className='header'>
            <button className='menuBtn' onClick={() => setIsVisible(!isVisible)}>
                <img style={{ height: "100px" }} src={menu} alt="" />
            </button><br />
            {
                isVisible? (
                    <>
                          <div >
                <Link to="/">Home</Link> <br />
                <Link to="/locations">All locations</Link><br />
                <Link to={`/characters`}>All characters</Link><br />
                <Link to={`/location/${randomNum}`}>Location Info</Link><br />
                <Link to={`/resident/${randomNumChracter}`}>Character Info</Link><br />
            </div>
                    </>
                ) : (
                    <><h6>Click me</h6></>
                )
            }
        </div>
    );
};

export default Header;
*/