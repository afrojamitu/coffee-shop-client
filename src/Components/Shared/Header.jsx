import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-image flex justify-center gap-2 items-center'>
            <img className='w-10' src="https://i.ibb.co/RBDwnXK/logo1.png" alt="" />
            <h1 className='text-3xl text-center text-white font-bold' style={{ fontFamily: 'Rancho' }}>Espresso Emporium</h1>
        </div>
    );
};

export default Header;