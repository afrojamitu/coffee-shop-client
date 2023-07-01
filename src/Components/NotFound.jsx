import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-9/12 mx-auto flex flex-col justify-center items-center'>
            <Link to='/' className='flex font-bold items-center gap-2 italic bg-[#D2B48C] border-2 border-[#D2B48C] hover:bg-transparent px-3 py-1 mt-8' style={{transition: '.5s'}}> <FaArrowLeft className='text-xl' /> Back to Home</Link>

            <img className='w-[80%]' src="https://i.ibb.co/Lnw3h6y/404.gif" alt="" />

        </div>
    );
};

export default NotFound;