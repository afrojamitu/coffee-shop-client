import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-[#ECEAE3]'>
            <div className='grid md:grid-cols-2 items-center gap-8 w-9/12 mx-auto py-10 md:pt-20 md:pb-16'>
                <div className='text-orange-950  space-y-4'>
                    <img className='w-16' src="https://i.ibb.co/RBDwnXK/logo1.png" alt="" />
                    <h2 className='text-3xl font-bold italic' style={{ fontFamily: 'Lato' }}>Espresso Emporium</h2>
                    <p>Always ready to be your friend. Come & Contact with us to share<br/> your memorable moments, to share with your best companion.</p>

                    <div className='flex gap-3 text-2xl'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>

                    <div className='mt-5'>
                        <h2 className='text-3xl font-bold italic mb-3' style={{ fontFamily: 'Lato' }}>Get In Touch</h2>
                        <p className='flex items-center gap-3'><FaPhone /> +88 01533 333 333</p>
                        <p className='flex items-center gap-3'><FaEnvelope /> info@gmail.com</p>
                        <p className='flex items-center gap-3'><FaMapMarkerAlt /> 72, Wall street, King Road, Dhaka</p>
                    </div>

                </div>


                <div className=' space-y-3'>
                    <h2 className='text-3xl font-bold italic text-orange-950' style={{ fontFamily: 'Lato' }}>Connect With Us</h2>
                    <input className='w-full px-3 py-2 rounded' type="text" name="name" id="" placeholder='Name' />
                    <br />
                    <input className='w-full px-3 py-2 rounded' type="email" name="email" id="" placeholder='Email' />
                    <br />
                    <textarea className='w-full h-32 px-3 py-2 rounded' name="message" placeholder='Type your message here'></textarea>
                    <br />
                    <button className='bg-transparent hover:bg-[#D2B48C] rounded-2xl font-bold border-2 border-[#D2B48C] px-3 py-1 flex items-center gap-2' style={{ transition: '.5s' }}> Send Message</button>
                </div>
            </div>

            <div className='footer-bg text-center flex items-center justify-center text-white font-semibold italic'>
                <p>Copyright Espresso Emporium ! All Rights Reserved</p>
                <p>.</p>
            </div>
        </div>
    );
};

export default Footer;