import fingerPrintImage from '../../images/fingersensor.gif';
import logo from '../../images/pharmaLogo.png';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const Main = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = () => {
        // Perform login logic here
        login();
        navigate('/home');
    };

    return(
        <div className="w-screen h-screen bgColor flex flex-col justify-center items-center">
            <img className='fixed -top-10 left-1 w-52' src={logo}></img>
            <div className="flex justify-center items-center mt-10 flex-col w-1/3 text-center">
                <h1 className="poppins-semibold z-30 text-5xl">Log In</h1>
                <p className="poppins-medium z-30 text-lg mt-5">Please use the finger print scanner to log in to the PharmaBotics Dispense.</p>
                <img className='z-10 pointer-events-none -mt-16' src={fingerPrintImage}></img>
            </div>
            <button onClick={handleLogin}>Log In</button>
        </div>
    )
}
