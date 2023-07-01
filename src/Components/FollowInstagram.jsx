import React from 'react';
import { Link } from 'react-router-dom';

const FollowInstagram = () => {
    return (
        <div className='w-9/12 mx-auto mb-12'>
            <p className='text-center text-orange-900'><Link to='https://www.instagram.com/'>Follow Us Now</Link></p>
            <h1 className='text-center font-bold text-4xl mb-8'>Follow on Instagram</h1>

            <div className='grid md:grid-cols-4 gap-5'>
                <img src="https://i.ibb.co/Nr9sq8P/Rectangle-11.png" alt="" />
                <img src="https://i.ibb.co/FD56TV3/Rectangle-12.png" alt="" />
                <img src="https://i.ibb.co/s521c0v/Rectangle-9.png" alt="" />
                <img src="https://i.ibb.co/nb7r4pN/Rectangle-15.png" alt="" />
                <img src="https://i.ibb.co/By9fNkm/Rectangle-14.png" alt="" />
                <img src="https://i.ibb.co/4NMGxqh/Rectangle-10.png" alt="" />
                <img src="https://i.ibb.co/5GjnDQ6/Rectangle-16.png" alt="" />
                <img src="https://i.ibb.co/JqBdFKW/Rectangle-13.png" alt="" />
            </div>
        </div>
    );
};

export default FollowInstagram;